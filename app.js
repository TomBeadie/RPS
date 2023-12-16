
/*-------- Constants --------*/
const choices = ['rock', 'paper', 'scissors'];

/*-------- Variables (State) --------*/

let playerChoice, computerChoice, msg

/*-------- Cached Element References --------*/

const resultDisplayEl = document.getElementById('result-display')

document.getElementById('rock').addEventListener('click', play)
document.getElementById('paper').addEventListener('click', play)
document.getElementById('scissors').addEventListener('click', play)

function play(){

console.log('clicked')

}