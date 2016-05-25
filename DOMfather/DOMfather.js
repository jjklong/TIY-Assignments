document.body.style.fontFamily = 'sans-serif';
document.getElementById('fullname').innerHTML = 'Jordan Long';
document.getElementById('hometown').innerHTML = 'Detroit, MI';
document.getElementById('movie').innerHTML = 'Finding Nemo';
document.getElementById('food').innerHTML = 'Oreos';


// Iterate through each 'li' to change class to 'listitem'
var listarray = document.getElementsByTagName('li');           //grabs all the li tags and puts them in an array called 'listitem'
for (var listi = 0; listi < listarray.length; listi++) {       //go through the list array (only as long as the array)
      listarray[listi].setAttribute('class', 'listitem');      //going through each index, assign 'class' and 'listitem' to each one
}





// FIRST ITERATE OUTLINE??
// function addLi() {
// 	var listitem = document.getElementsByTagName('li');
//   for (var i = currentLi.length - 1; i >= 0; i--){
//   	var soloLi = listitem[i];
//     if (soloLi) {
//     	var text = document.createTextNode(soloLi);
//     }
//   }
// }
