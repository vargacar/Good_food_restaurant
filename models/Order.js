const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model { }

Order.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    },
    
    totalPrice: {
        type: DataTypes.DECIMAL,
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'orders'
});

module.exports = Order;
