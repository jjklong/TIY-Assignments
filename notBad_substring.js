// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

// notBad('This dinner is not that bad!'): 'This dinner is good!'
// notBad('This movide is not so bad!'): 'This movie is good!'
// notBad('This dinner is bad!'): 'This dinner is bad!'


function notBad(str){
	var not = str.search('not');
	console.log(not);
	var bad = str.search('bad');
	console.log(bad);
	var split = str.split(' ');
	console.log(split);
	if (not<bad){
		return (str.substring(not,bad) + 'good!');
	}




	// if (str.indexOf(not) || str.indexOf(bad)){
	// 	var newstr = str[2].concat(good);
	// 	return newstr;
}

notBad('This dinner is not that bad!');
notBad('This movide is not so bad!');
notBad('This dinner is bad!');
