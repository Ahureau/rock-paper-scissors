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
    console.log(computerSelection, playerSelection);
    if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You lose! Rock beats scissors.");
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        console.log("You win! Paper beats rock.");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You lose! Rock beats scissors.");
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        console.log("You win! Scissors beat paper.");
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        console.log("You lose! scissors beats paper.");
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You lose! Scissors beat paper.")
    } else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.log("That's not a valid choice. Pick rock, paper, or scissors.");
    } else {
        console.log("It's a tie!");
    }
}

playGame();

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