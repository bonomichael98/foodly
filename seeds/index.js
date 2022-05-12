const sequelize = require('../config/connection');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });



  process.exit(0);
};

seedAll();
