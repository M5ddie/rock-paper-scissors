//button/s
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let resetBtn = document.querySelector("#resetBtn");

//display/s
let userSelected = document.querySelector("#userSelected");
let pcSelected = document.querySelector("#pcSelected");
let result = document.querySelector("#result");
let pcScore = document.querySelector("#pcScore");
let userScore = document.querySelector("#userScore");
pcScore.disabled = true;
userScore.disabled = true;

//eventListener/s
rockBtn.addEventListener("click", getRock);
paperBtn.addEventListener("click", getPaper);
scissorsBtn.addEventListener("click", getScissors);
resetBtn.addEventListener("click", resetScore);

// vs random
let pcHands = ["rock", "paper", "scissors"];

//function/s

// player chooses rock
function getRock() {
    let pcBet = handSelector();
    let playerBet = "rock";

    // userSelected.innerHTML = playerBet;
    userSelected.innerHTML = "<img src='assets/images/" + playerBet + ".png'>";

    if(pcBet == playerBet) {
        result.innerHTML = "DRAW";
    } else if(pcBet == "paper") {
        result.innerHTML = "You lose!";
        let currentScore = pcScore.value;
        pcScore.value = getscore(currentScore);
    } else if(pcBet == "scissors") {
        result.innerHTML = "You won!";
        let currentScore = userScore.value;
        userScore.value = getscore(currentScore);
    } else {
        result.innerHTML = "Play again.";
    }
}

// player chooses paper
function getPaper() {
    let pcBet = handSelector();
    let playerBet = "paper";

    // userSelected.innerHTML = playerBet;
    userSelected.innerHTML = "<img src='assets/images/" + playerBet + ".png'>";

    if(pcBet == playerBet) {
        result.innerHTML = "DRAW";
    } else if(pcBet == "scissors") {
        result.innerHTML = "You lose!";
        let currentScore = pcScore.value;
        pcScore.value = getscore(currentScore);
    } else if(pcBet == "rock") {
        result.innerHTML = "You won!";
        let currentScore = userScore.value;
        userScore.value = getscore(currentScore);
    } else {
        result.innerHTML = "Play again.";
    }
}

// player chooses scissors
function getScissors() {
    let pcBet = handSelector();
    let playerBet = "scissors";

    // userSelected.innerHTML = playerBet;
    userSelected.innerHTML = "<img src='assets/images/" + playerBet + ".png'>";

    if(pcBet == playerBet) {
        result.innerHTML = "DRAW";
    } else if(pcBet == "rock") {
        result.innerHTML = "You lose!";
        let currentScore = pcScore.value;
        pcScore.value = getscore(currentScore);
    } else if(pcBet == "paper") {
        result.innerHTML = "You won!";
        let currentScore = userScore.value;
        userScore.value = getscore(currentScore);
    } else {
        result.innerHTML = "Play again.";
    }
}

// pc hands selector
function handSelector() {
    let ihand = Math.abs(Math.round(Math.random() * pcHands.length - 1));
    // pcSelected.innerHTML = pcHands[ihand];
    pcSelected.innerHTML = "<img src='assets/images/" + pcHands[ihand] + ".png'>";
    return pcHands[ihand];
}

function getscore(currScore) {
    let currentScore = currScore;

    currentScore = parseFloat(currentScore) + 1

    return currentScore;
}

function resetScore() {
    pcScore.value = 0;
    userScore.value = 0;
}