// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. you can assume that the strings are at least 2 characters long. For example:

// mixUp('mix', 'pod'): 'pox mid'
// mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");

function mixUp (one, two){
	var first = one.slice(1,2);
	var second = two.slice(1,2);

	var replaceOne = one.replace("");
	return first + second;
}
mixUp('dog', 'cat');
