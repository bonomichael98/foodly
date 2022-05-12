const { Recipes } = require('../models');

const recipesData = [
  {
    name: 'Printemps',
    ingredients: '',
  },
  {
    name: 'Sommer',
    ingredients: '',
  },
  {
    name: 'Herfst',
    ingredients: '',
  },
  {
    name: 'Invierno',
    ingredients: '',
  },
];

const recipesList = () => Recipes.bulkCreate(recipesData);

module.exports = recipesList;