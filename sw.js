// InstAisle Service Worker
// Caches the app shell for offline use and fast loading

const CACHE_NAME = 'instaisle-v1';

// Core files to cache on install
const PRECACHE_URLS = [
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@700;900&display=swap'
];

// ── Install: pre-cache app shell ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache what we can — don't fail install if some external resources are unavailable
      return Promise.allSettled(
        PRECACHE_URLS.map(url => cache.add(url).catch(() => {}))
      );
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: clean up old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: network-first for Firebase/API, cache-first for app shell ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always go network-first for Firebase, Anthropic API, and Google Fonts loading
  const isExternal =
    url.hostname.includes('firebase') ||
    url.hostname.includes('google') ||
    url.hostname.includes('anthropic') ||
    url.hostname.includes('gstatic');

  if (isExternal) {
    // Network only — don't cache Firebase auth/Firestore calls
    event.respondWith(fetch(event.request).catch(() => new Response('', { status: 503 })));
    return;
  }

  // For local app files: cache-first, fall back to network
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful GET responses for app files
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // If offline and no cache — return a minimal offline page
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        return new Response('', { status: 503 });
      });
    })
  );
});
