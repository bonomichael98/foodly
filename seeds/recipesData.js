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
    ],
    author: 'marram'
  },
  {
    name: 'Thai Pineapple Fried Rice',
    ingredients: [
        '2 tablespoons coconut oil or quality vegetable oil, divided',
        '2 eggs, beaten with a dash of salt',
        '1 ½ cups chopped fresh pineapple',
        '1 large red bell pepper, diced',
        '¾ cup chopped green onions (about ½ bunch)',
        '2 cloves garlic, pressed or minced',
        '½ cup chopped raw, unsalted cashews',
        '2 cups cooked and chilled brown rice*, preferably long-grain brown jasmine rice',
        '1 tablespoon reduced-sodium tamari or soy sauce',
        '1 to 2 teaspoons chili garlic sauce or sriracha',
        '1 small lime, halved',
        'Salt, to taste',
        'Handful of fresh cilantro leaves, torn into little pieces, for garnishing'
    ],
    instructions: [
        'Heat a large wok, cast iron skillet or non-stick frying pan over medium-high heat and place an empty serving bowl nearby. Once the pan is hot enough that a drop of water sizzles on contact, add 1 teaspoon oil. Pour in the eggs and cook, stirring frequently, until the eggs are scrambled and lightly set, about 30 seconds to 1 minute. Transfer the eggs to the empty bowl. Wipe out the pan if necessary with a paper towel (be careful, it’s hot!).',
        'Add 1 tablespoon oil to the pan and add the pineapple and red pepper. Cook, stirring constantly, until the liquid has evaporated and the pineapple is caramelized on the edges, about 3 to 5 minutes. Then add the green onion and garlic. Cook until fragrant while stirring constantly, about 30 seconds. Transfer the contents of the pan to your bowl of eggs.',
        'Reduce the heat to medium and add the remaining 2 teaspoons oil to the pan. Pour in the cashews and cook until fragrant, stirring constantly, about 30 seconds. Add the rice to the pan and stir to combine. Cook until the rice is hot, stirring occasionally, about 3 minutes.',
        'Pour the contents of the bowl back into the pan and stir to combine, breaking up the scrambled eggs with your spoon. Cook until the contents are warmed through, then remove the pan from heat. Add the tamari and chili garlic sauce, to taste. Squeeze the juice of ½ lime over the dish and stir to combine. Season to taste with salt and set aside.',
        'Slice the remaining ½ lime into 4 wedges. Transfer the stir-fry to individual serving bowls and garnish each bowl with a lime wedge and a light sprinkle of cilantro. Serve with bottles of tamari and chili garlic sauce or sriracha on the side, for those who might want to add more to their bowls.'
    ],
    diet: [
        'Healthy Eats',
        'Nuts'
    ],
    author: 'icestorm'
  },
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
    ],
    author: 'lambchop'
  },
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
    ],
    author: 'sevensamurai'
  },
];

const recipesList = () => Recipes.bulkCreate(recipesData);

module.exports = recipesList;