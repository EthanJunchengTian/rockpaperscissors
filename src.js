const scoreboardPlayer = document.querySelector('.scoreboard-player')
const scoreboardComp = document.querySelector('.scoreboard-computer')
const finalscore = document.querySelector('.final-score')
const containerResult = document.querySelector('.container-result')

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
            finalscore.innerHTML = `You Won!<br>Player choice: ${player}<br>Computer choice: ${computer}`;
            scoreboardPlayer.textContent = playerScore;
        } else if (
            (computer === "rock" && player === "scissors") ||
            (computer === "paper" && player === "rock") ||
            (computer === "scissors" && player === "paper")
        ) {
            computerScore++;
            finalscore.innerHTML = `You Lost!<br>Player choice: ${player}<br>Computer choice: ${computer}`;
            scoreboardComp.textContent = computerScore;
        } else {
            finalscore.innerHTML = `It's A Draw!<br>Player choice: ${player}<br>Computer choice: ${computer}`;
        }
}

function disableButtons (state) {
  buttons.forEach(button => {
    button.disabled = state;
  })
}

function finalResult () {
  
  if (playerScore === 5) {
    finalscore.textContent = "You won the game!";
    disableButtons(true);
    reset();
  } else if (computerScore === 5) {
    finalscore.textContent = "You lost the game!";
    disableButtons(true);
    reset();
  }
  
}

function reset () {
  const resetBtn = document.createElement("button");
  resetBtn.classList.add("button-reset");
  resetBtn.textContent = "Play Again!";
  finalscore.appendChild(resetBtn);

  resetBtn.addEventListener ('click', () => {
    playerScore = 0;
    computerScore = 0;
    finalscore.textContent = "";
    scoreboardComp.textContent = "";
    scoreboardPlayer.textContent = "";
    disableButtons(false);
    resetBtn.remove();
  })
}