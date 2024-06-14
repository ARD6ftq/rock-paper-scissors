//Generates a random up to max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  choice = ["ROCK", "PAPER", "SCISSORS"];
  i = getRandomInt(3);
  return choice[i];
}

console.log(getComputerChoice());