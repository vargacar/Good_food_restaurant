const User = require('./User');
const Item = require('./Item');
const Review= require('./Review');

Account.hasMany(Order, { foreignKey: 'accountId' });
Order.belongsTo(Account, { foreignKey: 'accountId' });

Item.hasMany(Order, { foreignKey: 'itemId' });
Order.belongsTo(Item, { foreignKey: 'itemId' });



module.exports = { User, Item, Review };

