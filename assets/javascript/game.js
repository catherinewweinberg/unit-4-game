var playerTotal = 0;
var wins = 0;
var losses = 0;

var displayResults = function() {
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("losses").innerHTML = "Losses: " + losses;
  document.getElementById("playerTotal").innerHTML =
    "Total So Far: " + playerTotal;
};

var randomNumber = Math.floor(Math.random() * 101) + 19;
console.log(randomNumber);

var crystals = {};
redcrystal = Math.floor(Math.random() * 12) + 1;
console.log(redcrystal);
bluecrystal = Math.floor(Math.random() * 12) + 1;
console.log(bluecrystal);
purplecrystal = Math.floor(Math.random() * 12) + 1;
console.log(purplecrystal);
greencrystal = Math.floor(Math.random() * 12) + 1;
console.log(greencrystal);
// for (var i = 0; i < 4; i++) {
//   var random = Math.floor(Math.random() * 12);
// }

if (playerTotal === randomNumber) {
  wins++;
  reset();
  alert("Way to go!");
}

if (playerTotal > randomNumber) {
  losses++;
  reset();
  alert("Math is hard.  Try again!");
}

displayResults();
