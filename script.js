const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return rock;
    } else if (choice === 1) {
        return paper;
    } else {
        return scissors;
    }
}

function getHumanChoice(callback) {

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".rock").addEventListener("click", () => {
            callback(rock);
        });
        document.querySelector(".paper").addEventListener("click", () => {
            callback(paper);
        });
        document.querySelector(".scissors").addEventListener("click", () => {
            callback(scissors);
        });
        document.querySelector(".restart").addEventListener("click", () => {
            restartGame();
        });
    });

}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "rock") {
        document.querySelector(".title").textContent = "Rock vs Rock: It's a Draw!";
    } 
    else if (humanChoice === "paper" && computerChoice === "paper") {
        document.querySelector(".title").textContent = "Paper vs Paper: It's a Draw!";
    } 
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        document.querySelector(".title").textContent = "Scissors vs Scissors: It's a Draw!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        document.querySelector(".computer-score").textContent = `Computer: ${computerScore}`;
        document.querySelector(".title").textContent = "Rock vs Paper: Computer Wins!";
    } 
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        document.querySelector(".computer-score").textContent = `Computer: ${computerScore}`;
        document.querySelector(".title").textContent = "Paper vs Scissors: Computer Wins!";
    } 
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        document.querySelector(".computer-score").textContent = `Computer: ${computerScore}`;
        document.querySelector(".title").textContent = "Scissors vs Rock: Computer Wins!";
    } 
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        document.querySelector(".player-score").textContent = `Player: ${humanScore}`;
        document.querySelector(".title").textContent = "Paper vs Rock: Human Wins!";
    } 
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        document.querySelector(".player-score").textContent = `Player: ${humanScore}`;
        document.querySelector(".title").textContent = "Scissors vs Paper: Human Wins!";
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        document.querySelector(".player-score").textContent = `Player: ${humanScore}`;
        document.querySelector(".title").textContent = "Rock vs Scissors: Human Wins!";
    }
}

function restartGame(){
    humanScore = 0;
    computerScore = 0;
    document.querySelector(".player-score").textContent = `Player: ${humanScore}`;
    document.querySelector(".computer-score").textContent = `Computer: ${computerScore}`;
    document.querySelector(".title").textContent = "Rock Paper Scissors!";
}
function playGame(){
    
    getHumanChoice((humanChoice) => {
        playRound(humanChoice, getComputerChoice());
    });
}


playGame();
