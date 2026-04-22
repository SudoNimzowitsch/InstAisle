// Grocery aisle templates — lazy-loaded by index.html
// Assigned to global GROCERY_TEMPLATES (declared as var in index.html)
GROCERY_TEMPLATES = [

  // ── 1. PRODUCE ──────────────────────────────────────────────────────────
  {
    name: 'Produce',
    clusters: [
      {
        name: 'Fresh Fruit',
        keywords: [
          'apple','banana','orange','grape','strawberry','blueberry','lemon','lime',
          'avocado','raspberry','blackberry','watermelon','cantaloupe','honeydew',
          'peach','plum','pear','mango','pineapple','kiwi','cherry','grapefruit',
          'tangerine','clementine','mandarin','pomelo','nectarine','apricot',
          'cranberry','gooseberry','elderberry','papaya','coconut','guava',
          'passionfruit','lychee','dragon fruit','rambutan','jackfruit','fig',
          'date','pomegranate','persimmon','quince','starfruit','kumquat',
          'blood orange','navel orange','melon','olive','pitaya',
        ],
      },
      {
        name: 'Fresh Vegetables',
        keywords: [
          'tomato','lettuce','spinach','kale','broccoli','carrot','celery',
          'cucumber','pepper','onion','garlic','mushroom','potato','sweet potato',
          'cauliflower','cabbage','zucchini','squash','bell pepper','jalapeño',
          'corn','asparagus','green beans','peas','beets','radish','arugula',
          'romaine','iceberg','eggplant','artichoke','brussels sprouts',
          'leek','scallion','green onion','shallot','yellow onion','red onion',
          'white onion','chives','cherry tomato','heirloom tomato','butternut squash',
          'acorn squash','spaghetti squash','pumpkin','snap peas','snow peas',
          'lima beans','edamame','okra','fennel','shiitake','portobello',
          'oyster mushroom','cremini','bok choy','napa cabbage','kohlrabi',
          'broccolini','daikon','turnip','parsnip','rutabaga','yam','cassava',
          'taro','celeriac','yellow squash','delicata squash','kabocha',
          'bitter melon','bottle gourd','chayote','nopales','jicama','plantain',
          'serrano','poblano','habanero','chili pepper',
          'butterhead lettuce','romaine lettuce','iceberg lettuce',
        ],
      },
      {
        name: 'Fresh Herbs',
        keywords: [
          'basil','cilantro','parsley','mint','dill','rosemary','thyme',
          'oregano','sage','tarragon','lemongrass','chives','green onion',
          'ginger root','turmeric root','fresh herbs',
        ],
      },
      {
        name: 'Specialty & Exotic Produce',
        keywords: [
          'microgreens','sprouts','watercress','swiss chard','collard greens',
          'mustard greens','beet greens','turnip greens','savoy cabbage',
          'red cabbage','green cabbage',
          'seaweed','nopales','jicama','taro root','yuca','breadfruit',
          'ackee','soursop','sapodilla','mangosteen','longan','durian',
          'rambutan','lychee','dragon fruit','starfruit','carambola',
          'passion fruit','yuzu','blood orange','kumquat',
        ],
      },
    ],
  },

  // ── 2. MEAT & POULTRY ───────────────────────────────────────────────────
  {
    name: 'Meat & Poultry',
    clusters: [
      {
        name: 'Chicken',
        keywords: [
          'chicken','chicken breast','chicken thighs','chicken wings',
          'whole chicken','rotisserie chicken','chicken drumsticks',
          'chicken tenders','ground chicken','bone-in chicken',
          'marinated chicken','stuffed chicken breast','chicken burgers',
          'chicken liver','chicken heart','cornish hen',
        ],
      },
      {
        name: 'Beef',
        keywords: [
          'beef','ground beef','steak','ribeye','sirloin','filet mignon',
          'chuck roast','brisket','short ribs','flank steak','skirt steak',
          'beef patties','stew meat',
          'sirloin steak','t-bone steak','porterhouse steak','corned beef',
          'beef liver','beef tenderloin','tri-tip','hanger steak',
          'flat iron steak','top round','bottom round','eye of round',
          'beef chuck','beef shank','beef ribs','chuck eye',
          'beef cheeks','beef tongue','tripe','oxtail','beef franks',
          'beef suet','meatballs','meatloaf mix',
        ],
      },
      {
        name: 'Pork',
        keywords: [
          'pork','bacon','ham','sausage','pork chops','pork tenderloin',
          'pork ribs','hot dog','bratwurst','italian sausage','chorizo',
          'kielbasa','breakfast sausage','smoked sausage','pork shoulder',
          'pork belly','baby back ribs','pork butt','spare ribs','pork loin',
          'marinated pork','ground pork','salt pork','fatback','pork belly slices',
          'guanciale','lard','blood sausage',
          'pancetta','andouille',
          'linguica','merguez','ham steaks',
          'turkey bacon',
        ],
      },
      {
        name: 'Turkey & Other Poultry',
        keywords: [
          'turkey','ground turkey','turkey breast','whole turkey',
          'turkey burgers','turkey bacon','turkey sausage',
          'duck','duck breast','duck leg','goose',
          'pheasant','quail',
        ],
      },
      {
        name: 'Lamb, Veal & Specialty',
        keywords: [
          'lamb','lamb chops','lamb shank','ground lamb','rack of lamb',
          'lamb shoulder','lamb ribs','leg of lamb','veal','veal chops',
          'veal cutlet','ground veal','osso buco','bison','venison','elk',
          'wild boar','rabbit','alligator','frog legs',
        ],
      },
      {
        name: 'Deli Meats',
        keywords: [
          'deli','salami logs',
          'pepperoni stick','giblets','skewers','kebab meat',
          'pre-seasoned pork',
        ],
      },
    ],
  },

  // ── 3. SEAFOOD ──────────────────────────────────────────────────────────
  {
    name: 'Seafood',
    clusters: [
      {
        name: 'Fresh & Refrigerated Fish',
        keywords: [
          'salmon','tuna','tilapia','cod','halibut','mahi mahi','sea bass',
          'trout','catfish','flounder','swordfish','snapper','grouper',
          'pollock','haddock','branzino','striped bass','yellowfin tuna',
          'bluefin tuna','ahi tuna','swordfish steak','sole','arctic char',
          'whiting','walleye','pike','rockfish','monkfish','skate','turbot',
          'black cod','sablefish','atlantic salmon','sockeye salmon',
          'tuna steak','fish fillets','smoked salmon','lox','whitefish',
          'sushi grade tuna','gravlax','smoked whitefish','smoked trout',
          'smoked mackerel','smoked herring','salt cod','bacalao',
          'pickled herring','anchovies','sardine','herring','mackerel',
        ],
      },
      {
        name: 'Fresh & Refrigerated Shellfish',
        keywords: [
          'shrimp','crab','lobster','scallops','clams','mussels','oysters',
          'squid','calamari','octopus','jumbo shrimp','crab legs',
          'dungeness crab','crawfish','peeled shrimp','bay scallops',
          'sea scallops','littleneck clams','langoustine','whelk',
          'stone crab','snow crab','soft shell crab','blue crab',
          'razor clam','manila clam','geoduck','sea urchin','uni',
          'abalone','conch','king crab','crayfish','prawns',
        ],
      },
      {
        name: 'Packaged & Specialty Seafood',
        keywords: [
          'smoked mussels','smoked oyster','fish cakes','surimi',
          'imitation crab','fish ball','salmon roe','tobiko','masago',
          'caviar','fish roe','crab cake','shrimp cocktail',
        ],
      },
      {
        name: 'Frozen Seafood',
        shared: true, // also found in Frozen Foods aisle
        keywords: [
          'frozen shrimp','frozen salmon','frozen fish fillets','frozen scallops',
          'frozen lobster tails','frozen crab cakes','frozen breaded shrimp',
          'popcorn shrimp','breaded scallops','tempura shrimp','fish sticks',
          'breaded fish fillets','frozen shrimp rings',
        ],
      },
    ],
  },

  // ── 4. DELI ─────────────────────────────────────────────────────────────
  {
    name: 'Deli',
    clusters: [
      {
        name: 'Sliced Meats',
        keywords: [
          'roast beef','salami','pepperoni',
          'prosciutto','mortadella','bologna','pastrami','corned beef deli',
          'capicola','sopressata','liverwurst','head cheese',
        ],
      },
      {
        name: 'Sliced Cheese',
        shared: true, // also found in Dairy aisle
        keywords: [
          'sliced cheese','sliced cheddar','sliced swiss','sliced provolone',
          'sliced muenster','sliced american','sliced pepper jack',
          'sliced gouda','deli cheese','fresh mozzarella','burrata',
          'kraft singles',
        ],
      },
      {
        name: 'Prepared Foods & Hot Bar',
        keywords: [
          'prepared foods','hot bar','deli salad',
          'potato salad','coleslaw','macaroni salad','pasta salad',
          'stuffed peppers','meatloaf','lasagna deli','soup deli',
          'sandwich','wrap','sub','panini',
        ],
      },
      {
        name: 'Dips, Spreads & Olives',
        keywords: [
          'hummus','guacamole','tzatziki','baba ganoush','spinach dip',
          'artichoke dip','olive bar','olives','stuffed olives',
          'pickles','pickled vegetables','deli pickles',
        ],
      },
    ],
  },

  // ── 5. DAIRY ────────────────────────────────────────────────────────────
  {
    name: 'Dairy',
    clusters: [
      {
        name: 'Milk & Milk Alternatives',
        keywords: [
          'milk','whole milk','skim milk','2% milk','1% milk',
          'chocolate milk','buttermilk','lactose free milk','goat milk',
          'oat milk','almond milk','soy milk','coconut milk beverage',
          'cashew milk','hemp milk','rice milk','pea milk','macadamia milk',
          'flax milk','powdered milk','evaporated milk','half and half',
          'lactaid',
          'eggnog','kefir','drinkable yogurt',
        ],
      },
      {
        name: 'Cheese',
        keywords: [
          'cheese','cheddar','mozzarella','parmesan','american cheese',
          'cottage cheese','ricotta','feta','string cheese','shredded cheese',
          'bocconcini','goat cheese','chevre','romano','swiss cheese',
          'aged gouda','gouda','edam','smoked gouda','raclette','roquefort',
          'danish blue','babybel','laughing cow','velveeta','colby',
          'colby jack','pepper jack','monterey jack','brie','camembert',
          'blue cheese','gorgonzola','stilton','pecorino','asiago',
          'fontina','provolone','muenster','havarti','gruyere','emmental',
          'jarlsberg','manchego','paneer','halloumi','queso fresco','queso blanco',
          'cotija','oaxacan cheese','cream cheese','labneh',
          'creme fraiche','mascarpone','quark',
        ],
      },
      {
        name: 'Yogurt',
        keywords: [
          'yogurt','greek yogurt','plain yogurt','flavored yogurt','skyr',
          'soy yogurt','dairy free yogurt','coconut yogurt','almond yogurt',
        ],
      },
      {
        name: 'Butter & Cream',
        keywords: [
          'butter','unsalted butter','salted butter','european butter',
          'whipped butter','cultured butter','clarified butter','ghee',
          'margarine','plant based butter','vegan butter','dairy free butter',
          'heavy cream','whipping cream','light cream','sour cream',
          'dairy free sour cream','clotted cream','half and half',
          'cool whip','aerosol whipped cream',
          'whipped cream',
        ],
      },
      {
        name: 'Eggs',
        keywords: [
          'eggs','brown eggs','white eggs','free range eggs',
          'organic eggs','liquid eggs','egg substitute','duck eggs',
          'quail eggs','egg whites',
        ],
      },
    ],
  },

  // ── 6. FROZEN FOODS ─────────────────────────────────────────────────────
  {
    name: 'Frozen Foods',
    clusters: [
      {
        name: 'Frozen Meals & Entrees',
        keywords: [
          'frozen meal','frozen dinner','tv dinners','frozen lasagna','frozen pizza',
          'frozen pot pie','frozen mac and cheese','frozen chili',
          'frozen pasta','frozen Indian meals','frozen Asian meals',
          'frozen enchiladas','frozen tamales','frozen stuffed peppers',
          'frozen soup','frozen fried rice','frozen pad thai','frozen ramen',
          'frozen burritos',
        ],
      },

      {
        name: 'Frozen Vegetables',
        keywords: [
          'frozen vegetable','frozen broccoli','frozen peas','frozen corn',
          'frozen spinach','frozen edamame','frozen stir fry vegetables',
          'frozen mixed vegetables','frozen kale','frozen brussels sprouts',
          'frozen cauliflower','frozen artichoke hearts',
          'frozen riced cauliflower','frozen zucchini noodles',
          'frozen sweet potato','frozen green beans','frozen carrots',
          'frozen lima beans','frozen okra','frozen collard greens',
          'frozen turnip greens','frozen mustard greens','frozen butternut squash',
          'frozen bell peppers','frozen onions','frozen corn on the cob',
          'frozen asparagus','frozen snap peas','frozen stir fry mix',
        ],
      },
      {
        name: 'Frozen Fruit & Smoothies',
        keywords: [
          'frozen fruit','frozen berries','frozen mango','frozen pineapple',
          'frozen peaches','frozen cherries','frozen pitaya','frozen coconut',
          'frozen avocado','frozen smoothie packs','acai packet',
          'frozen acai',
        ],
      },
      {
        name: 'Frozen Breakfast',
        keywords: [
          'frozen waffles','eggo waffles','frozen pancakes','frozen breakfast sandwiches',
          'frozen breakfast burrito','frozen french toast','frozen crepes',
          'frozen biscuits','frozen oatmeal cups','frozen hash browns',
        ],
      },
      {
        name: 'Frozen Snacks & Appetizers',
        keywords: [
          'frozen appetizers','frozen mozzarella sticks','frozen egg rolls',
          'frozen dumplings','frozen taquitos','frozen chicken nuggets',
          'frozen chicken tenders','frozen chicken patties',
          'frozen onion rings','frozen fries','tater tots',
          'egg rolls','pierogies',
        ],
      },
      {
        name: 'Frozen International',
        keywords: [
          'frozen dumplings','gyoza','pot stickers','wontons',
          'frozen spring rolls','lumpia','frozen samosa','frozen bao buns',
          'empanadas','frozen tamales',
        ],
      },
      {
        name: 'Frozen Meat & Poultry',
        shared: true, // also found in Meat & Poultry aisle
        keywords: [
          'frozen burgers','frozen veggie burgers','frozen meatballs',
          'frozen sausage','frozen hot dogs','frozen bacon','frozen turkey',
          'frozen chicken nuggets','frozen chicken tenders',
          'frozen chicken patties',
        ],
      },
      {
        name: 'Frozen Seafood',
        shared: true, // also found in Seafood aisle
        keywords: [
          'frozen shrimp','frozen salmon','frozen fish fillets','frozen scallops',
          'frozen lobster tails','frozen crab cakes','frozen breaded shrimp',
          'popcorn shrimp','breaded scallops','tempura shrimp','fish sticks',
          'breaded fish fillets','frozen shrimp rings',
        ],
      },
      {
        name: 'Ice Cream & Frozen Desserts',
        keywords: [
          'ice cream','frozen yogurt','gelato','sorbet','sherbet',
          'frozen custard','dairy free ice cream','oat milk ice cream',
          'ice cream bars','popsicles','frozen yogurt bars','mochi ice cream',
          'paletas','ice cream sandwich','drumstick cone','klondike bar',
          'frozen fruit bar','frozen cheesecake','frozen pie','chipwich',
          'popsicle','frozen acai bowls',
        ],
      },
    ],
  },

  // ── 7. BAKERY ───────────────────────────────────────────────────────────
  {
    name: 'Bakery',
    clusters: [
      {
        name: 'Fresh Bread & Rolls',
        keywords: [
          'fresh bread','sourdough','baguette','ciabatta','brioche',
          'focaccia','artisan bread','rye bread','multigrain bread',
          'whole grain bread','dinner rolls','hamburger buns','hot dog buns',
          'fresh bagels','fresh pita','fresh naan','lavash',
          'fresh tortillas','loaf',
        ],
      },
      {
        name: 'Cakes & Pastries',
        keywords: [
          'cake','birthday cake','sheet cake','pound cake','loaf cake',
          'coffee cake','cheesecake','chocolate cake','cupcakes','muffin',
          'croissant','danishes','cinnamon rolls','scones','tarts',
          'macarons','biscotti','pastry','donut',
        ],
      },
      {
        name: 'Pies & Specialty',
        keywords: [
          'pie','apple pie','peach pie','blueberry pie','cherry pie',
          'boysenberry pie','strawberry rhubarb pie','pumpkin pie',
          'lemon meringue pie','key lime pie','pecan pie','pie crust',
          'brownie','brownie mix',
        ],
      },
      {
        name: 'Gluten-Free Baked Goods',
        keywords: [
          'gluten free bread','gluten free bagel','gluten free muffin',
          'gluten free croissant','gluten free roll','gluten free bun',
          'gluten free cake','gluten free cookie','gluten free brownie',
          'gluten free donut','gluten free pizza crust','gluten free pie crust',
          'gluten free biscotti','gluten free macaron',
        ],
      },
    ],
  },

  // ── 8. BREAD & GRAINS ───────────────────────────────────────────────────
  {
    name: 'Bread & Grains',
    clusters: [
      {
        name: 'Sliced & Packaged Bread',
        keywords: [
          'sliced bread','sandwich bread','wheat bread','white bread','wonder bread',
          'whole wheat bread','sourdough bread packaged','multigrain bread packaged',
          'gluten-free bread','oatmeal bread','potato bread',
        ],
      },
      {
        name: 'Packaged Flatbreads & Wraps',
        keywords: [
          'packaged tortillas','flour tortillas','corn tortillas',
          'packaged pita','packaged naan','english muffins','bagels packaged',
          'breadsticks',
        ],
      },
      {
        name: 'Stuffing, Breadcrumbs & Croutons',
        keywords: [
          'breadcrumbs','panko','stuffing','croutons','bread crumbs',
        ],
      },
    ],
  },

  // ── 9. PASTA & NOODLES ──────────────────────────────────────────────────
  {
    name: 'Pasta & Noodles',
    clusters: [
      {
        name: 'Dried Pasta',
        keywords: [
          'pasta','spaghetti','penne','rigatoni','fusilli','farfalle',
          'linguine','fettuccine','angel hair','orzo','rotini','ziti',
          'lasagna sheets','macaroni','cavatappi','orecchiette',
          'radiatori','capellini','bowties','elbows','pastina',
          'ditalini','shells','campanelle','gemelli','bucatini',
          'pappardelle','tagliatelle','lasagne','gluten free pasta',
          'whole wheat pasta','chickpea pasta','lentil pasta','egg noodles',
        ],
      },
      {
        name: 'Asian Noodles',
        keywords: [
          'ramen','udon','soba','rice noodles','vermicelli',
          'pad thai noodles','glass noodles','lo mein','chow mein noodles',
          'shirataki','somen','udon noodles','cold noodles',
        ],
      },
      {
        name: 'Fresh & Refrigerated Pasta',
        keywords: [
          'fresh pasta','refrigerated pasta','fresh tortellini','ravioli',
          'fresh gnocchi','fresh lasagna',
        ],
      },
    ],
  },

  // ── 10. RICE, GRAINS & BEANS ────────────────────────────────────────────
  {
    name: 'Rice, Grains & Beans',
    clusters: [
      {
        name: 'Rice',
        keywords: [
          'rice','white rice','brown rice','jasmine rice','basmati rice',
          'long grain rice','short grain rice','arborio rice','wild rice',
          'sushi rice','instant rice','rice pilaf','black rice','red rice',
          'carnaroli rice','vialone nano','risotto',
        ],
      },
      {
        name: 'Dried Grains',
        keywords: [
          'quinoa','farro','barley','bulgur','millet','amaranth','spelt',
          'teff','buckwheat','wheat berries','couscous','polenta',
          'cornmeal','oats','steel cut oats','rolled oats',
        ],
      },
      {
        name: 'Dried Beans & Legumes',
        keywords: [
          'dried beans','black beans dried','pinto beans dried',
          'kidney beans dried','chickpeas dried','lentils dried',
          'navy beans dried','cannellini beans dried','split peas',
          'dried lentils','dried chickpeas','dried peas',
        ],
      },
    ],
  },

  // ── 11. CEREAL & BREAKFAST ──────────────────────────────────────────────
  {
    name: 'Cereal & Breakfast',
    clusters: [
      {
        name: 'Cold Cereal',
        keywords: [
          'cereal','granola','muesli','corn flakes','cheerios',
          'frosted flakes','special k','raisin bran','grape nuts',
          'lucky charms','froot loops','cocoa puffs','captain crunch',
          'honey bunches of oats','life cereal','kashi','fiber one',
          'total cereal','wheaties','mini wheats','rice krispies',
          'honey smacks','crispix','corn chex','wheat chex',
        ],
      },
      {
        name: 'Hot Cereal & Oatmeal',
        keywords: [
          'oatmeal','instant oatmeal','oatmeal packets','cream of wheat',
          'grits','cream of rice','oat bran','hot cereal',
        ],
      },
      {
        name: 'Pancake, Waffle & Baking Mixes',
        keywords: [
          'pancake mix','waffle mix','baking mix','bisquick',
          'corn bread mix','muffin mix',
        ],
      },
      {
        name: 'Breakfast Bars & Granola',
        keywords: [
          'granola bar','breakfast bar','cereal bar','protein bar',
          'nature valley','kind bar','clif bar','larabar','luna bar',
        ],
      },
      {
        name: 'Syrup, Jam & Breakfast Spreads',
        keywords: [
          'syrup','maple syrup','pancake syrup','jam','jelly','preserves',
          'peanut butter','almond butter','sunflower butter','nut butter',
          'hazelnut spread','nutella','honey','agave nectar',
        ],
      },
    ],
  },

  // ── 12. CANNED GOODS ────────────────────────────────────────────────────
  {
    name: 'Canned Goods',
    clusters: [
      {
        name: 'Canned Vegetables',
        keywords: [
          'canned tomatoes','diced tomatoes','crushed tomatoes',
          'tomato paste','tomato sauce canned','canned corn','canned peas',
          'canned green beans','canned beets','canned artichoke hearts',
          'canned pumpkin','canned mushrooms','canned asparagus',
          'canned potatoes','canned carrots','canned spinach','black olives','canned olives',
        ],
      },
      {
        name: 'Canned Fruit',
        keywords: [
          'canned fruit','canned peaches','canned pears','canned pineapple',
          'canned mandarin oranges','canned cherries','canned apricots',
          'canned mango','fruit cocktail','maraschino cherries',
          'applesauce',
        ],
      },
      {
        name: 'Canned Beans & Legumes',
        keywords: [
          'canned beans','canned black beans','canned pinto beans',
          'canned kidney beans','canned chickpeas','canned lentils',
          'canned navy beans','canned cannellini','canned white beans',
          'canned refried beans','baked beans',
        ],
      },
      {
        name: 'Canned Soup & Broth',
        keywords: [
          'soup','canned soup','campbell\'s soup','chicken soup','tomato soup','vegetable soup',
          'cream of mushroom soup','minestrone','chili canned','stew canned',
          'broth','chicken broth','beef broth','vegetable broth',
          'bone broth','stock',
        ],
      },
      {
        name: 'Canned Meat & Seafood',
        keywords: [
          'canned chicken','canned beef','spam','canned corned beef',
          'canned tuna','canned salmon','canned sardines','canned anchovies',
          'canned crab','canned clams','canned mackerel','canned oyster',
        ],
      },
    ],
  },

  // ── 13. DRY GOODS & PANTRY ──────────────────────────────────────────────
  {
    name: 'Dry Goods & Pantry',
    clusters: [
      {
        name: 'Baking',
        keywords: [
          'flour','all purpose flour','bread flour','cake flour',
          'whole wheat flour','almond flour','coconut flour','gluten free flour',
          'cornstarch','tapioca starch','baking soda','baking powder','yeast',
          'cream of tartar','powdered sugar','brown sugar','white sugar',
          'granulated sugar','sugar substitute','cocoa powder','chocolate chips',
          'baking chocolate','vanilla extract','almond extract',
          'food coloring','sprinkles','cake decorating',
        ],
      },
      {
        name: 'Cooking Oil & Vinegar',
        keywords: [
          'oil','olive oil','vegetable oil','canola oil','coconut oil',
          'avocado oil','grapeseed oil','sunflower oil','peanut oil',
          'cooking spray','vinegar','balsamic vinegar','red wine vinegar',
          'white wine vinegar','white vinegar','rice vinegar',
          'apple cider vinegar',
        ],
      },
      {
        name: 'Spices & Seasoning',
        keywords: [
          'spices','seasoning','salt','black pepper','sea salt',
          'kosher salt','garlic powder','onion powder','paprika',
          'smoked paprika','cumin','chili powder','cayenne','cinnamon',
          'nutmeg','cloves','allspice','turmeric powder','curry powder',
          'Italian seasoning','oregano dried','thyme dried','bay leaves',
          'red pepper flakes','Old Bay','lemon pepper','seasoned salt',
          'steak seasoning','taco seasoning','ranch seasoning',
          'everything bagel seasoning','sazon goya',
          'smoked salt','himalayan pink salt',
        ],
      },
      {
        name: 'Sweeteners & Sugar',
        keywords: [
          'agave','stevia','splenda','equal','sweet and low',
          'truvia','monk fruit sweetener','coconut sugar','raw sugar',
          'simple syrup',
        ],
      },
      {
        name: 'Canned Coconut & Specialty',
        keywords: [
          'coconut milk canned','canned coconut',
          'evaporated milk canned','condensed milk canned',
        ],
      },
    ],
  },

  // ── 14. CONDIMENTS & SAUCES ─────────────────────────────────────────────
  {
    name: 'Condiments & Sauces',
    clusters: [
      {
        name: 'Ketchup, Mustard & Mayo',
        keywords: [
          'ketchup','mustard','yellow mustard','dijon mustard','spicy mustard',
          'honey mustard','mayonnaise','mayo','miracle whip','hellmann\'s',
        ],
      },
      {
        name: 'Hot Sauce & Salsa',
        keywords: [
          'hot sauce','tabasco','buffalo sauce','salsa',
          'pico de gallo','enchilada sauce','taco sauce','chipotle sauce',
          'chili garlic sauce',
        ],
      },
      {
        name: 'Salad Dressing',
        keywords: [
          'salad dressing','ranch dressing','italian dressing',
          'caesar dressing','balsamic dressing','vinaigrette',
          'blue cheese dressing','thousand island','french dressing',
          'greek dressing','asian dressing','green goddess dressing',
          'avocado dressing','russian dressing','bolthouse farms',
        ],
      },
      {
        name: 'Pasta Sauce & Pizza Sauce',
        keywords: [
          'pasta sauce','marinara','tomato basil sauce','vodka sauce',
          'alfredo sauce','pesto','arrabbiata','pizza sauce',
          'prego','ragu',
        ],
      },
      {
        name: 'Gravy, Stocks & Western Sauces',
        keywords: [
          'gravy','worcestershire sauce','steak sauce','bbq sauce',
          'teriyaki sauce','plum sauce',
          'sweet and sour sauce','cocktail sauce','tartar sauce',
          'stir fry sauce',
        ],
      },
      {
        name: 'Spreads & Dips',
        keywords: [
          'relish','pickle relish','capers','horseradish','cream cheese spread',
          'tzatziki packaged','hummus packaged','bruschetta',
        ],
      },
    ],
  },

  // ── 15. SNACKS ──────────────────────────────────────────────────────────
  {
    name: 'Snacks',
    clusters: [
      {
        name: 'Chips & Crisps',
        keywords: [
          'chips','potato chips','tortilla chips','corn chips','pita chips',
          'veggie chips','pretzels','popcorn','kettle chips','rice chips',
          'sweet potato chips','lentil chips','cheese puffs',
          'cheetos','doritos','fritos','lays','ruffles','pringles',
          'sun chips','cape cod chips',
        ],
      },
      {
        name: 'Crackers',
        keywords: [
          'crackers','saltines','ritz','wheat thins','triscuits',
          'graham crackers','animal crackers','rice crackers',
          'nut thin crackers','gluten free crackers','wasa crispbread',
          'ak mak','matzo','rice cakes',
        ],
      },
      {
        name: 'Snack Nuts & Seeds',
        keywords: [
          'snack nuts','almonds','cashews','peanuts','walnuts','pecans',
          'pistachios','macadamia nuts','mixed nuts','trail mix',
          'sunflower seeds','pumpkin seeds','pine nuts','brazil nuts',
          'hazelnuts','chestnuts','planters','beef jerky','beef stick',
          'jerky','meat stick',
        ],
      },
      {
        name: 'Candy & Chocolate',
        keywords: [
          'candy','chocolate','gummy bears','gummy worms','jelly beans',
          'licorice','sour candy','hard candy','lollipop','skittles',
          'm&ms','reese\'s','snickers','kit kat','twix','milky way',
          'hershey\'s','butterfinger','jolly rancher','starburst',
          'airheads','warheads','swedish fish','nerds','trolli',
          'haribo','dove chocolate','lindt','ghirardelli','ferrero rocher',
        ],
      },
      {
        name: 'Fruit Snacks & Dried Fruit',
        keywords: [
          'fruit snacks','fruit rollups','dried fruit','raisins','dried mango',
          'dried cranberries','dried apricots','dried blueberries',
          'dried cherries','dried plums','dried pineapple','dried papaya',
          'dried strawberries','dried figs','dried dates','dried kiwi',
          'prunes','fig bars','fruit leather',
        ],
      },
      {
        name: 'Cookies & Sweet Snacks',
        keywords: [
          'cookies','oreos','chips ahoy','nutter butter','vienna fingers',
          'fig newtons','nilla wafers','pepperidge farm','stroopwafel',
          'pirouette cookies',
          'pop tarts','toaster strudel packaged','rice krispie treats',
        ],
      },
    ],
  },

  // ── 16. BEVERAGES ───────────────────────────────────────────────────────
  {
    name: 'Beverages',
    clusters: [
      {
        name: 'Soda & Carbonated',
        keywords: [
          'soda','cola','coke','coca cola','pepsi','diet coke','diet pepsi','diet soda','sparkling water','club soda',
          'ginger ale','root beer','dr pepper','sprite',
          'mountain dew','fanta','7up','canada dry','la croix','bubly',
          'perrier','san pellegrino','pellegrino',
        ],
      },
      {
        name: 'Juice',
        keywords: [
          'juice','orange juice','apple juice','grape juice','cranberry juice',
          'pineapple juice','tomato juice','v8','lemonade','fruit punch',
          'grapefruit juice','pomegranate juice','acai juice','cider',
          'coconut water','juicebox',
        ],
      },
      {
        name: 'Sports & Energy Drinks',
        keywords: [
          'sports drink','gatorade','powerade','vitamin water','pedialyte',
          'energy drink','red bull','monster energy','celsius','bang energy',
          'rockstar','5 hour energy',
        ],
      },
      {
        name: 'Water',
        keywords: [
          'water','bottled water','spring water','purified water',
          'distilled water','sparkling water','evian','poland spring',
          'fiji water','smartwater','dasani','aquafina','volvic',
          'san pellegrino water','perrier water',
        ],
      },
      {
        name: 'Iced Tea & Cold Coffee',
        keywords: [
          'iced tea','sweet tea','kombucha','cold brew coffee',
          'bottled coffee','frappuccino','starbucks bottled',
          'ready to drink coffee','ready to drink tea',
        ],
      },
      {
        name: 'Drink Mixes & Powders',
        keywords: [
          'drink mix','kool aid','crystal light','mio','powerade powder',
          'electrolyte powder','pedialyte powder','protein shake mix','meal replacement',
        ],
      },
    ],
  },

  // ── 17. BEER, WINE & SPIRITS ────────────────────────────────────────────
  {
    name: 'Beer, Wine & Spirits',
    clusters: [
      {
        name: 'Beer',
        shared: true, // also found in Beverages aisle at some stores
        keywords: [
          'beer','lager','ale','ipa','pale ale','stout','porter',
          'wheat beer','sour beer','hard cider','hard seltzer',
          'white claw','truly','budweiser','bud light','bud','miller',
          'miller high life','high life','pabst','pbr','coors','coors light',
          'heineken','corona','modelo','dos equis','stella artois',
          'sam adams','sierra nevada','dogfish head','blue moon',
          'guinness','harp','newcastle','yuengling','lagunitas',
          'stone ipa','sculpin','oskar blues','bell\'s','new belgium',
        ],
      },
      {
        name: 'Wine',
        keywords: [
          'wine','red wine','white wine','rosé','sparkling wine',
          'champagne','prosecco','cabernet','merlot','pinot noir',
          'chardonnay','sauvignon blanc','pinot grigio','moscato',
          'riesling','malbec','shiraz','syrah','zinfandel','bordeaux',
          'burgundy','chianti','rioja','port wine','dessert wine','vinho verde',
          'yellow tail','barefoot wine','kim crawford','la marca',
          'meiomi','josh cellars','whispering angel','santa margherita',
          'kendall jackson','beringer','robert mondavi','apothic',
        ],
      },
      {
        name: 'Spirits & Liquor',
        keywords: [
          'vodka','whiskey','bourbon','scotch','rum','tequila','gin',
          'brandy','cognac','mezcal','triple sec','kahlua','baileys',
          'amaretto','schnapps','soju','jameson','jack daniel\'s',
          'absolut','stolichnaya','grey goose','tito\'s','bombay sapphire',
          'tanqueray','hendricks','bacardi','captain morgan','malibu',
          'jose cuervo','patron','don julio','makers mark','woodford reserve',
          'buffalo trace','bulleit','knob creek','johnnie walker',
          'chivas regal','macallan','glenfiddich','hennessy','courvoisier',
        ],
      },
      {
        name: 'Mixers & Bar',
        keywords: [
          'mixer','tonic water','club soda mixer','grenadine',
          'simple syrup bar','cocktail mix','margarita mix',
          'bloody mary mix','pina colada mix','mai tai mix',
          'bitters','maraschino cherries bar',
        ],
      },
    ],
  },

  // ── 18. INTERNATIONAL FOODS ─────────────────────────────────────────────
  {
    name: 'International Foods',
    clusters: [
      {
        name: 'Latin & Hispanic Foods',
        keywords: [
          'goya','goya beans','goya juice','malta goya','goya crackers',
          'sofrito','sazon','adobo seasoning','recaito','mole sauce',
          'pozole','menudo','tamale masa','masa harina','mexican rice',
          'refried beans canned','tomatillos','canned chiles','chipotle peppers',
          'jalapeños canned','tortilla chips mexican','plantain chips',
          'pan dulce','tres leches','horchata','tamarind','piloncillo',
          'mexican chocolate','abuelita chocolate','ibarra',
          'goya coconut milk','goya coconut water',
        ],
      },
      {
        name: 'Asian Foods',
        keywords: [
          'soy sauce','tamari','ponzu','miso','rice wine',
          'mirin','sake','fish sauce','oyster sauce','hoisin sauce',
          'chili oil','sesame oil','black vinegar',
          'sweet soy sauce','kecap manis','sriracha','sambal',
          'gochujang','doenjang','gochugaru','dashi','bonito flakes',
          'nori','kombu','wakame','dried seaweed','panko asian',
          'rice flour','sweet rice flour','tapioca flour','lotus root',
          'water chestnuts','bamboo shoots','baby corn',
          'straw mushrooms','dried shiitake','coconut cream',
          'curry paste','red curry paste','green curry paste',
          'massaman curry','pad thai sauce','kimchi','japchae',
          'korean bbq sauce','shin ramyun','shin black','neoguri','spicy korean ramen',
        ],
      },
      {
        name: 'Indian Foods',
        keywords: [
          'dal','chana masala',
          'tikka masala sauce','curry powder indian','garam masala',
          'turmeric spice','cumin seeds','mustard seeds','fenugreek',
          'cardamom','coriander seeds','amchur','chaat masala',
          'tandoori masala','biryani mix','naan',
          'papadum','samosa','pickle mango','mango chutney','tamarind paste',
          'coconut chutney','idli mix','dosa mix',
        ],
      },
      {
        name: 'Portuguese & Brazilian Foods',
        keywords: [
          'portuguese foods','brazilian foods','bacalhau','portuguese sardines',
          'piri piri sauce','portuguese olive oil',
          'queijo fresco','caldo verde','feijao','farofa','guarana',
          'brigadeiro','acai pack','pão de queijo mix',
        ],
      },
      {
        name: 'Middle Eastern & Mediterranean Foods',
        keywords: [
          'tahini','harissa','za\'atar','sumac','pomegranate molasses',
          'rose water','orange blossom water','halva','baklava',
          'pita chips middle eastern','grape leaves','dolmas',
          'turkish delight','filo dough','phyllo',
        ],
      },
      {
        name: 'European & Other International',
        keywords: [
          'german sauerkraut','polish kielbasa packaged',
          'greek olive oil','french mustard','british biscuits',
          'irish oats','scandinavian crispbread',
        ],
      },
      {
        name: 'Caribbean Foods',
        keywords: [
          'jerk seasoning','jamaican patty','caribbean hot sauce',
          'oxtail seasoning','grace coconut water','grace products',
          'walkerswood','scotch bonnet sauce','sofrito caribbean',
          'sugar cane','callaloo','ackee canned','saltfish',
          'festival mix','bammy','cock soup','grace mackerel',
        ],
      },
    ],
  },

  // ── 19. HEALTH & NATURAL FOODS ──────────────────────────────────────────
  {
    name: 'Health & Natural Foods',
    clusters: [
      {
        name: 'Plant-Based & Vegan',
        keywords: [
          'tofu','tempeh','seitan','plant based meat','beyond burger',
          'impossible burger','veggie burger','vegan cheese',
          'nutritional yeast','vegan protein','plant based milk',
          'oat milk health','cashew cheese',
        ],
      },
      {
        name: 'Organic & Natural Pantry',
        keywords: [
          'organic','natural','non gmo','whole grain','ancient grain',
          'organic pasta','organic rice','organic beans','organic oats',
          'organic flour','organic sugar','organic olive oil',
          'organic apple cider vinegar','organic honey',
        ],
      },
      {
        name: 'Superfoods & Specialty',
        keywords: [
          'chia seeds','flaxseed','hemp seeds','spirulina','chlorella',
          'maca powder','acai powder','moringa','collagen powder',
          'bone broth powder','wheatgrass','matcha powder',
          'cacao nibs','raw cacao',
        ],
      },
      {
        name: 'Gluten-Free',
        keywords: [
          'gluten free','gluten free oats','gluten free cereal',
          'gluten free granola','gluten free pancake mix',
          'gluten free waffle mix','gluten free cake mix',
          'gluten free cookie mix','gluten free brownie mix',
          'gluten free tortilla','gluten free english muffin',
          'gluten free snacks','gluten free pretzels',
        ],
      },
      {
        name: 'Protein & Fitness',
        keywords: [
          'protein powder','whey protein','plant protein',
          'protein shake','meal replacement bar','quest bar',
          'rx bar','kind protein','one bar','muscle milk',
        ],
      },
      {
        name: 'Natural Snacks & Dried Goods',
        keywords: [
          'dried mango natural','dried goji berries','dried mulberries',
          'coconut flakes','unsweetened coconut','cacao nibs snack',
          'dark chocolate natural','raw nuts','sprouted nuts',
        ],
      },
    ],
  },

  // ── 20. BABY & INFANT ───────────────────────────────────────────────────
  {
    name: 'Baby & Infant',
    clusters: [
      {
        name: 'Baby Food',
        keywords: [
          'baby food','pureed baby food','baby cereal','infant cereal',
          'stage 1 baby food','stage 2 baby food','stage 3 baby food',
          'baby puree','squeezable baby food','baby food pouches','happy baby','gerber',
          'beech nut','plum organics','ella\'s kitchen',
        ],
      },
      {
        name: 'Formula & Feeding',
        keywords: [
          'infant formula','baby formula','enfamil','similac','gerber formula',
          'organic formula','toddler formula','nursing pads','breast pump',
          'bottle','sippy cup','baby bottle','pacifier','teether',
        ],
      },
      {
        name: 'Diapers & Wipes',
        keywords: [
          'diapers','newborn diapers','size 1 diapers','size 2 diapers',
          'size 3 diapers','pull ups','training pants','baby wipes',
          'pampers','huggies','luvs','honest diapers','seventh generation diapers',
          'diaper cream','diaper rash cream','a&d ointment','desitin',
        ],
      },
      {
        name: 'Baby Care',
        keywords: [
          'baby shampoo','baby wash','baby lotion','baby powder',
          'baby oil','baby sunscreen','baby monitor','johnson\'s baby',
          'aveeno baby','cetaphil baby',
        ],
      },
    ],
  },

  // ── 21. PERSONAL CARE ───────────────────────────────────────────────────
  {
    name: 'Personal Care',
    clusters: [
      {
        name: 'Oral Care',
        keywords: [
          'toothpaste','toothbrush','mouthwash','dental floss','whitening strips',
          'electric toothbrush','tongue scraper','breath mints','gum',
          'colgate','crest','listerine','oral b','sensodyne',
          'floss picks','dental picks','water flosser',
        ],
      },
      {
        name: 'Skin Care',
        keywords: [
          'moisturizer','lotion','body lotion','face wash','facial cleanser',
          'face cream','sunscreen','spf','toner','serum','eye cream',
          'lip balm','chapstick','hand cream','foot cream','body wash',
          'exfoliator','face mask','cetaphil','neutrogena','olay','aveeno',
          'lubriderm','gold bond','vaseline','aquaphor',
        ],
      },
      {
        name: 'Deodorant & Body',
        keywords: [
          'deodorant','antiperspirant','body spray','cologne','perfume',
          'dove deodorant','secret','degree','old spice','speed stick',
          'native deodorant','lume','axe',
        ],
      },
      {
        name: 'Feminine Care',
        keywords: [
          'tampons','pads','menstrual cups','panty liners','always',
          'tampax','kotex','playtex','seventh generation pads',
          'feminine wash','feminine wipes',
        ],
      },
      {
        name: 'Shaving',
        keywords: [
          'razor','shaving cream','shaving gel','aftershave','gillette',
          'schick','venus','billie','harry\'s razors','disposable razor',
          'electric shaver','waxing strips',
        ],
      },
    ],
  },

  // ── 22. HAIR CARE ───────────────────────────────────────────────────────
  {
    name: 'Hair Care',
    clusters: [
      {
        name: 'Shampoo & Conditioner',
        keywords: [
          'shampoo','conditioner','2 in 1 shampoo','dry shampoo',
          'clarifying shampoo','moisturizing shampoo','color safe shampoo',
          'head and shoulders','pantene','herbal essences','tresemme',
          'dove shampoo','aveeno shampoo','ogx','sulfate free shampoo',
        ],
      },
      {
        name: 'Hair Styling',
        keywords: [
          'hair gel','hair mousse','hair spray','pomade','hair wax',
          'curl cream','leave in conditioner','hair serum','hair oil',
          'edge control','hair paste','heat protectant',
        ],
      },
      {
        name: 'Hair Treatment & Color',
        keywords: [
          'hair mask','deep conditioner','hair treatment','hair color',
          'hair dye','box dye','root touch up','bleach kit','toner hair',
          'hair gloss','keratin treatment',
        ],
      },
      {
        name: 'Hair Tools & Accessories',
        keywords: [
          'hair brush','comb','detangling brush','hair ties','bobby pins',
          'hair clips','headband','hair net','shower cap',
        ],
      },
    ],
  },

  // ── 23. VITAMINS & SUPPLEMENTS ──────────────────────────────────────────
  {
    name: 'Vitamins & Supplements',
    clusters: [
      {
        name: 'Vitamins',
        keywords: [
          'vitamins','vitamin c','vitamin d','vitamin b12','vitamin b complex',
          'vitamin e','vitamin a','vitamin k','multivitamin',
          'prenatal vitamins','gummy vitamins','centrum','one a day',
          'nature made','nature\'s bounty',
        ],
      },
      {
        name: 'Minerals & Electrolytes',
        keywords: [
          'calcium','magnesium','zinc','iron supplement','potassium',
          'selenium','chromium','electrolytes','electrolyte tablets',
        ],
      },
      {
        name: 'Supplements & Herbs',
        keywords: [
          'fish oil','omega 3','probiotics','prebiotics','collagen supplement',
          'biotin','melatonin','turmeric supplement','ashwagandha',
          'echinacea','elderberry supplement','garlic supplement',
          'coq10','glucosamine','chondroitin','saw palmetto',
          'valerian root','ginkgo biloba','ginseng',
        ],
      },
    ],
  },

  // ── 24. MEDICINE & FIRST AID ────────────────────────────────────────────
  {
    name: 'Medicine & First Aid',
    clusters: [
      {
        name: 'Pain Relief',
        keywords: [
          'pain reliever','ibuprofen','acetaminophen','aspirin','naproxen',
          'advil','tylenol','aleve','excedrin','motrin',
        ],
      },
      {
        name: 'Cold, Flu & Allergy',
        keywords: [
          'cold medicine','flu medicine','allergy medicine','antihistamine',
          'decongestant','cough syrup','cough drops','dayquil','nyquil',
          'sudafed','mucinex','zyrtec','claritin','allegra','benadryl',
          'robitussin','theraflu','emergen c','airborne',
        ],
      },
      {
        name: 'Digestive & Antacids',
        keywords: [
          'antacid','tums','pepto bismol','rolaids','prilosec',
          'nexium','zantac','gas x','mylanta','imodium','miralax',
          'colace','metamucil','fiber supplement','probiotic digestive',
          'pepcid',
        ],
      },
      {
        name: 'First Aid',
        keywords: [
          'bandages','band aid','gauze','adhesive tape','antiseptic',
          'neosporin','hydrogen peroxide','rubbing alcohol','isopropyl alcohol',
          'first aid kit','ace bandage','ice pack','heating pad',
          'thermometer','blood pressure monitor',
        ],
      },
      {
        name: 'Eye, Ear & Nose',
        keywords: [
          'eye drops','contact solution','saline nasal spray','neti pot',
          'ear drops','visine','clear eyes','systane','refresh tears',
          'flonase','afrin',
        ],
      },
      {
        name: 'Sleep & Topical',
        keywords: [
          'sleep aid','melatonin sleep','unisom','zzzquil',
          'hydrocortisone cream','anti itch cream','calamine lotion',
          'antifungal cream','athletes foot cream','jock itch cream',
          'wart remover','corn remover','blister treatment',
        ],
      },
    ],
  },

  // ── 25. CLEANING PRODUCTS ───────────────────────────────────────────────
  {
    name: 'Cleaning Products',
    clusters: [
      {
        name: 'Laundry',
        keywords: [
          'laundry detergent','tide','gain','arm and hammer','all detergent',
          'persil','dreft','seventh generation laundry',
          'fabric softener','dryer sheets','bounce','downy',
          'stain remover','oxiclean','shout','bleach laundry',
          'color safe bleach',
        ],
      },
      {
        name: 'Dish Cleaning',
        keywords: [
          'dish soap','dishwasher detergent','dawn','palmolive','ajax',
          'cascade','finish detergent','jet dry','dishwasher pods',
          'scrub brush','dish sponge','steel wool',
        ],
      },
      {
        name: 'Surface & All Purpose',
        keywords: [
          'all purpose cleaner','surface spray','lysol spray','clorox spray',
          'windex','glass cleaner','bathroom cleaner','toilet bowl cleaner',
          'scrubbing bubbles','soft scrub','tilex','kaboom',
          'mr clean','pine sol','fabuloso','pledge','furniture polish',
        ],
      },
      {
        name: 'Mops, Brooms & Supplies',
        keywords: [
          'mop','broom','dustpan','swiffer','swiffer pads','vacuum bags',
          'cleaning gloves','rubber gloves','scrub pad',
        ],
      },
    ],
  },

  // ── 26. PAPER PRODUCTS ──────────────────────────────────────────────────
  {
    name: 'Paper Products',
    clusters: [
      {
        name: 'Toilet & Tissue',
        keywords: [
          'toilet paper','toilet tissue','charmin','cottonelle','scott',
          'angel soft','kleenex','facial tissue','tissues',
        ],
      },
      {
        name: 'Paper Towels & Napkins',
        keywords: [
          'paper towels','bounty','sparkle paper towels','viva',
          'napkins','paper napkins','dinner napkins',
        ],
      },
      {
        name: 'Trash Bags & Food Storage Bags',
        keywords: [
          'trash bags','garbage bags','hefty','glad trash bags',
          'contractor bags','recycling bags','compostable bags',
          'sandwich bags','ziplock bags','storage bags','freezer bags',
          'gallon bags','quart bags',
        ],
      },
      {
        name: 'Plastic Wrap & Foil',
        keywords: [
          'plastic wrap','saran wrap','aluminum foil','reynolds wrap',
          'parchment paper','wax paper','butcher paper',
          'plastic bags','produce bags',
        ],
      },
      {
        name: 'Disposable Plates & Cups',
        keywords: [
          'paper plates','paper cups','plastic cups','solo cups',
          'plastic cutlery','plastic forks','plastic spoons','plastic knives',
          'foam cups','coffee cups disposable',
        ],
      },
    ],
  },

  // ── 27. PET SUPPLIES ────────────────────────────────────────────────────
  {
    name: 'Pet Supplies',
    clusters: [
      {
        name: 'Dog Food & Treats',
        keywords: [
          'dog food','dry dog food','wet dog food','dog treats',
          'puppy food','senior dog food','grain free dog food',
          'purina','blue buffalo dog','iams dog','hills science diet dog',
          'pedigree','beneful','milk bone','beggin strips','greenies dog',
          'dog chews','bully sticks','rawhide',
        ],
      },
      {
        name: 'Cat Food & Treats',
        keywords: [
          'cat food','dry cat food','wet cat food','cat treats',
          'kitten food','senior cat food','grain free cat food',
          'purina cat','blue buffalo cat','iams cat','hills science diet cat',
          'friskies','fancy feast','meow mix','whiskas',
          'temptations cat treats','greenies cat',
        ],
      },
      {
        name: 'Pet Care & Supplies',
        keywords: [
          'kitty litter','cat litter','clumping litter','tidy cats',
          'arm and hammer litter','fresh step','world\'s best cat litter',
          'dog collar','dog leash','cat collar','pet bed','dog bed',
          'pet shampoo','flea treatment','heartgard','frontline',
          'pet vitamins','pet dental','poop bags','pet wipes',
          'aquarium','fish food','hamster food','bird food',
        ],
      },
    ],
  },

  // ── 28. HOUSEHOLD & HARDWARE ────────────────────────────────────────────
  {
    name: 'Household & Hardware',
    clusters: [
      {
        name: 'Light Bulbs & Batteries',
        keywords: [
          'light bulbs','led bulbs','fluorescent bulbs','batteries',
          'aa batteries','aaa batteries','c batteries','d batteries',
          '9v batteries','lithium batteries','rechargeable batteries',
        ],
      },
      {
        name: 'Seasonal & Pest Control',
        keywords: [
          'insect repellent','bug spray','raid','ant traps','mouse traps',
          'roach bait','mosquito repellent','citronella','fly paper',
          'wasp spray',
        ],
      },
      {
        name: 'Tools & Adhesives',
        keywords: [
          'super glue','gorilla glue','tape','duct tape','masking tape',
          'scotch tape','command strips','picture hooks','nails','screws',
          'hammer','screwdriver','zip ties',
        ],
      },
      {
        name: 'Air Fresheners & Candles',
        keywords: [
          'air freshener','febreze','glade','candle','wax melts',
          'reed diffuser','plug in air freshener','car air freshener',
          'incense','odor eliminator',
        ],
      },
      {
        name: 'Storage & Organization',
        keywords: [
          'storage containers','bins','baskets','hangers','hooks',
          'shelf liner','drawer organizer','vacuum storage bags',
          'clothing storage',
        ],
      },
    ],
  },

  // ── 29. OFFICE & SCHOOL SUPPLIES ────────────────────────────────────────
  {
    name: 'Office & School Supplies',
    clusters: [
      {
        name: 'Writing & Paper',
        keywords: [
          'pens','pencils','markers','highlighters','crayons','colored pencils',
          'notebook','composition book','spiral notebook','loose leaf paper',
          'construction paper','printer paper','index cards','sticky notes',
          'post it',
        ],
      },
      {
        name: 'Office Supplies',
        keywords: [
          'stapler','staples','paper clips','binder clips','rubber bands',
          'scissors','tape office','glue stick','white out','folders',
          'binders','envelopes','stamps','ink cartridge','toner cartridge',
        ],
      },
      {
        name: 'Art & Craft',
        keywords: [
          'paint','watercolor','acrylic paint','craft glue','glitter',
          'foam sheets','pipe cleaners','popsicle sticks','yarn',
          'ribbon','stickers','washi tape',
        ],
      },
    ],
  },

  // ── 30. KITCHEN SUPPLIES ────────────────────────────────────────────────
  {
    name: 'Kitchen Supplies',
    clusters: [
      {
        name: 'Cookware & Bakeware',
        keywords: [
          'pan','frying pan','skillet','saucepan','pot','stock pot',
          'dutch oven','baking sheet','cake pan','muffin tin','loaf pan',
          'roasting pan','cast iron','non stick pan','wok',
        ],
      },
      {
        name: 'Kitchen Tools & Gadgets',
        keywords: [
          'kitchen gadgets','spatula','ladle','whisk','tongs','peeler',
          'grater','can opener','bottle opener','corkscrew','measuring cups',
          'measuring spoons','mixing bowl','colander','strainer',
          'cutting board','pizza cutter','cheese grater','zester',
          'kitchen scissors','potato masher','pastry brush',
        ],
      },
      {
        name: 'Food Storage',
        keywords: [
          'food storage','tupperware','food containers','glass containers',
          'meal prep containers','mason jars','canning jars','lids',
          'plastic containers','reusable bags',
        ],
      },
      {
        name: 'Coffee & Tea Equipment',
        keywords: [
          'coffee maker','french press','pour over','coffee grinder',
          'tea kettle','infuser','coffee filter',
          'cold brew maker',
        ],
      },
      {
        name: 'Dishes & Utensils',
        keywords: [
          'plates','bowls','mugs','glasses','wine glasses','silverware',
          'forks','knives','spoons','chopsticks','salad bowl',
          'serving bowl','serving platter',
        ],
      },
    ],
  },

  // ── 31. FLORAL & GARDEN ─────────────────────────────────────────────────
  {
    name: 'Floral & Garden',
    clusters: [
      {
        name: 'Fresh Flowers & Plants',
        keywords: [
          'flowers','bouquet','roses','tulips','sunflowers','lilies',
          'orchids','daisies','carnations','mixed flowers','potted plant',
          'succulent','herb plant','flower arrangement',
        ],
      },
      {
        name: 'Garden Supplies',
        keywords: [
          'potting soil','mulch','fertilizer','plant food','seeds',
          'seed packets','vegetable seeds','flower seeds','herb seeds',
          'gardening gloves','trowel','watering can','plant pot',
          'garden hose','weed killer',
        ],
      },
    ],
  },

  // ── 32. COFFEE & TEA ────────────────────────────────────────────────────
  {
    name: 'Coffee & Tea',
    clusters: [
      {
        name: 'Ground & Whole Bean Coffee',
        keywords: [
          'coffee','ground coffee','whole bean coffee','dark roast',
          'medium roast','light roast','espresso beans','decaf coffee',
          'folgers','maxwell house','dunkin coffee','starbucks coffee',
          'peet\'s coffee','lavazza','illy','eight o clock coffee',
          'death wish coffee',
        ],
      },
      {
        name: 'K-Cups & Pods',
        keywords: [
          'k cups','coffee pods','nespresso pods','dolce gusto',
          'single serve coffee','coffee capsules',
        ],
      },
      {
        name: 'Instant Coffee',
        keywords: [
          'instant coffee','nescafe',"taster\'s choice","medaglia d\'oro",
          'cafe bustelo instant',
        ],
      },
      {
        name: 'Tea',
        keywords: [
          'tea','green tea','black tea','herbal tea','chamomile','peppermint tea',
          'chai tea','oolong','white tea','rooibos','lipton','celestial seasonings',
          'bigelow','tazo','yogi tea','traditional medicinals','republic of tea',
          'tea bags','loose leaf tea','matcha',
        ],
      },
      {
        name: 'Coffee Creamers & Add-ins',
        keywords: [
          'coffee creamer','non dairy creamer','liquid creamer',
          'powdered creamer','international delight','coffee mate',
          'condensed milk coffee','evaporated milk coffee',
          'collagen coffee','mct oil','butter coffee',
        ],
      },
      {
        name: 'Hot Chocolate & Specialty',
        keywords: [
          'hot chocolate','hot cocoa','nesquik','ovaltine','abuelita hot chocolate',
          'drinking chocolate','cacao drink','turmeric latte mix',
          'golden milk mix','matcha mix','chai mix',
        ],
      },
    ],
  },

];

// ── Computed flat keywords array (for backward compatibility) ────────────
// The existing kwMatch and other functions use template.keywords as a flat
// array. This getter computes it from clusters so we never maintain two copies.
GROCERY_TEMPLATES.forEach(t => {
  Object.defineProperty(t, 'keywords', {
    get() { return this.clusters.flatMap(c => c.keywords); },
    enumerable: true,
    configurable: true,
  });
});
