// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

// var x = 1;
// var list = [];
// for (x = 0; x < 1000; x++){
// 	list.push(x);
// }
// var threes = function (num3) {
// 	return num3 % 3 ===0;
// };
// var only3 = list.filter(threes);
//
// var fives = function (num5) {
// 	return num5 % 5 ===0;
// };
// var only5 = list.filter(fives);
//
// var fifteen = function (dup) {
//   return dup % 15 ===0;
// }
//
// var filteredNums = only3.concat(only5);
// filteredNums.sort(function(a, b) {
// 	return a - b;
// });


//2ND TRY  --
// var x = 1;
// var list = [];                                 HEY JS - here's an array to call 'list', I don't know the size of it yet, sit tight...
// for (x = 0; x < 1000; x++){                    HEY JS - loop through this up to 1000, adding each time.
// 	list.push(x);                                 HEY JS - add everything from list to x
// }
// var threes = function (num3) {                 HEY JS - call this function threes
// 	return num3 % 3 ===0;                         HEY JS - only let numbers through if they don't have a remainder after being divided by 3.
// };
// var only3 = list.filter(threes);               HEY JS - apply that function I told you about, to list
//
// var fives = function (num5) {
// 	return num5 % 5 ===0;
// };
// var only5 = list.filter(fives);
//
// var filteredNums = only3.concat(only5);        HEY JS - combine my filter 3 and filter 5
//
// var fifteen = function (dup) {                 HEY JS - oh no! there are duplicates. Not to worry, just find the multiples of 15.
//   return dup % 15 ===0;
// }
//
// var nodup = filteredNums.filter(fifteen);      HEY JS - filter out all the multiples of 15.
//
// var sum = only3 + only5 - nodup;               HEY JS - add all the 3's to the 5's. Don't forget to subtract the 15s dupliates!
// console.log(only3);



//3RD TRY
var sum = 0;                                     //HEY JS - I'm declaring this variable referred to as 'sum' - assign it to the value 0 for now.
for (var x = 0; x < 1000; x++){                   //HEY JS - create a for statement - I will tell you what to do after I let you know that we're starting at 0, and each time you loop, make sure you didn't go above 1000. Oh and go up in single incriments.
  if (x % 3 === 0) {                            //HEY JS - as you're running the loop, take the sum of all the numbers that have exatly 0 remaining after divided by 3
    sum+=x;
  }
  else if(x % 5 === 0) {                         //If it didn't match what I said above, double check when divided by 5 for numbers with no remainder.
    sum+=x;                                      //compile the sum of these
  }
}
console.log(sum);                                 //print out the sum you found 
