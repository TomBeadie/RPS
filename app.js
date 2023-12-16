/*-------- Constants --------*/
const choices = ["rock", "paper", "scissors"];

/*-------- Variables (State) --------*/

let playerChoice, computerChoice, msg;

/*-------- Cached Element References --------*/

const resultDisplayEl = document.getElementById("result-display");

/*-------- Event Listeners --------*/

document.getElementById("rock").addEventListener("click", play);
document.getElementById("paper").addEventListener("click", play);
document.getElementById("scissors").addEventListener("click", play);

/*-------- Functions --------*/

function play(event) {
  getPlayerChoice(event);
  getComputerChoice();
  compare();
  render();
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
}

function getPlayerChoice(event) {
  playerChoice = event.target.id;
}

function compare() {
  if (playerChoice === computerChoice) {
    msg = "Tie.";
  } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
    msg = "You win";
  } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
    msg = "You win";
  } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
    msg = "You win";
  } else {
    msg = "You lose";
  }
}

function render() {
  resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`;
}
