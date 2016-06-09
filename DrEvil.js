// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars',
// 	except it will add '(pinky)' at the end if the amount is 1 million. For example:

// 	DrEvil(10): 10 dollars
// 	DrEvil(1000000): 1000000 dollars (pinky)

function DrEvil(amount) {
	if (amount !== 1000000) {
		console.log(amount + ' dollars');
	} else if (amount == 1000000) {
		console.log(amount + ' dollars' + ' (pinky)');
}
}

DrEvil(10);
DrEvil(1000000);

//> 10 dollars
//> 1000000 dollars (pinky)
