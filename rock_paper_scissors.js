const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let cpuScore = 0;
let currentRound = 1;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getCPUChoice(choices) {
  const choice = getRandomInt(3);
  return choices[choice];
}

function playRound(playerChoice, cpuChoice) {
  const resultDiv = document.getElementById("result");
  const playerScoreSpan = document.getElementById("playerScore");
  const cpuScoreSpan = document.getElementById("cpuScore");
  const roundDiv = document.getElementById("round");
  let resultMessage;

  if (playerChoice == cpuChoice) {
    resultMessage = "It's a tie!!";
    return "Tie";
  } else if (
    (playerChoice == choices[0] && cpuChoice == choices[2]) ||
    (playerChoice == choices[1] && cpuChoice == choices[0]) ||
    (playerChoice == choices[2] && cpuChoice == choices[1])
  ) {
    playerScore++;
    resultMessage = `You win!! Player score: ${playerScore}  CPU score: ${cpuScore}`;
  } else {
    cpuScore++;
    resultMessage = `CPU won! You lose! Player score: ${playerScore}  CPU score: ${cpuScore}`;
  }

  resultDiv.textContent = resultMessage;
  playerScoreSpan.textContent = playerScore;
  cpuScoreSpan.textContent = cpuScore;
  return resultMessage;
}

function playGame(playerChoice) {
  if (currentRound > 5) {
    return; // Do nothing if the game is already over
  }

  const cpuChoice = getCPUChoice(choices);
  const result = playRound(playerChoice, cpuChoice);

  if (result !== "Tie") {
    currentRound++;
    if (currentRound <= 5) {
      document.getElementById("round").textContent = `Round: ${currentRound}`;
    }
  }

  if (currentRound > 5) {
    if (playerScore > cpuScore) {
      alert(
        `You won the game! Player score: ${playerScore}  CPU score: ${cpuScore}`
      );
      console.log("You won the game!!");
    } else if (playerScore < cpuScore) {
      alert(
        `CPU won! Better luck next time! Player score: ${playerScore}  CPU score: ${cpuScore}`
      );
      console.log("CPU won!");
    } else {
      alert(`It's a tie! Player score: ${playerScore}  CPU score: ${cpuScore}`);
      console.log("It's a tie!");
    }
  }
}

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  currentRound = 0;

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("cpuScore").textContent = cpuScore;
  document.getElementById("round").textContent = `Round: ${currentRound}`;
  document.getElementById("result").textContent = "";
}

const container = document.querySelector(".container");

const rock = document.createElement("button");
rock.textContent = "ROCK";
container.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "PAPER";
container.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
container.appendChild(scissors);

rock.addEventListener("click", () => playGame("ROCK"));
paper.addEventListener("click", () => playGame("PAPER"));
scissors.addEventListener("click", () => playGame("SCISSORS"));

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetGame);
