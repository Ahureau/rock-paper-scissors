// Get computer to pick rock paper or scissors to compare later.

function getComputerChoice() {
    if (Math.random() > 0.66) {
        return "paper";
    } else if (Math.random() < 0.33) {
        return "rock";
    } else {
        return "scissors";
    }
}

let computerScore = 0;
let playerScore = 0;

// Asks for input from user and then compares to cpu input.

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        return "You lose! Rock beats scissors.";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        return "You win! Paper beats rock.";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        return "You win! Scissors beat paper.";
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        computerScore++;
        return "You lose! scissors beats paper.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        return "You lose! Scissors beat paper.";
    } else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        computerScore++;
        return "That's not a valid choice. Pick rock, paper, or scissors next round.";
    } else {
        return "It's a tie!";
    }
}

function declareWinner() {
    if (computerScore > playerScore) {
        console.log("You lose!");
    } else if (computerScore < playerScore) {
        console.log("You win!");
    } else {
        console.log("It's a tie!");
    }
}

function playGame(){
    let round;
    for (round = 1; round <= 5; round++) {
        console.log("Round " + round)
        console.log(playRound());
    }
    declareWinner();
}

playGame();