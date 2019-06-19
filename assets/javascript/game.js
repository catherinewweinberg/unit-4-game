// $(document).ready(function(){

// Computer randomized number (this number is shown to the player) requirements for the numbers range 19 - 120.
var computerResult = Math.floor(Math.random() * 101) + 19;
$("#computerResult").text(computerResult);

// Randomized value of each crystal (value is hidden from player).  Number requirements 1-12.
var redcrystal = Math.floor(Math.random() * 12) + 1;
console.log(redcrystal);
var bluecrystal = Math.floor(Math.random() * 12) + 1;
console.log(bluecrystal);
var purplecrystal = Math.floor(Math.random() * 12) + 1;
console.log(purplecrystal);
var greencrystal = Math.floor(Math.random() * 12) + 1;
console.log(greencrystal);

var playerTotal = 0;
$("#playerTotal").text(playerTotal);
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);

function reset() {
  computerResult = Math.floor(Math.random() * 101) + 19;
  redcrystal = Math.floor(Math.random() * 12) + 1;
  bluecrystal = Math.floor(Math.random() * 12) + 1;
  purplecrystal = Math.floor(Math.random() * 12) + 1;
  greencrystal = Math.floor(Math.random() * 12) + 1;
  playerTotal = 0;
  $("#playerTotal").text(playerTotal);
}

$("#redcrystal").on("click", function() {
  playerTotal = playerTotal + redcrystal;
  $("#playerTotal").text(playerTotal);
  if (playerTotal === computerResult) {
    wins++;
    alert("Way to go!");
    reset();
  } else if (playerTotal > computerResult) {
    losses++;
    alert("Math is hard. Try again!");
    reset();
  }
});

$("#bluecrystal").on("click", function() {
  playerTotal = playerTotal + bluecrystal;
  $("#playerTotal").text(playerTotal);
  if (playerTotal === computerResult) {
    wins++;
    alert("Way to go!");
    reset();
  } else if (playerTotal > computerResult) {
    losses++;
    alert("Math is hard. Try again!");
    reset();
  }
});

$("#purplecrystal").on("click", function() {
  playerTotal = playerTotal + purplecrystal;
  $("#playerTotal").text(playerTotal);
  if (playerTotal === computerResult) {
    wins++;
    alert("Way to go!");
    reset();
  } else if (playerTotal > computerResult) {
    losses++;
    alert("Math is hard. Try again!");
    reset();
  }
});

$("#greencrystal").on("click", function() {
  playerTotal = playerTotal + greencrystal;
  $("#playerTotal").text(playerTotal);
  if (playerTotal === computerResult) {
    wins++;
    alert("Way to go!");
    reset();
  } else if (playerTotal > computerResult) {
    losses++;
    alert("Math is hard. Try again!");
    reset();
  }
});
