// Forgot how old someone is? Calculate it!

// Store the current year in a variable.

// Store their birth year in a variable.

// Calculate their 2 possible ages based on the stored values.

// Output them to the screen like so: "They are either NN or NN", substituting the values.


var years = [
	 {currentYear: 2016,
	 birthYear: 1991}
	];

for (var age = 0; age < years.length; age++){
	var agePlz = years[age];
	console.log("They are either " + [agePlz.currentYear - agePlz.birthYear] + " or " + [agePlz.currentYear - agePlz.birthYear - 1]);
}
