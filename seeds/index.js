const itemSeedData = require('./itemSeedData');
const userSeedData = require('./accountSeedData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  console.log('seeding users')
  await userSeedData();
 

  console.log('seeding items')
  await itemSeedData()
  
  process.exit(0);
};

seedAll();