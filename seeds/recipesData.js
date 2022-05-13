const { Recipes } = require('../models');

const recipesData = [
  {
    name: 'Roasted Brussels Sprouts',
    ingredients: [
        '1 pound Brussels sprouts',
        'Extra-virgin olive oil, for drizzling',
        'Sea salt and freshly ground black pepper',
        'Lemon Parmesan seasoning',
        '1 tablespoon lemon juice, plus 2 teaspoons zest',
        '1 tablespoon grated, or 1/4 cup shaved Parmesan cheese',
        '1 tablespoon fresh thyme leaves',
        'parsley leaves, for garnish',
        'pinch of red pepper flakes'
    ],
    instructions: [
        'Preheat the oven to 425° and line a baking sheet with parchment paper. Slice the Brussels sprouts in half, toss with drizzles of olive oil and pinches of salt and pepper, and spread on the baking sheet. Roast 20 to 30 minutes or until tender and golden brown around the edges. The exact timing will depend on the size of your sprouts.',
        'If desired, toss the roasted Brussels sprouts with the lemon juice, zest, Parmesan, and thyme leaves. Garnish with parsley and red pepper flakes.'
    ],
    diet: [
        'Vegetarian', 
        'Vegan', 
        'Paleo'
    ]
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