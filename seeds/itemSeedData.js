
const { Item } = require('../models');

const itemsData = [
  {
    name: 'Italian Omelette',
    price: 14.25,
    category: 'Breakfast',
    imageurl: 'https://www.istockphoto.com/photo/vegetable-and-chicken-eggs-frittata-of-shredded-zucchini-and-carrot-gm1242845108-362810696?utm_campaign=srp_photos_noresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2FItalianomeleette%2F&utm_medium=affiliate&utm_source=pexels&utm_term=Italianomeleette'
    
  },
  {
    name: 'Pastrami & Eggs',
    price: 15.35,
    category: 'Breakfast',
    imageurl: 'https://www.istockphoto.com/photo/potato-hash-with-fried-eggs-and-meat-pastrami-for-breakfast-branch-gm1389088261-446505770?phrase=Pastrami+%26+Eggs'
   
  },
  {
    name: 'Silver Dollar Pancake',
    price: 9.85,
    category: 'Breakfast',
    imageurl: 'https://www.istockphoto.com/photo/stack-of-freshly-made-pancakes-on-a-gingham-tablecloth-gm1165376899-320651763?phrase=Silver+Dollar+Pancake'
    
  },
  {
    name: 'French Toast',
    price: 8.75,
    category: 'Breakfast',
    imageurl: 'https://www.istockphoto.com/photo/french-toast-and-syrup-with-a-side-of-bacon-and-fruit-gm140374910-2827279?phrase=French+Toast'
    
  },
  {
    name: 'Bananas Foster Waffle',
    price: 17.55,
    category: 'Breakfast',
    imageurl: 'https://www.istockphoto.com/photo/waffles-with-berries-for-breakfast-gm914435152-251681689?phrase=Bananas+Foster+Waffle%27'
    
  },
  {
    name: 'Potato & Egg Sandwich',
    price: 4.95,
    category: 'Breakfast',
    imageurl: 'https://www.pexels.com/photo/delicious-sandwich-with-fried-potatoes-and-onions-and-eggs-served-on-plate-6940999/'
    
  },
  {
    name: 'Turkey Club',
    price: 16.45,
    category: 'Lunch',
    imageurl: 'https://www.istockphoto.com/photo/foot-long-turkey-club-submarine-sandwich-gm171586893-22017221?phrase=Turkey+Club%27'

  },
  {
    name: 'Tuna Melt',
    price: 15.35,
    category: 'Lunch',
    imageurl: 'https://www.istockphoto.com/photo/homemade-toasted-tuna-melt-sandwich-gm1250718247-364876675?phrase=Tuna+Melt'
  },
  {
    name: 'Chicken Fingers Delight',
    price: 15.95,
    category: 'Lunch',
    imageurl: 'https://www.istockphoto.com/photo/tori-karaage-gm451887805-29718782?phrase=Chicken+Fingers+Delight'
  },
  {
    name: 'Cuban Panini',
    price: 16.45,
    category: 'Lunch',
    imageurl: 'https://www.pexels.com/photo/tasty-panini-on-brown-wooden-plate-5555754/'
  },
  {
    name: 'B.L.T Sandwich',
    price: 8.75,
    category: 'Lunch',
    imageurl: 'https://www.istockphoto.com/photo/blt-sandwich-gm154917899-15293302?phrase=B.L.T+Sandwich'
  },
  {
    name: 'Smoke House Burger',
    price: 17.55,
    category: 'Lunch',
    imageurl: 'https://www.pexels.com/photo/steaks-and-skewered-sausages-on-grill-1857728/'
  },
  {
    name: 'Chicken Francaise',
    price: 24.15,
    category: 'Dinner',
    imageurl: 'https://www.istockphoto.com/photo/tasty-classic-chicken-francaise-with-spaghetti-in-lemon-wine-sauce-close-up-on-a-gm1180244707-330574356?phrase=Chicken+Francaise'
  },
  {
    name: 'Shrimp Scampi',
    price: 32.95,
    category: 'Dinner',
    imageurl: 'https://www.istockphoto.com/photo/homemade-lemon-shrimp-scampi-gm962960124-263019020?phrase=Shrimp+Scampi'
  },
  {
    name: 'Veal Parmigiana',
    price: 20.95,
    category: 'Dinner',
    imageurl: 'https://www.istockphoto.com/photo/chicken-parmesan-gm182187119-10642985?phrase=Veal+Parmigiana'
  },
  {
    name: 'Baked Meatloaf',
    price: 19.75,
    category: 'Dinner',
    imageurl: 'https://www.istockphoto.com/photo/homemade-ground-meatloaf-with-vegetables-gm613334288-105878011?phrase=Baked+Meatloaf'
  },
  {
    name: 'Roast Sirloin of Beef',
    price: 20.95,
    category: 'Dinner',
    imageurl: 'https://www.istockphoto.com/photo/medium-rare-tri-tip-roast-gm1402875953-455628160?phrase=Roast+Sirloin+of+Beef'
  },
  {
    name: 'Pan Fried Calfs Liver',
    price: 21.95,
    category: 'Dinner',
    imageurl: 'https://www.istockphoto.com/photo/calfs-liver-with-letucce-garnish-gm669702824-122418677?phrase=Pan+Fried+Calfs+Liver'
  },
  {
    name: 'Cheescake',
    price: 5.70,
    category: 'Desserts',
    imageurl: 'https://www.istockphoto.com/photo/rhubarb-and-strawberry-cheescake-gm1325269610-410351373?utm_campaign=srp_photos_limitedresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2FCheescake%2F&utm_medium=affiliate&utm_source=pexels&utm_term=Cheescake'
  },
  {
    name: 'Chocolate Cheescake',
    price: 6.35,
    category: 'Desserts',
    imageurl: 'https://www.pexels.com/photo/decorated-chocolate-cake-16113659/'
  },
  {
    name: 'Apple Pie',
    price: 4.95,
    category: 'Desserts',
    imageurl: 'https://www.istockphoto.com/photo/homemade-apple-pie-gm986635116-267619668?phrase=Apple+Pie'
  },
  {
    name: 'Linzer Tart',
    price: 4.00,
    category: 'Desserts',
    imageurl: 'https://www.pexels.com/photo/baked-food-close-up-photography-2693447/'
  },
  {
    name: 'Cheese Danish',
    price: 3.60,
    category: 'Desserts',
    imageurl: 'https://www.istockphoto.com/photo/cheese-danish-gm177531106-21529625?phrase=Cheese+Danish'
  },
  {
    name: 'Rice Pudding',
    price: 5.20,
    category: 'Desserts',
    imageurl: 'https://www.pexels.com/photo/cooked-rice-on-black-ceramic-plate-723198/'
  },
  {
    name: 'Hot Tea',
    price: 2.90,
    category: 'Drinks',
    imageurl: 'https://www.istockphoto.com/photo/refreshing-hot-cup-of-coffee-at-a-cafe-gm1358132613-431851078?phrase=Hot+Tea'
  },
  {
    name: 'Orange Juice',
    price: 5.20,
    category: 'Drinks',
    imageurl: 'https://www.istockphoto.com/photo/glass-of-orange-juice-and-fresh-oranges-gm152971676-16653859?phrase=Orange+Juice'
  },
  {
    name: 'Milk Shakes',
    price: 7.15,
    category: 'Drinks',
    imageurl: 'https://www.pexels.com/photo/bottle-of-milkshake-and-glass-with-dessert-5947038/'
  },
  {
    name: 'Lemonade',
    price: 3.40,
    category: 'Drinks',
    imageurl: 'https://www.istockphoto.com/photo/lemonade-in-a-jar-gm1164372498-320039953?phrase=Lemonade'
  },
  {
    name: 'Whole Milk',
    price: 4.30,
    category: 'Drinks',
    imageurl: 'https://www.pexels.com/photo/bottle-of-milk-near-spilled-almonds-on-white-background-4958139/'
  },
  {
    name: 'Herbal Teas',
    price: 2.99,
    category: 'Drinks',
    imageurl: 'https://www.istockphoto.com/photo/tea-with-wild-thyme-gm589444660-101242899?phrase=Herbal+Teas'
  },
  {
    name: 'Bacon',
    price: 6.50,
    category: 'Sides',
    imageurl: 'https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Turkey Sausage',
    price: 6.50,
    category: 'Sides',
    imageurl: 'https://www.istockphoto.com/photo/hot-dog-with-turkey-sausages-fresh-salad-and-vegetables-on-a-light-background-top-gm1295914720-389489080?phrase=Turkey+Sausage'
  },
  {
    name: 'Fresh Fruit Salad',
    price: 5.20,
    category: 'Sides',
    imageurl: 'https://www.istockphoto.com/photo/fruit-salad-gm182188149-10717448?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FFresh-Fruit-Salad%27&utm_term=Fresh+Fruit+Salad%27%3A%3A%3A'
  },
  {
    name: 'Home Fries',
    price: 4.55,
    category: 'Sides',
    imageurl: 'https://www.istockphoto.com/photo/potato-wedges-baked-with-rosemary-fast-food-gm1182303795-331943475?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FHome-Fries&utm_term=Home+Fries%3A%3A%3A'
  },
  {
    name: 'Toast',
    price: 2.15,
    category: 'Sides',
    imageurl: 'https://unsplash.com/photos/5C2JmojQ6hQ'
  },
  {
    name: 'Croissant',
    price: 3.25,
    category: 'Sides',
    imageurl: 'https://www.istockphoto.com/photo/sliced-croissant-with-chocolate-isolated-on-white-background-gm834164578-135617051?phrase=Croissant'
  },
];

const seedItems = () => Item.bulkCreate(itemsData);
seedItems()
module.exports = seedItems;
