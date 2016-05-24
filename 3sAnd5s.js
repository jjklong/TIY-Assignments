// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

var x = 1;
var list = [];
for (x = 0; x < 1000; x++){
	list.push(x);
}
var threes = function (num3) {
	return num3 % 3 ===0;
};
var only3 = list.filter(threes);

var fives = function (num5) {
	return num5 % 5 ===0;
};
var only5 = list.filter(fives);

var filteredNums = only3.concat(only5);
console.log(filteredNums.sort());
