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

function play() {
  console.log("clicked");
  getComputerChoice();
  getPlayerChoice();
  compare();
  render();
}


function getComputerChoice(){
   const randomIndex = Math.floor(Math.random() * choices.length)
   console.log(randomIndex)
}

function getPlayerChoice(){

}

function compare(){

}

function render(){
    
}