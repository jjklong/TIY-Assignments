/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/


// .sort() - orders the values within an array. In this example, we are calling the array 'dogs' and then telling JS to sort them. So the default orders the first letters 'B, K, N".
var dogs = ['Kato', 'Nala', 'Boo'];
dogs.sort();
> [ 'Boo', 'Kato', 'Nala' ]
// this example shows the number comes first in order when sorted, followed by 'f' and 'f'.
var numbers = [ 'three', 'five', 3 ];
numbers.sort();
> [ 3, 'five', 'three' ]


// .concat() - this combines arrays into a new array with the other arrays
var dogs = ['Kato', 'Nala', 'Boo'];         //tells JS to contain the array of these three strings and refer to it as dogs.
var numbers = [4, 6, 2];                    //tells JS to contain the array of these three numbers and refer to it as numbners.
var dogsnumbers = dogs.concat(numbers);     //the .concat tells JS to combine the 'dogs' array with the 'numbers' array.
console.log(dogsnumbers);                   //print the new array called dogsnumbers.
> [ 'Kato', 'Nala', 'Boo', 4, 6, 2 ]        //


// .indexOf() - moves index number to the first occurance within the string
var index = 'The Iron Yard Durham';        //tells JS to contain the string 'TIYdurham' and refer to it as 'index'.
console.log(index.indexOf('d'));          //take the string I just told you about, find the first 'd' within the string, and print out the index number.
> 12


// .split() - splits the entire string up by the specified value - in this case 'a'
var dogs = 'Kato, Nala, Boo';             //Refer to this string as 'dogs'
console.log(dogs.split('a'));             //Take 'dogs' and split up the characters into new arrays wherever there is an 'a'.
> [ 'K', 'to, N', 'l', ', Boo' ]


// .join() - joins everything in an array and makes it a string.
var dogs = [ 'Kato', 'Nala', 'Boo' ];     //make an array called dogs
var long = dogs.join(' and ');            //join the above strings into a new string called 'long' by adding 'and' between each
console.log(long);
> Kato and Nala and Boo


// .pop() - takes the last element in the string and returns it
var dogs = [ 'Kato', 'Nala', 'Boo' ];     //make an array called dogs
var long = dogs.pop();                    //take the last element from the dogs array and create a new string called 'long' including that last element
console.log(long);
> Boo


// .push() - takes the strings following () and adds them to the defined 'dogs' array
var dogs = [ 'Kato', 'Nala', 'Boo' ];     //put these strings in an array called dogs
var pets = dogs.push('Chad', 'Cat');      //take the dogs array, add these two strings to the 'dogs' array
console.log(dogs);                        //prints the five names after Chad and Cat were added
console.log(pets);                        // prints the length of the array
>[ 'Kato', 'Nala', 'Boo', 'Chad', 'Cat' ]
>5


// .slice() - takes the defined index range within the array and copies only those to a new array
var dogs = [ 'Kato', 'Nala', 'Boo', 'Chad', 'Cat' ];    //this is my array or 'dogs'
var mypets = dogs.slice(0,3);                           //within 'dogs', take the index 0,1,2 and copy them to a new array called mypets
console.log(mypets);
>[ 'Kato', 'Nala', 'Boo' ]


// .splice() - take this array, start at this index number, remove this many index numbers, add this after they're removed
var dogs = [ 'Kato', 'Nala', 'Boo', 'Chad', 'Chair'];   //call this array 'dogs'
dogs.splice(3, 2, 'Lloyd');                             //take 'dogs', start before the 3rd index, remove the 2 after it, and add 'Lloyd' to this array
console.log(dogs);
>[ 'Kato', 'Nala', 'Boo', 'Lloyd' ]


// .shift() - takes away the first element in an array and returns it
var dogs = [ 'Kato', 'Nala', 'Boo'];
dogs.shift()                                          //take the dogs array above and remove the first element
console.log(dogs);
> [ 'Nala', 'Boo' ]


// .unshift() - adds an element to the array
var dogs = [ 'Kato', 'Nala', 'Boo'];
dogs.unshift('Lloyd');                                //add 'Lloyd' at the front of the 'dogs' array I mentioned above
console.log(dogs);
> [ 'Lloyd', 'Kato', 'Nala', 'Boo' ]


// .filter() - only takes the values within the defined range and makes a new array within filtered
function lessthan(value) {                              //make a function called 'lessthan' which will have some value
	return value <=11;                                    //only allow numbers under 11
}
var filtered = [6, 19, 2, 61, 3].filter(lessthan);      //hey JS, here's an array of numbers i will want to call filtered - can you apply that function above and .filter (remove) the numbers that don't agree? K, thanks.
console.log(filtered);
>[ 6, 2, 3 ]

// .map() - when you're working with a lot of other stuff, you might want to apply the same function to various arrays, use this to map and link each part to the function
var maptest = [2, 3, 4];                  //use these numbers
var maptestmath = maptest.map(           //use the below function on each number in 'maptest'
  function(maptestmath) {                 //add 10 to each number
    return maptestmath + 10;
});
console.log(maptestmath)
>[ 12, 13, 14 ]
