// Create an object to store the following information about your favorite movie: title (a string), duraction (a number), and stars (an array of strings).

// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favMoovie = {
	"title": "Deadpool",
	"duration": "108",
	"Stars": [" Ryan Reynolds", " Morena Baccarin", " T.J. Miller"]
	};
//PRINTS w/o function
// console.log(favMoovie.title + " lasts for " + favMoovie.duration + " minutes. " + "Stars:" + favMoovie.Stars + ".");


// var title = favMoovie.title;
// console.log(title);
// var duration = favMoovie.duration;
// console.log(duration);
// var stars = favMoovie.Stars;
// console.log(stars);

function movie (favMoovie) {
	console.log(favMoovie.title + " lasts for " + favMoovie.duration + " minutes. " + "Stars:" + favMoovie.Stars + ".");
}
movie(favMoovie);
