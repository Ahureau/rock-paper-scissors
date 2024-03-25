// Creating the page

const buttons = ["Rock", "Paper", "Scissors"];
const body = document.body;
let newGameButton;
const buttonsRow = document.createElement("div");
body.appendChild(buttonsRow);
const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
body.appendChild(resultsDiv);

buttons.forEach((buttonText) => {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.classList.toggle("selection");
    button.addEventListener("click", () => playRound(buttonText));
    buttonsRow.appendChild(button);
})


// The game

function getComputerChoice() {
    if (Math.random() > 0.66) {
        return "paper";
    } else if (Math.random() < 0.33) {
        return "rock";
    } else {
        return "scissors";
    }
}

let round = 1;
let computerScore = 0;
let playerScore = 0;

function playRound(playerInput) {
    let computerSelection = getComputerChoice();
    let playerSelection = playerInput.toLowerCase();
    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        returnResult(computerSelection, playerInput, "You lose! Rock beats scissors.");
        gameCount();
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++;
        returnResult(computerSelection, playerInput, "You win! Paper beats rock.");
        gameCount();
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        returnResult(computerSelection, playerInput, "You lose! Rock beats scissors.");
        gameCount();
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++;
        returnResult(computerSelection, playerInput, "You win! Scissors beat paper.");
        gameCount();
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        computerScore++;
        returnResult(computerSelection, playerInput, "You lose! scissors beats paper.");
        gameCount();
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        returnResult(computerSelection, playerInput, "You lose! Scissors beat paper.");
        gameCount();
    } else {
        returnResult(computerSelection, playerInput, "It's a tie!");
        gameCount();
    }
}

// Print out result after playRound.

function returnResult(computerSelection, playerInput, message) {
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p3.style.fontWeight = "bold";
    
    h2.textContent = `Round ${round}`;
    p1.textContent = `Player selection: ${playerInput}`;
    p2.textContent = `Computer selection: ${computerSelection}`;
    p3.textContent = message;

    resultsDiv.appendChild(h2);
    resultsDiv.appendChild(p1);
    resultsDiv.appendChild(p2);
    resultsDiv.appendChild(p3);
}

// Round count and game end

function gameCount() {
    round++;
    if (round > 5) {
        declareWinner();
        disableButtons();
        resetButton();
    }
}

function declareWinner() {
    const h1 = document.createElement("h1");
    if (computerScore > playerScore) {
        h1.textContent = "You lose!";
    } else if (computerScore < playerScore) {
        h1.textContent = "You win!";
    } else {
        h1.textContent = "It's a tie! You both won the same number of times.";
    }
    resultsDiv.appendChild(h1);
}

function disableButtons() {
    let buttons = Array.from(document.getElementsByClassName("selection"));
    buttons.forEach((button) => {
        button.disabled = !button.disabled;
    });
}

function resetButton() {
    rButton = document.createElement("button");
    rButton.textContent = "Start new game";
    resultsDiv.appendChild(rButton);
    rButton.addEventListener("click", () => {
        resetFunction();
    })
}

function resetFunction() {
    round = 1;
    computerScore = 0;
    playerScore = 0;
    disableButtons();
    document.getElementById("results").innerHTML = "";
}