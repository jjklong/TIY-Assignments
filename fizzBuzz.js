// "Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”." -- Imran Ghory
// Your answer should print to the console.

// //FIRST
// // var fb = ['', 'Fizz', 'Buzz', 'FizzBuzz'];
// var list = [];
// for (var x = 0; x <= 100; x++){
// 	console.log(x)
//   if (x % 15 === 0)
//   	console.log('FizzBuzz');
//
//   else if (x % 3 === 0) {
//     console.log('Fizz');
//   }
//
//   else if(x % 5 === 0) {
//     console.log('Buzz');
//   }
// }

//SECOND                            ONLY SHOWS THE NUMBERS WE WANT TO SEE
// for (var x = 1; x <= 100; x++){
// 	if (x%3!==0)
// 	if (x%5!==0)
// 	if (x%15!==0)
// 		console.log(x);
// 	if (x%3===0)
// 		console.log('Fizz');
// 	if (x%5===0)
// 		console.log('Buzz');
// 	else if (x%15===0)
// 		console.log('FizzBuzz');
// }

//FINAL

for (var x = 1; x <= 100; x++){
	if (x%15===0)
		console.log('FizzBuzz');
	else if (x%3===0)
		console.log('Fizz');
	else if (x%5===0)
		console.log('Buzz');
	if (x%3!==0)
	if (x%5!==0)
		console.log(x);
}
