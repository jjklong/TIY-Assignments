document.body.style.fontFamily = 'sans-serif';
document.getElementById('fullname').innerHTML = 'Jordan Long';
document.getElementById('hometown').innerHTML = 'Detroit, MI';
document.getElementById('movie').innerHTML = 'Finding Nemo';
document.getElementById('food').innerHTML = 'Oreos';


// Iterate through each 'li' to change class to 'listitem'
var listarray = document.getElementsByTagName('li');           //grabs all the li tags and puts them in an array called 'listitem'
for (var listi = 0; listi < listarray.length; listi++) {       //go through the list array (only as long as the array)
      listarray[listi].setAttribute('class', 'listitem');      //going through each index, assign 'class' and 'listitem' to each one
      listarray[listi].style.color="red";
}

// Can't get image to add this way :(
var pic = document.getElementsByClassName('listitem');
function addClass(el, classNames) {
   var classes = classNames(el);

  if (classes.indexOf(el) < 0) {
      classes.push(className);
    el.setAttribute('src', classes.join(' '));
  }
}


//Trying to add a src class to each listitem in order to add image.
// function classNames (li) {
//   return (li.className || '').split(' ');
// }
//
// function addClass(li, listitem) {
//   var classes = classNames(li);
//
//   if (classes.indexOf(li) < 0) {
//     classes.push(listitem);
//     li.setAttribute('src', classes.join(' '));
//   }
// }

//Didn't add - no src to refer to yet?
// var pic = document.getElementsById('fullname');
// pic.src = '"https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/000/290/2f5/0d5094f.jpg"';

// This one adds the image to the bottom
var image = new Image; //create a new image
image.src = "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/000/290/2f5/0d5094f.jpg"; //add this source
document.body.appendChild(image); //DOM add the image variable to the end of the body.


//fail
// var listarray = document.getElementsByTagName('li');
// for (var listi = 0; listi < 6; listi++) {                    //count less than 6 index numbers
//       listarray[listi].setAttribute('class', 'listitem');    //while running through that block of code in listarray, add the class attribute and call it listitem
//       listarray[listi].style.color="red";                    //also, do that with the color too - make it red
//       if (listi > 4){                                        //if th index is more than 4, add this class name??
//       	function addClass(listi, className) {
//         var classes = classNames(el);
//
//         if (classes.indexOf(listi) < 0) {
//         	classes.push(className);
//           listi.setAttribute'src', classes.join('img.png')
//         }
//         }
// }




// COLOR CHANGE ATTEMPT 1//
// var redcolor = document.getElementByClassName('li');
// for (var ii = 0; ii < redcolor.length; ii++){
// 	redcolor[ii].setAttribute('style.color = red');
// }

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
