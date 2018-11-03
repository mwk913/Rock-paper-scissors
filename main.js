let playerScore = 0;
let cpuScore = 0; 
//ALLOWS PLAYER TO CLICK CHOICE
const buttons = document.querySelectorAll('button');
buttons.forEach ((button) => {
  button.addEventListener('click', (e) => {
    let playerSelection = ['rock', 'paper','scissors'];
    let computerSelection = computerPlay();
    if (button.className == 'button1'){
      playRound(playerSelection[0], computerSelection); //PLAYER PLAYS ROCK
    }else if (button.className == 'button2') {
      playRound(playerSelection[1], computerSelection); //PLAYER PLAYS PAPER
    }else if (button.className == 'button3') {
      playRound(playerSelection[2], computerSelection); //PLAYER PLAYS SCISSORS
    }
  })
})
//GET PLAYER SCORE AND COUNT ON WINS
function countPlayerScore() {
   document.getElementById('score1').innerHTML = "Player: " + ++playerScore + " Wins";
   if (playerScore === 5) {
       playerWins();
   }
}
//GET CPU SCORE AND COUNT ON WINS
function countCpuScore() {
    document.getElementById('score2').innerHTML = "CPU: " + ++cpuScore + " Wins";
    if (cpuScore === 5) {  
        cpuWins(); 
   }
}
//PLAYER WINS
function playerWins(){
    alert('You won the game, fantastic!');
    resetGame();
}
// COMPUTER WINS 
function cpuWins(){
    alert('The computer won the game, better luck next time...');
    resetGame();
}
// COMPUTER CHOOSES RANDOM CHOICE
   function computerPlay() {
      let randomNum = Math.floor(Math.random()*3);
      let rock = "rock";
      let paper = "paper";
      let scissors = "scissors";
    
      if (randomNum == 0) {
        return rock;
      }else if (randomNum == 1){
        return paper;
      }else if (randomNum == 2){
        return scissors;
  }
}
// PLAYS A SINGLE ROUND OF THE GAME
function playRound(playerSelection,computerSelection) {
     switch (true){
        case playerSelection == computerSelection :
            document.getElementById('roundResultText').innerHTML = "Game is a tie!!!" // Game is a tie
            break;
        case playerSelection == "rock" && computerSelection == "paper" :
            document.getElementById('roundResultText').innerHTML = 'You lose, computer chooses paper and that beats rock!'; // CPU Win- Paper beats Rock
            countCpuScore();
            break;
        case playerSelection == "paper" && computerSelection == "scissors" :
            document.getElementById('roundResultText').innerHTML = 'You lose, computer chooses scissors and that beats paper!'; // CPU Win - Scissors beats Paper
            countCpuScore();
            break;
        case playerSelection == "scissors" && computerSelection == "rock" : 
            document.getElementById('roundResultText').innerHTML = 'You lose, computer chooses rock and that beats scissors!'; // CPU Win - Rock beats Scissors
            countCpuScore();
            break; 
        case playerSelection == "paper" && computerSelection == "rock" :
            document.getElementById('roundResultText').innerHTML = 'You win, paper beats rock!'; // Player Win - Paper beats Rock
            countPlayerScore();
            break;
        case playerSelection == "rock" && computerSelection == "scissors" :
            document.getElementById('roundResultText').innerHTML ='You win, rock beats scissors!'; // Player Win - Rock beats Scissors
            countPlayerScore();
            break;
        case playerSelection == "scissors" && computerSelection == "paper" :
            document.getElementById('roundResultText').innerHTML = 'You win, scissors beats paper!';// Player Win - Scissors beats Paper
            countPlayerScore();
            break;
        default :
            alert('Something went wrong...Please refresh the page using the F5 key.')
            break;           
  }
}
// RESET GAME
function resetGame(){
    location.reload();
}
   


