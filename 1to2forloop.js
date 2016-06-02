// Write a for loop that will iterate from 0 to 20.

// For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g.j"2 is even").


function OorE () {
	var max = 20;
  for (i=0; i<=max; i++){
  	if (i===0){
  		console.log(i + " has special rules.");
  	}
  	else if (i%2===0){
  		console.log(i + " is even.");
  	} else
  		console.log(i + " is odd.");
  }
}
OorE();
