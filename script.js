// Globals
let playerScore = 0;
let computerScore = 0;
let turns = 0;

// DOM Capture
const rock = document.querySelector("[data-move='rock']");
const paper = document.querySelector("[data-move='paper']");
const scissors = document.querySelector("[data-move='scissors']");
const message = document.querySelector(".message");
const winner = document.querySelector(".winner");
const playerScoreboard = document.querySelector("div[data-score='player']");
const computerScoreboard = document.querySelector("div[data-score='computer']");

// Event Listeners

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

function getComputerSelection() {
  const randomInt = Math.floor(Math.random() * 3 + 1);

  switch (randomInt) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getPlayerSelection(e) {
  return e.target.dataset.move;
}

function playRound(e) {
  if (turns === 0) {
    clearWinner();
  }

  const computerSelection = getComputerSelection();
  const playerSelection = getPlayerSelection(e);
  const roundResult = evalRound(computerSelection, playerSelection);
  message.textContent = `${roundResult}! Computer chose ${computerSelection} and player chose ${playerSelection}.`;

  if (roundResult === "Player wins") {
    playerScore++;
  }
  if (roundResult === "Computer wins") {
    computerScore++;
  }
  turns++;
  displayScore();
  detectGameEnd();
}

function evalRound(computerSelection, playerSelection) {
  if (computerSelection === "rock") {
    switch (playerSelection) {
      case "rock":
        return "Tie";
      case "paper":
        return "Player wins";
      case "scissors":
        return "Computer wins";
    }
  }
  if (computerSelection === "paper") {
    switch (playerSelection) {
      case "rock":
        return "Computer wins";
      case "paper":
        return "Tie";
      case "scissors":
        return "Player wins";
    }
  }
  switch (playerSelection) {
    case "rock":
      return "Player wins";
    case "paper":
      return "Computer wins";
    case "scissors":
      return "Tie";
  }
}

function detectGameEnd() {
  if (turns === 5) {
    winner.textContent = detectWinner(playerScore, computerScore);
    resetGame();
  }
}

function detectWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "Player wins the game!";
  }
  if (playerScore < computerScore) {
    return "Computer wins the game!";
  }
  return "The game is tied!";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  turns = 0;
}

function clearWinner() {
  winner.textContent = "";
}

function displayScore() {
  playerScoreboard.textContent = playerScore;
  computerScoreboard.textContent = computerScore;
}
