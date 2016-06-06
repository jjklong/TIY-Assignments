// Create an array to hold your top choices (colors, presidents, whatever).

// For each choice, log to the console a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice," "My 2nd choice", "My 3rd choice", picking the right suffic for the number based on what it is.



// var choices = [
// 	{firstchoice: oreos,
// 	secondchoice: "chocolate chip cookies",
// 	thirdchoice: "mint milano"
// 	}
// 	];

// function topChoices (choices) {
// 	swith(true) {
// 		case (choices==firstchoice):
// 			console.log("My 1st choice is" + firstchoice);
// 		case choices==secondchoice:
// 			console.log("My 2nd choice is" + secondchoice);
// 	}
// };

var firstchoice = "My 1st choice is";
var secondchoice = "My 2nd choice is";
var thirdchoice = "My 3rd choice is";

function pick (choice) {
	if (choice === firstchoice) {
		return firstchoice;
	}
	else if (choice === secondchoice) {
		return secondchoice;
	}
	else if (choice === thirdchoice) {
		return thirdchoice;
	}
	else
		return "you hate cookies?"
}

console.log(firstchoice + " oreos.");
console.log(secondchoice + " chocolate chip cookies.");
console.log(thirdchoice + " mint milano cookies.");
