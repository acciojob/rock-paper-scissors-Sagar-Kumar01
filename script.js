//your code here
let game_number = document.getElementById("game-number");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let play_games = document.getElementById("play-games");

let round_result = document.getElementById("round-result");
let computer_choose = document.getElementById("computer-choose");
let rounds_left = document.getElementById("rounds-left");

let user_points = document.getElementById("user-points");
let computer_points = document.getElementById("computer-points");
let game_result = document.getElementById("game-result");

let isPlayTap = null;


window.computer = {
  choice: [0,1,2]
};

function computerBot() {
	const options = ["ROCK", "PAPER", "SCISSORS"];
    return options[window.computer.choice[Math.floor(Math.random() * 3)]];
	
}

play_games.addEventListener("click",()=>{
	isPlayTap = 1;
	rounds_left.textContent = game_number.value;
});




// let userPoint = 0;
// let computerPoint = 0;

// let turnLeft = ;
// let roundresult = ;




