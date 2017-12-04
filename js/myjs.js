window.onload = function(){
	
	//Create an array of words
	var words = ['cat', 'dog', 'bird', 'fish', "bat", "buck"];
	//Choose word randomly
	var randWord = Math.floor(Math.random()*words.length);
	var theWord = words[randWord];
	console.log(theWord);

	//Create underscore 
	var underScore = [];
	function makeUnderscores(){
		for(var i=0; i<theWord.length; i++){
			underScore.push("_");
		}
		return underScore.join(" ");
	};
	console.log(makeUnderscores()); 
	document.getElementById("underscore").innerHTML = underScore.join(" ");
	//check guesses quantity 
	var guesses = theWord.length;
	console.log(guesses);

	//Corret Guesses
	var correct = [];
	//docuemnt.onkeyup = function (event) {
		//if(event.key)
	//}

	//Show Correct Guesses

	//Incorrect Guesses
	var wrongGuess = [];
	//Loop through Array
	
}//END Window.onload