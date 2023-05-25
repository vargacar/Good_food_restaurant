const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model { }

Menu.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    item_category: {
        type: DataTypes.STRING
    },
    item_name: {
        type: DataTypes.STRING
    },
    item_price: {
        type: DataTypes.INTEGER
    }

},

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'menu'
    }
);

module.exports = Menu;