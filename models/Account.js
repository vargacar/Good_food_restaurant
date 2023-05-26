const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Account extends Model { }

Account.init({
   
},

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'account'
    }
);

module.exports = Account;