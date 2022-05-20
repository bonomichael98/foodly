const { Post } = require("../models");

const recipesData = [
  {
    //recipe name
    title: "Roasted Brussels Sprouts",
    //ingredients
    ingredients:
         "1 pound Brussels sprouts ,Extra-virgin olive oil for drizzling,Sea salt and freshly ground black pepper,Lemon Parmesan seasoning,1 tablespoon lemon juice, plus 2 teaspoons zest 1 tablespoon grated, or 1/4 cup shaved Parmesan cheese, 1 tablespoon fresh thyme leaves parsley leaves, for garnish, pinch of red pepper flakes ",
    //instructions/blob of text
    post_body: 
        "Preheat the oven to 425° and line a baking sheet with parchment paper. Slice the Brussels sprouts in half, toss with drizzles of olive oil and pinches of salt and pepper, and spread on the baking sheet. Roast 20 to 30 minutes or until tender and golden brown around the edges. The exact timing will depend on the size of your sprouts., If desired, toss the roasted Brussels sprouts with the lemon juice, zest, Parmesan, and thyme leaves. Garnish with parsley and red pepper flakes.",
    //diet types
    tag_id: 
        1,
    //username/user_id
    user_id: 1
  },
  {
    title: "Thai Pineapple Fried Rice",
    ingredients: 
        "2 tablespoons coconut oil or quality vegetable oil, divided, 2 eggs, beaten with a dash of salt, 1 ½ cups chopped fresh pineapple, 1 large red bell pepper, diced, ¾ cup chopped green onions (about ½ bunch), 2 cloves garlic, pressed or minced, ½ cup chopped raw, unsalted cashews, 2 cups cooked and chilled brown rice*, preferably long-grain brown jasmine rice, 1 tablespoon reduced-sodium tamari or soy sauce, 1 to 2 teaspoons chili garlic sauce or sriracha, 1 small lime, halved, Salt, to taste, Handful of fresh cilantro leaves, torn into little pieces, for garnishing",
    post_body: 
        "Heat a large wok, cast iron skillet or non-stick frying pan over medium-high heat and place an empty serving bowl nearby. Once the pan is hot enough that a drop of water sizzles on contact, add 1 teaspoon oil. Pour in the eggs and cook, stirring frequently, until the eggs are scrambled and lightly set, about 30 seconds to 1 minute. Transfer the eggs to the empty bowl. Wipe out the pan if necessary with a paper towel (be careful, it’s hot!). Add 1 tablespoon oil to the pan and add the pineapple and red pepper. Cook, stirring constantly, until the liquid has evaporated and the pineapple is caramelized on the edges, about 3 to 5 minutes. Then add the green onion and garlic. Cook until fragrant while stirring constantly, about 30 seconds. Transfer the contents of the pan to your bowl of eggs. Reduce the heat to medium and add the remaining 2 teaspoons oil to the pan. Pour in the cashews and cook until fragrant, stirring constantly, about 30 seconds. Add the rice to the pan and stir to combine. Cook until the rice is hot, stirring occasionally, about 3 minutes. Pour the contents of the bowl back into the pan and stir to combine, breaking up the scrambled eggs with your spoon. Cook until the contents are warmed through, then remove the pan from heat. Add the tamari and chili garlic sauce, to taste. Squeeze the juice of ½ lime over the dish and stir to combine. Season to taste with salt and set aside. Slice the remaining ½ lime into 4 wedges. Transfer the stir-fry to individual serving bowls and garnish each bowl with a lime wedge and a light sprinkle of cilantro. Serve with bottles of tamari and chili garlic sauce or sriracha on the side, for those who might want to add more to their bowls.",
    tag_id: 1,
    user_id: 2
  },
  {
    title: "Parmesan Crusted Chicken",
    ingredients: "½ cup all purpose flour, 2 eggs, ⅔ cup seasoned Italian bread crumbs (I use Progresso), ⅓ cup freshly grated Parmigiano-Reggiano cheese, ¼ teaspoon salt, ¼ teaspoon freshly ground black pepper, 1 tablespoon finely chopped fresh herbs, such as thyme, parsley, chives or rosemary, 3-4 boneless skinless chicken breasts (about 1½ pounds), pounded ¼-thick*, Salt and freshly ground black pepper, ¼ cup olive oil, Lemon wedges, for serving",
    post_body: 
        "Set up three large shallow bowls in an assembly line. Put the flour in the first bowl; beat the eggs in the second bowl; and mix the bread crumbs, Parmesan cheese, salt, pepper, and chopped fresh herbs in the third bowl. Season chicken breasts with salt and pepper. Dredge the first chicken breast in the flour and shake off the excess until just a light coating remains. Next, dip the chicken in the egg mixture and turn to coat evenly, letting any excess egg drip off. Finally, dredge the chicken in the bread crumb mixture, turning a few times to coat well. Set breaded chicken on a plate and repeat until all of the chicken breasts are breaded. Heat the oil in a large sauté pan over medium heat. When the oil is hot, add the chicken breasts to the pan and cook for 2-3 minutes until the first side is golden brown. Flip and continue cooking until done, 2-3 minutes longer. Serve immediately with lemon wedges.",
    tag_id: 1,
    user_id: 3
  },
  {
    title: "garlic butter baked salmon",
    ingredients: "1 pound (500 g) fingerling potatoes, halved (or Yukon golds or halved white/red baby potatoes), 2 tablespoons olive oil, 1 1/2 teaspoons salt, divided, 1/2 teaspoon cracked black pepper, divided, 4 (6 oz | 170 g) skinless salmon fillets, 2 1/2 tablespoons minced garlic, divided, 2 tablespoons fresh chopped parsley, 1/3 cup freshly squeezed lemon juice, 1/2 cup melted unsalted butter, 3 bunches asparagus, (18 spears, woody ends removed), 2 tablespoons dry white wine (substitute with 1/4 cup low-sodium chicken broth),1 lemon sliced to garnish",

    post_body: 
        "Heat oven to 400°F | 200°C. On a large rimmed baking sheet, toss together potatoes with the oil, 1/2 tablespoon of garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper. Spread out in an even layer and roast for 15 minutes until they're just starting to soften and brown.Push potatoes to one side of the sheet pan and arrange salmon down the centre. Rub salmon evenly with 1 1/2 tablespoons of the minced garlic and 2 tablespoons of parsley. Add the asparagus to the other side of the pan.Combine 1/4 cup of lemon juice and 1/4 cup of the melted butter together and pour the mixture over the salmon and asparagus. Season everything with the remaining salt and pepper.Return to oven and continue baking until the potatoes are golden and fork-tender and the salmon is opaque throughout, (about 10 minutes). Optional: broil in the last 2 minutes for charred edges.,Meanwhile, in a small bowl, combine the remaining butter, garlic and lemon juice with the wine (or chicken stock). Serve with the salmon, veggies and lemon slices!",
    tag_id: 1,
    user_id: 4
  },
];

const recipesList = () => Post.bulkCreate(recipesData);

module.exports = recipesList;