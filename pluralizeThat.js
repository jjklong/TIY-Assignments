// Write a function named pluralize that:

// takes 2 arguments, a noun and a number/

// returns the number and pluralized form, like "5 cats" or "1 dog"

// Call that function for a few different scores and log the result to make sure it works.

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
// 
// function pluralizeThat (noun, number){
// 	var plur = (" " + noun + "s");
// 	var sing = (" " + noun);
// 	if (number > 1 && noun !== ("sheep")) {
// 		return number + plur;
// 	} else {
// 		return number + sing;
// 	}
// }
//
// console.log(pluralizeThat('toad', 2));
// console.log(pluralizeThat('firefly', 1));
// console.log(pluralizeThat('sheep', 8));
// console.log(pluralizeThat('geese', 10));
//

// //////////////////////////////////
//Hard Mode Solution//
function pluralize (noun, number) {
	if (number !=1 && noun != 'sheep' && noun != 'geese') {
		return number + ' ' + noun + 's';
	}

	else {
		return number + ' ' + noun;
	}
}

console.log('I have ' + pluralize('frog', 2));
console.log('I have ' + pluralize('sheep', 4));
console.log('I have ' + pluralize('goose', 1));
