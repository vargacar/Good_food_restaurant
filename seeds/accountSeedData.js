const { User } = require('../models');
    

const userSeedData = [
    {
        username: 'nemocap',
        email: 'nemocap@test.com',
        password: 'test123'
    },

    {
        username: 'dori',
        email: 'dori@test.com',
        password: 'dori123'
    },

    {
        username: 'turtlecap',
        email: 'turtle@test.com',
        password: 'turtle123'
    }
]

const userSeed = () => User.bulkCreate(userSeedData);
module.exports = userSeed;