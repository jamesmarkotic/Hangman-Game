var hangWords = ['stairwaytoheaven' , 'blackdog' , 'theocean' , 'wholelottalove']

var wins = 0;


// Game Rules
var test = hangWords[Math.floor(Math.random() * hangWords.length)];
console.log(test);
// Display "_" for unguessed word
function displayBlank () {
	document.getElementById('currWord').document.write('hangWords[i]');
}
// Main Function
// Code for key press to start game

document.onkeyup = function (event) {
	// wordChoice();
};

// wordChoice();