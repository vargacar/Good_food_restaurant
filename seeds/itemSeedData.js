
const { Item } = require('../models');

const itemsData = [
  {
    name: 'Italian Omelette',
    price: 14.25,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/250'
    
  },
  {
    name: 'Pastrami & Eggs',
    price: 15.35,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/250'
   
  },
  {
    name: 'Silver Dollar Pancake',
    price: 9.85,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/250'
    
  },
  {
    name: 'French Toast',
    price: 8.75,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/250'
    
  },
  {
    name: 'Bananas Foster Waffle',
    price: 17.55,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/250'
    
  },
  {
    name: 'Potato & Egg Sandwich',
    price: 4.95,
    category: 'Breakfast',
    imageurl: 'https://placehold.co/250'
    
  },
  {
    name: 'Turkey Club',
    price: 16.45,
    category: 'Lunch',
    imageurl: 'https://placehold.co/250'

  },
  {
    name: 'Tuna Melt',
    price: 15.35,
    category: 'Lunch',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Chicken Fingers Delight',
    price: 15.95,
    category: 'Lunch',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Cuban Panini',
    price: 16.45,
    category: 'Lunch',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'B.L.T Sandwich',
    price: 8.75,
    category: 'Lunch',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Smoke House Burger',
    price: 17.55,
    category: 'Lunch',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Chicken Francaise',
    price: 24.15,
    category: 'Dinner',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Shrimp Scampi',
    price: 32.95,
    category: 'Dinner',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Veal Parmigiana',
    price: 20.95,
    category: 'Dinner',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Baked Meatloaf',
    price: 19.75,
    category: 'Dinner',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Roast Sirloin of Beef',
    price: 20.95,
    category: 'Dinner',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Pan Fried Calfs Liver',
    price: 21.95,
    category: 'Dinner',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Cheescake',
    price: 5.70,
    category: 'Desserts',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Chocolate Cheescake',
    price: 6.35,
    category: 'Desserts',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Apple Pie',
    price: 4.95,
    category: 'Desserts',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Linzer Tart',
    price: 4.00,
    category: 'Desserts',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Cheese Danish',
    price: 3.60,
    category: 'Desserts',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Rice Pudding',
    price: 5.20,
    category: 'Desserts',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Hot Tea',
    price: 2.90,
    category: 'Drinks',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Orange Juice',
    price: 5.20,
    category: 'Drinks',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Milk Shakes',
    price: 7.15,
    category: 'Drinks',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Lemonade',
    price: 3.40,
    category: 'Drinks',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Whole Milk',
    price: 4.30,
    category: 'Drinks',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Herbal Teas',
    price: 2.99,
    category: 'Drinks',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Bacon',
    price: 6.50,
    category: 'Sides',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Turkey Sausage',
    price: 6.50,
    category: 'Sides',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Fresh Fruit Salad',
    price: 5.20,
    category: 'Sides',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Home Fries',
    price: 4.55,
    category: 'Sides',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Toast',
    price: 2.15,
    category: 'Sides',
    imageurl: 'https://placehold.co/250'
  },
  {
    name: 'Croissant',
    price: 3.25,
    category: 'Sides',
    imageurl: 'https://placehold.co/250'
  },
];

const seedItems = () => Item.bulkCreate(itemsData);
module.exports = seedItems;
