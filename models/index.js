const User = require('./User');
const Item = require('./Item');
const Order = require('./Order');
const Review = require('./Review');

User.hasMany(Order, { foreignKey: 'accountId' });
Order.belongsTo(User, { foreignKey: 'accountId' });

Item.hasMany(Order, { foreignKey: 'itemId' });
Order.belongsTo(Item, { foreignKey: 'itemId' });

module.exports = { User, Item, Order, Review };


