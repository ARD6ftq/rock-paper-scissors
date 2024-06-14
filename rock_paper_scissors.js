const choices = ["ROCK", "PAPER", "SCISSORS"];
//Generates a random up to max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choice = getRandomInt(3);
  return choices[choice];
}

function getHumanChoice() {
  while (true) {
    let playerChoice = prompt("Please enter a choice: Rock, Paper, Scissors ");
    playerChoice = playerChoice.toUpperCase();

    if (choices.includes(playerChoice)) {
      return playerChoice;
    } else {
      alert("Invalid choice, pick again.");
    }
  }
}

console.log(getComputerChoice());
console.log(getHumanChoice());