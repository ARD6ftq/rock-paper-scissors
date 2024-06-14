const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let cpuScore = 0;

//Generates a random up to max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getCPUChoice(choices) {
  const choice = getRandomInt(3);
  return choices[choice];
}

function getHumanChoice(choices) {
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

function playRound (playerChoice, cpuChoice) {
    if (playerChoice == cpuChoice) {
      return prompt("It's a tie!!");
    } else if ((playerChoice == choices[0] && cpuChoice == choices[2]) || (playerChoice == choices[1] && cpuChoice == choices[0]) 
    || (playerChoice == choices[2] && cpuChoice == choices[1])) {
        return prompt ("You win!!");
    } else {
        return prompt ("CPU won! You lose!");
    }
}

const playerChoice = getHumanChoice(choices);
const cpuChoice = getCPUChoice(choices);
playRound (playerChoice, cpuChoice);

// function playGame () {
    
// }