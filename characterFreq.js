// Given two parameters, write a function that calculates the frequency of each character in a given string.
// e.g., letterCount('i','victoria'); => "victoria contains the letter i 2 times"


function letterCount(letter, word){


//find first occurance
	var first = word.indexOf(letter);
	console.log(first);
//find last occurance
	var last = word.lastIndexOf(letter);
	console.log(last);


	if (first !== -1 || last !== -1){
		return	word + " contains the letter " + letter + " times.";
	}
}


letterCount("o","toronto");
