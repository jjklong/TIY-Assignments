// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function palindrome () {
	var x=91*99;
	console.log(x);
	return x;
}
palindrome();



function pali(){
	var x = 100;
	var y = 999;
	var len = y-x;



	for (i=0; i<len; i++){
		var mult = (x+i)*(y-i);
		console.log(mult);
		// if(mult===90009){
		// 	console.log(x + y);
		// }
		// else {
		// 	console.log(mult);
		// }
	}
}
pali();
