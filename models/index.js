const User = require('./User');
const Item = require('./Item');
const Review= require('./Review');
const Order = require('./Order');
const OrderItem = require('./OrderItems')

User.hasMany(Order, {
    foreignKey: 'userId'
})

Order.belongsTo(User, {
    foreignKey: 'userId',
    onDelete : 'cascade'
})

Order.hasMany(OrderItem, {
    foreignKey: 'orderId'
})

OrderItem.belongsTo(Order, {
    foreignKey: 'orderId',
    onDelete : 'cascade'
})

OrderItem.hasMany(Item, {
    foreignKey: 'itemId'
})

module.exports = { User, Item, Review, Order, OrderItem };