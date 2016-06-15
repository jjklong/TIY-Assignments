// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

function fixStart(word) {
  var firstLetter = word[0];

  for (i=0, input=word.length; i<input; i++){
    var replace = word.replace(firstLetter, '*');

    console.log(replace);
  }
  return firstLetter;
}
fixStart('babble');
