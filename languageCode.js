// Write a function named helloWorld that:

// takes 1 argument, a language code (e.g. "es", "de", "en")

// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.

// Call that function for each of the supported languages and log the result to make sure it works.


function helloWorld(lang) {
	if (lang === 'fr') {
		return 'Bonjour tout le monde';
	}

	else if (lang ==='es') {
		return 'Hola, Mundo';
	}

	else {
		return 'Hello, World';
	}
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));
//
// function helloWorld (lan){
// 	// document.getElementById('langCode').setAttribute('lang', lan);
// 	var En = "en";
// 	var Es = "es";
// 	var De = "de";
// 	console.log(lan + ":" + " " + "Hello, World");
// }
//
// helloWorld("en");
