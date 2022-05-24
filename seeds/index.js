const sequelize = require('../config/connection');
const recipesList = require('../seeds/posts')
const seedUsers = require('../seeds/user');
// const tagsList = require('./tags');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await recipesList();

  // await tagsList();

  process.exit(0);
};

seedAll();