// Globals
let playerScore = 0;
let computerScore = 0;
let turns = 0;

// DOM Capture
const rock = document.querySelector("[data-move='rock']");
const paper = document.querySelector("[data-move='paper']");
const scissors = document.querySelector("[data-move='scissors']");

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
  const computerSelection = getComputerSelection();
  const playerSelection = getPlayerSelection(e);
  const roundResult = evalRound(computerSelection, playerSelection);
  console.log(
    `${roundResult}! Computer chose ${computerSelection} and player chose ${playerSelection}.`
  );
  if (roundResult === "Player wins") {
    playerScore++;
  }
  if (roundResult === "Computer wins") {
    computerScore++;
  }
  turns++;
  if (turns === 5) {
    detectWinner(playerScore, computerScore);
  }
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

function detectWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
    return;
  }
  if (playerScore < computerScore) {
    console.log("Computer wins the game!");
    return;
  }
  console.log("The game is tied!");
}
