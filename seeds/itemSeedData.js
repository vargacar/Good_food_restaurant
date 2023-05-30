const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    category: Breakfast,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    category: Breakfast,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    category: Breakfast,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    category: Breakfast,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    category: Breakfast,
  },
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    category: Breakfast,,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    category: Lunch,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    category: Lunch,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    category: Lunch,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    category: Lunch,
  },
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    category: Lunch,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    category: Lunch,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    category: Dinner,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    category: Dinner,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    category: Dinner,
  },
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    category: Dinner,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    category: Dinner,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    category: Dinner,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    category: Desserts,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    category: Desserts,
  },
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    category: Desserts,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    category: Desserts,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    category: Desserts,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    category: Desserts,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    category: Drinks,
  },
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    category: Drinks,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    category: Drinks,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    category: Drinks,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    category: Drinks,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    category: Drinks,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
