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

function playRound(playerChoice, cpuChoice) {
  if (playerChoice == cpuChoice) {
    alert("It's a tie!!");
    return "Tie";
  } else if (
    (playerChoice == choices[0] && cpuChoice == choices[2]) ||
    (playerChoice == choices[1] && cpuChoice == choices[0]) ||
    (playerChoice == choices[2] && cpuChoice == choices[1])
  ) {
    playerScore++;
    console.log("Player score: " + playerScore + "  CPU score: " + cpuScore);
    alert("You win!! Player score: " + playerScore + "  CPU score: " + cpuScore);
  } else {
    cpuScore++;
    console.log("Player score: " + playerScore + "  CPU score: " + cpuScore);
    alert("CPU won! You lose! Player score: " + playerScore + "  CPU score: " + cpuScore);
  }
}

function playGame() {
  let round = 1;
  while (round <= 5) {
    alert("Round " + round);
    const playerChoice = getHumanChoice(choices);
    const cpuChoice = getCPUChoice(choices);
    const result = playRound(playerChoice, cpuChoice);

    if (result !== "Tie") {
      round++;
    }
  }

  if (playerScore > cpuScore) {
    alert( "You won the game! Player score: " + playerScore + "  CPU score: " + cpuScore);
    console.log("You won the game!!");
  } else {
    alert("CPU won! Better luck next time! Player score: " + playerScore + "  CPU score: " + cpuScore);
    console.log("CPU won!");
  }
}

playGame();