const User = require('./User');
const Item = require('./Item');
const Order = require('./Order');
const OrderItem = require('./OrderItems')

User.hasMany(Order, {
    foreignKey: 'user_id'
})

Order.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete : 'cascade'
})

Order.hasMany(OrderItem, {
    foreignKey: 'order_id'
})

OrderItem.belongsTo(Order, {
    foreignKey: 'order_id',
    onDelete : 'cascade'
})

OrderItem.hasMany(Item, {
    foreignKey: 'item_id'
})

module.exports = { User, Item, Order, OrderItem };