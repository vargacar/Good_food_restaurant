
const { Item } = require('../models');

const itemsData = [
  {
    name: 'Italian Omelette',
    price: 14.25,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/200'
    
  },
  {
    name: 'Pastrami & Eggs',
    price: 15.35,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/200'
   
  },
  {
    name: 'Silver Dollar Pancake',
    price: 9.85,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/200'
    
  },
  {
    name: 'French Toast',
    price: 8.75,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/200'
    
  },
  {
    name: 'Bananas Foster Waffle',
    price: 17.55,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/200'
    
  },
  {
    name: 'Potato & Egg Sandwich',
    price: 4.95,
    category: 'Breakfast',
    imageurl: ''
    
  },
  {
    name: 'Turkey Club',
    price: 16.45,
    category: 'Lunch',
    imageurl: ''

  },
  {
    name: 'Tuna Melt',
    price: 15.35,
    category: 'Lunch',
    imageurl: ''
  },
  {
    name: 'Chicken Fingers Delight',
    price: 15.95,
    category: 'Lunch',
    imageurl: ''
  },
  {
    name: 'Cuban Panini',
    price: 16.45,
    category: 'Lunch',
    imageurl: ''
  },
  {
    name: 'B.L.T Sandwich',
    price: 8.75,
    category: 'Lunch',
    imageurl: ''
  },
  {
    name: 'Smoke House Burger',
    price: 17.55,
    category: 'Lunch',
    imageurl: ''
  },
  {
    name: 'Chicken Francaise',
    price: 24.15,
    category: 'Dinner',
    imageurl: ''
  },
  {
    name: 'Shrimp Scampi',
    price: 32.95,
    category: 'Dinner',
    imageurl: ''
  },
  {
    name: 'Veal Parmigiana',
    price: 20.95,
    category: 'Dinner',
    imageurl: ''
  },
  {
    name: 'Baked Meatloaf',
    price: 19.75,
    category: 'Dinner',
    imageurl: ''
  },
  {
    name: 'Roast Sirloin of Beef',
    price: 20.95,
    category: 'Dinner',
    imageurl: ''
  },
  {
    name: 'Pan Fried Calfs Liver',
    price: 21.95,
    category: 'Dinner',
    imageurl: ''
  },
  {
    name: 'Cheescake',
    price: 5.70,
    category: 'Desserts',
    imageurl: ''
  },
  {
    name: 'Chocolate Cheescake',
    price: 6.35,
    category: 'Desserts',
    imageurl: ''
  },
  {
    name: 'Apple Pie',
    price: 4.95,
    category: 'Desserts',
    imageurl: ''
  },
  {
    name: 'Linzer Tart',
    price: 4.00,
    category: 'Desserts',
    imageurl: ''
  },
  {
    name: 'Cheese Danish',
    price: 3.60,
    category: 'Desserts',
    imageurl: ''
  },
  {
    name: 'Rice Pudding',
    price: 5.20,
    category: 'Desserts',
    imageurl: ''
  },
  {
    name: 'Hot Tea',
    price: 2.90,
    category: 'Drinks',
    imageurl: ''
  },
  {
    name: 'Orange Juice',
    price: 5.20,
    category: 'Drinks',
    imageurl: ''
  },
  {
    name: 'Milk Shakes',
    price: 7.15,
    category: 'Drinks',
    imageurl: ''
  },
  {
    name: 'Lemonade',
    price: 3.40,
    category: 'Drinks',
    imageurl: ''
  },
  {
    name: 'Whole Milk',
    price: 4.30,
    category: 'Drinks',
    imageurl: ''
  },
  {
    name: 'Herbal Teas',
    price: 2.99,
    category: 'Drinks',
    imageurl: ''
  },
  {
    name: 'Bacon',
    price: 6.50,
    category: 'Sides',
    imageurl: ''
  },
  {
    name: 'Turkey Sausage',
    price: 6.50,
    category: 'Sides',
    imageurl: ''
  },
  {
    name: 'Fresh Fruit Salad',
    price: 5.20,
    category: 'Sides',
    imageurl: ''
  },
  {
    name: 'Home Fries',
    price: 4.55,
    category: 'Sides',
    imageurl: ''
  },
  {
    name: 'Toast',
    price: 2.15,
    category: 'Sides',
    imageurl: ''
  },
  {
    name: 'Croissant',
    price: 3.25,
    category: 'Sides',
    imageurl: ''
  },
];

const seedItems = () => Item.bulkCreate(itemsData);
seedItems()
module.exports = seedItems;
