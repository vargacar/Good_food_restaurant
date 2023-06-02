const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

class User extends Model {
    checkPassword(clientPassword) {
        return bcrypt.compareSync(clientPassword, this.password)
    }
}


User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

},

    {

        hooks: {
            async beforeCreate(newData) {
                newData.password = await bcrypt.hash(newData.password, 10)
                return newData
            },

            async beforeUpdate(newData) {
                newData.password = await bcrypt.hash(newData.password, 10)
                return newData
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;