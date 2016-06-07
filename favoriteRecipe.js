// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Pizza
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var favRecipe = {
	'title': "Pizza",
	'servings': 2,
	'ingredients': ["cheese", "onions", "bacon", "dough", "pepperoni", "marinara"]
	};



console.log("My favorite food is " + favRecipe["title"] + ".");
console.log("This serves " + favRecipe["servings"] + ".");
console.log("You'll need the following ingredients: ");

//prints each ingredient on a different line
for (var i = 0; i < favRecipe.ingredients.length; i++) {
	console.log(favRecipe.ingredients[i]);
}
