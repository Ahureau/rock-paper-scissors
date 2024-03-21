function getComputerChoice() {
    if (Math.random() > 0.66) {
        return "paper";
    } else if (Math.random() < 0.33) {
        return "rock";
    } else {
        return "scissors";
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, paper, or scissors?");

function playGame() {
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats scissors.";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! Paper beats rock.";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win! Scissors beat paper.";
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "You lose! scissors beats paper.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! Scissors beat paper.";
    } else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return "That's not a valid choice. Pick rock, paper, or scissors.";
    } else {
        return "It's a tie!";
    }
}

console.log(playGame());

/* Just trying something more complicated than needed.

function toNumbers(selection) {
    if (selection.toLowerCase() === "rock") {
        return selection = 1;
    } else if (selection.toLowerCase() === "scissors") {
        return selection = 2;
    } else if ((selection.toLowerCase() === "paper")){
        return selection = 3;
    } else {
        return selection = 0;
    }
}

function playGame() {
    computerSelection = toNumbers(computerSelection);
    playerSelection = toNumbers(playerSelection);
    console.log(computerSelection, playerSelection);
    if (playerSelection === 0) {
        console.log("That's not a valid choice. Pick rock, paper, or scissors.");
    } else if (computerSelection === 1 && playerSelection === 2) {
        console.log("You lose! Rock beats scissors.");
    } else if (computerSelection === 1 && playerSelection === 3) {
        console.log("You win! Paper beats rock.");
    } else if (computerSelection === 2 && playerSelection === 1) {
        console.log("You win! Rock beats scissors.");
    } else if (computerSelection === 2 && playerSelection === 3) {
        console.log("You lose! Scissors beat paper.");
    } else if (computerSelection === 3 && playerSelection === 1) {
        console.log("You lose! Paper beats rock.");
    } else if (computerSelection === 3 && playerSelection === 2) {
        console.log("You win! Scissors beat paper.")
    } else {
        console.log("It's a tie!");
    }
}

*/