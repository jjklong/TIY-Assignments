// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.

// Store a maximum age into a variable.

// Store an estimated amount per day (as a number).

// Calculate how many you would eat total for the rest of your life.

// Output the resut to the screen like so: "You will need NN to last you until the ripe old age of X".

//X = maxAge - currentAge;
//NN = X * oreosPerDay


var currentAge = 25;
var maxAge = 100;
var oreosPerDay = 8;
var totalOreos = [];

var yearsLeft = [maxAge - currentAge];
var amount = [yearsLeft * oreosPerDay];

console.log("You will need " + [amount] + " to last you until the ripe old age of " + [yearsLeft] + ".");
