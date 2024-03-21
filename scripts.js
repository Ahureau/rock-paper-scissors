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
    playerSelection = toNumbers(playerSelection);
    computerSelection = toNumbers(computerSelection);
    if (computerSelection === 1 && playerSelection === 2) {
        
    }
}

playGame();