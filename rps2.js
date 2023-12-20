let computerChoice;
let count = 0;
let playerChoice = prompt("choose?");
let getComputerChoice =  Math.random() * 100;
if (getComputerChoice >= 66) {
    computerChoice = "rock";
}
else if (getComputerChoice <= 33) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}
function rpsGame(playerChoice, computerChoice) {

    for (let i = 0; i <= 5; i++) {
let result;
   if (playerChoice === computerChoice) { 
        result = "its a tie";
        return result;
   }
   else if (playerChoice === "scissors" && computerChoice === "paper") {
        result = "You win";
        return result;
        count++;
    }
    else if (playerChoice ==="rock" && computerChoice === "scissors") {
        result = "you win";
        return result;
        count++;
    }
    else if (playerChoice === "paper" && computerChoice ==="rock") {
        result = "you win";
        return result;
        count++;
    }
    else if (playerChoice === "paper" && computerChoice ==="scissors") {
        result = "You lose";
        return result;
        count--;
    }
    else if (playerChoice ==="rock" && computerChoice ==="paper") {
        result = "you lose";
        return result;
        count--;
    }
    else if (playerChoice === "scissors" && computerChoice ==="rock") {
        result = "you lose";
        return result;
        count--;
    }
}
}
function game() {
    let count = 0; 
  
    for (let i = 0; i < 5; i++) {
      let match = rpsGame(playerChoice, computerChoice);
  
      if (match === "you win") {
        count++;
        prompt(match);
      } else if (match === "you lose")) {
        count--;
        prompt(match);
      }
  
      if (count > 0) {
        return alert("Computer wins!");
      } else if (count < 0) {
        return alert("Player wins!");
      }
    }
  }
  
  game();





console.log(playerChoice);
console.log(computerChoice);
console.log(rpsGame(playerChoice, computerChoice))

function game() {

for (let i = 0; i <= 5; i++) {

 rpsGame(playerChoice, computerChoice);

}
}
console.log(game());