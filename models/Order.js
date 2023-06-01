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
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // The quantity must be at least 1
        validate: {
            min: 1
        }
    },
    accountId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'account',
            key: 'id',
        }
    },
    itemId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'item',
            key: 'id',
        }
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'order'
});

module.exports = Order;
