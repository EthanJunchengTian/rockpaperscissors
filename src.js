const scoreboardPlayer = document.querySelector('.scoreboard-player')
const scoreboardComp = document.querySelector('.scoreboard-computer')
const finalscore = document.querySelector('.final-score')

const buttons = document.querySelectorAll('button');

let playerChoice = 0
let playerChoiceNum = 0

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;

        console.log(playerChoice);
        playRound();
        finalResult();
    })
})

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else return "scissors";
}

function playRound (player, computer) {
    computer = getComputerChoice();
    player = playerChoice;

    if (
            (computer === "rock" && player === "paper") ||
            (computer === "paper" && player === "scissors") ||
            (computer === "scissors" && player === "rock")
        ) {
            playerScore++;
            resultBoard.innerHTML = `You Won!<br>Player choice: ${player}<br>Computer choice: ${computer}`;
            scoreboardPlayer.textContent = playerScore;
        } else if (
            (computer === "rock" && player === "scissors") ||
            (computer === "paper" && player === "rock") ||
            (computer === "scissors" && player === "paper")
        ) {
            computerScore++;
            resultBoard.innerHTML = `You Lost!<br>Player choice: ${player}<br>Computer choice: ${computer}`;
            scoreboardComp.textContent = computerScore;
        } else {
            resultBoard.innerHTML = `It's A Draw!<br>Player choice: ${player}<br>Computer choice: ${computer}`;
        }
}

