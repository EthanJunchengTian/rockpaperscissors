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

