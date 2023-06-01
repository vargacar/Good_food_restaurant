
const { Product } = require('../models');

const productData = [
  {
    product_name: 'Italian Omelette',
    price: 14.25,
    category: Breakfast,
  },
  {
    product_name: 'Pastrami & Eggs',
    price: 15.35,
    category: Breakfast,
  },
  {
    product_name: 'Silver Dollar Pancake',
    price: 9.85,
    category: Breakfast,
  },
  {
    product_name: 'French Toast',
    price: 8.75,
    category: Breakfast,
  },
  {
    product_name: 'Bananas Foster Waffle',
    price: 17.55,
    category: Breakfast,
  },
  {
    product_name: 'Potato & Egg Sandwich',
    price: 4.95,
    category: Breakfast,
  },
  {
    product_name: 'Turkey Club',
    price: 16.45,
    category: Lunch,
  },
  {
    product_name: 'Tuna Melt',
    price: 15.35,
    category: Lunch,
  },
  {
    product_name: 'Chicken Fingers Delight',
    price: 15.95,
    category: Lunch,
  },
  {
    product_name: 'Cuban Panini',
    price: 16.45,
    category: Lunch,
  },
  {
    product_name: 'B.L.T Sandwich',
    price: 8.75,
    category: Lunch,
  },
  {
    product_name: 'Smoke House Burger',
    price: 17.55,
    category: Lunch,
  },
  {
    product_name: 'Chicken Francaise',
    price: 24.15,
    category: Dinner,
  },
  {
    product_name: 'Shrimp Scampi',
    price: 32.95,
    category: Dinner,
  },
  {
    product_name: 'Veal Parmigiana',
    price: 20.95,
    category: Dinner,
  },
  {
    product_name: 'Baked Meatloaf',
    price: 19.75,
    category: Dinner,
  },
  {
    product_name: 'Roast Sirloin of Beef',
    price: 20.95,
    category: Dinner,
  },
  {
    product_name: 'Pan Fried Calfs Liver',
    price: 21.95,
    category: Dinner,
  },
  {
    product_name: 'Cheescake',
    price: 5.70,
    category: Desserts,
  },
  {
    product_name: 'Chocolate Cheescake',
    price: 6.35,
    category: Desserts,
  },
  {
    product_name: 'Apple Pie',
    price: 4.95,
    category: Desserts,
  },
  {
    product_name: 'Linzer Tart',
    price: 4.00,
    category: Desserts,
  },
  {
    product_name: 'Cheese Danish',
    price: 3.60,
    category: Desserts,
  },
  {
    product_name: 'Rice Pudding',
    price: 5.20,
    category: Desserts,
  },
  {
    product_name: 'Hot Tea',
    price: 2.90,
    category: Drinks,
  },
  {
    product_name: 'Orange Juice',
    price: 5.20,
    category: Drinks,
  },
  {
    product_name: 'Milk Shakes',
    price: 7.15,
    category: Drinks,
  },
  {
    product_name: 'Lemonade',
    price: 3.40,
    category: Drinks,
  },
  {
    product_name: 'Whole Milk',
    price: 4.30,
    category: Drinks,
  },
  {
    product_name: 'Herbal Teas',
    price: 2.99,
    category: Drinks,
  },
  {
    product_name: 'Bacon',
    price: 6.50,
    category: Sides,
  },
  {
    product_name: 'Turkey Sausage',
    price: 6.50,
    category: Sides,
  },
  {
    product_name: 'Fresh Fruit Salad',
    price: 5.20,
    category: Sides,
  },
  {
    product_name: 'Home Fries',
    price: 4.55,
    category: Sides,
  },
  {
    product_name: 'Toast',
    price: 2.15,
    category: Sides,
  },
  {
    product_name: 'Croissant',
    price: 3.25,
    category: Sides,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
