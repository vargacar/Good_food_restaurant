
const { Item } = require('../models');

const itemsData = [
  {
    name: 'Italian Omelette',
    price: 14.25,
    category: 'Breakfast',
    imageurl: '/img/italian_ome.jpg'
  },
  {
    name: 'Pastrami & Eggs',
    price: 15.35,
    category: 'Breakfast',
    imageurl: '/img/pastrami_eggs.jpg'
  },
  {
    name: 'Silver Dollar Pancake',
    price: 9.85,
    category: 'Breakfast',
    imageurl: '/img/pancakes.jpg'
  },
  {
    name: 'French Toast',
    price: 8.75,
    category: 'Breakfast',
    imageurl: '/img/french_toast.jpg'
  },
  {
    name: 'Bananas Foster Waffle',
    price: 17.55,
    category: 'Breakfast',
    imageurl: '/img/waffle.jpg'
  },
  {
    name: 'Potato & Egg Sandwich',
    price: 4.95,
    category: 'Breakfast',
    imageurl: '/img/egg_sandich.jpg'
  },
  {
    name: 'Turkey Club',
    price: 16.45,
    category: 'Lunch',
    imageurl: '/img/Turkey-Sandwich.jpg'
  },
  {
    name: 'Tuna Melt',
    price: 15.35,
    category: 'Lunch',
    imageurl: '/img/tuna-melt.jpg'
  },
  {
    name: 'Chicken Fingers Delight',
    price: 15.95,
    category: 'Lunch',
    imageurl: '/img/chix_fingers.jpg'
  },
  {
    name: 'Cuban Panini',
    price: 16.45,
    category: 'Lunch',
    imageurl: '/img/cuban_panini.jpg'
  },
  {
    name: 'B.L.T Sandwich',
    price: 8.75,
    category: 'Lunch',
    imageurl: '/img/BLT.webp'
  },
  {
    name: 'Smoke House Burger',
    price: 17.55,
    category: 'Lunch',
    imageurl: '/img/burger.jpg'
  },
  {
    name: 'Chicken Francaise',
    price: 24.15,
    category: 'Dinner',
    imageurl: '/img/chicken-francese.jpg'
  },
  {
    name: 'Shrimp Scampi',
    price: 32.95,
    category: 'Dinner',
    imageurl: '/img/shrimp_scampi.jpg'
  },
  {
    name: 'Veal Parmigiana',
    price: 20.95,
    category: 'Dinner',
    imageurl: '/img/Veal_Parmigiana.webp'
  },
  {
    name: 'Baked Meatloaf',
    price: 19.75,
    category: 'Dinner',
    imageurl: '/img/Baked_Meatloaf.jpg'
  },
  {
    name: 'Roast Sirloin of Beef',
    price: 20.95,
    category: 'Dinner',
    imageurl: '/img/Roast_Sirloin.jpg'
  },
  {
    name: 'Pan Fried Calfs Liver',
    price: 21.95,
    category: 'Dinner',
    imageurl: '/img/Pan_Fried_Liver.jpg'
  },
  {
    name: 'Cheescake',
    price: 5.70,
    category: 'Desserts',
    imageurl: '/img/cheesecake.jpg'
  },
  {
    name: 'Chocolate Cheescake',
    price: 6.35,
    category: 'Desserts',
    imageurl: '/img/Chocolate-Cheesecake.jpg'
  },
  {
    name: 'Apple Pie',
    price: 4.95,
    category: 'Desserts',
    imageurl: '/img/Apple_Pie.jpg'
  },
  {
    name: 'Linzer Tart',
    price: 4.00,
    category: 'Desserts',
    imageurl: '/img/Linzer_Tart.jpg'
  },
  {
    name: 'Cheese Danish',
    price: 3.60,
    category: 'Desserts',
    imageurl: '/img/danish.jpg'
  },
  {
    name: 'Rice Pudding',
    price: 5.20,
    category: 'Desserts',
    imageurl: '/img/Rice-Pudding.webp'
  },
  {
    name: 'Hot Tea',
    price: 2.90,
    category: 'Drinks',
    imageurl: '/img/hot-tea.webp'
  },
  {
    name: 'Orange Juice',
    price: 5.20,
    category: 'Drinks',
    imageurl: '/img/orange-juice.jpg'
  },
  {
    name: 'Milk Shakes',
    price: 7.15,
    category: 'Drinks',
    imageurl: '/img/milkshakes.jpg'
  },
  {
    name: 'Lemonade',
    price: 3.40,
    category: 'Drinks',
    imageurl: '/img/lemonade.jpg'
  },
  {
    name: 'Whole Milk',
    price: 4.30,
    category: 'Drinks',

    imageurl: '/img/milk.jpg'

  },
  {
    name: 'Herbal Teas',
    price: 2.99,
    category: 'Drinks',
    imageurl: '/img/Herbal_Teas.jpg'
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
    imageurl: '/img/Turkey_Sausage.jpg'
  },
  {
    name: 'Fresh Fruit Salad',
    price: 5.20,
    category: 'Sides',
    imageurl: '/img/fruit_Salad.webp'
  },
  {
    name: 'Home Fries',
    price: 4.55,
    category: 'Sides',
    imageurl: '/img/homefries.jpg'
  },
  {
    name: 'Toast',
    price: 2.15,
    category: 'Sides',
    imageurl: '/img/Toast.jpg'
  },
  {
    name: 'Croissant',
    price: 3.25,
    category: 'Sides',
    imageurl:'/img/Croissants.webp'
  },
];

const seedItems = () => Item.bulkCreate(itemsData);
module.exports = seedItems;
