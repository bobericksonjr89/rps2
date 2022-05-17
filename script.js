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

function getPlayerSelection() {
  let playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    playerSelection = prompt("rock, paper, or scissors?");
  }
  return playerSelection;
}

function playRound(computerSelection, playerSelection) {
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerSelection();
    const playerSelection = getPlayerSelection();
    const roundResult = playRound(computerSelection, playerSelection);
    console.log(
      `${roundResult}! Computer chose ${computerSelection} and player chose ${playerSelection}.`
    );

    if (roundResult === "Player wins") {
      playerScore++;
    }
    if (roundResult === "Computer wins") {
      computerScore++;
    }
  }

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

game();
