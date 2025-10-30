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

let isPlayTap = false;

let userPoint = 0;
let computerPoint = 0;

let turnLeft = 0;
let roundresult = 0;

window.computer = {
  Choose: [0, 1, 2],
};

function computerBot() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  return options[window.computer.Choose[Math.floor(Math.random() * 3)]];
}

play_games.addEventListener("click", () => {
  isPlayTap = true;
  turnLeft = Number(game_number.value);
  rounds_left.textContent = game_number.value;
});

paper.addEventListener("click", () => {
  if (isPlayTap && turnLeft != 0) {
    let bot = computerBot();
    computer_choose.textContent = bot;

    if (bot == paper.value) {
      round_result.textContent = "TIE";
    } else if (paper.value === "PAPER" && bot === "ROCK") 
	{
      round_result.textContent = "You WIN! 🎉";
    } else {
      round_result.textContent = "You LOSE 😢";
    }

    turnLeft -= 1;
    rounds_left.textContent = turnLeft;
  }
});

rock.addEventListener("click", () => {
  if (isPlayTap && turnLeft != 0) {
    let bot = computerBot();
    computer_choose.textContent = bot;

   if (bot == rock.value) {
      round_result.textContent = "TIE";
    } else if (rock.value === "ROCK" && bot === "SCISSORS") 
	{
      round_result.textContent = "You WIN! 🎉";
    } else {
      round_result.textContent = "You LOSE 😢";
    }

    turnLeft -= 1;
    rounds_left.textContent = turnLeft;
  }
});

scissor.addEventListener("click", () => {
  if (isPlayTap && turnLeft != 0) {
    let bot = computerBot();
    computer_choose.textContent = bot;

    if (bot == scissor.value) {
      round_result.textContent = "TIE";
    } else if (
      (scissor.value === "SCISSORS" && bot === "PAPER")
    ) {
      round_result.textContent = "You WIN! 🎉";
    } else {
      round_result.textContent = "You LOSE 😢";
    }

    turnLeft -= 1;
    rounds_left.textContent = turnLeft;
  }
});