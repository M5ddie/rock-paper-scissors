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

//options
let gameSet = document.querySelector("#gameSet");

//eventListener/s
rockBtn.addEventListener("click", getRock);
paperBtn.addEventListener("click", getPaper);
scissorsBtn.addEventListener("click", getScissors);
resetBtn.addEventListener("click", resetGame);
gameSet.addEventListener("change", getGameSet);

// vs random
let pcHands = ["rock", "paper", "scissors"];

//function/s
function getGameSet() {
    return gameSet.value;
}

// player chooses rock
function getRock() {
    if(getGameSet() == 0) {
        result.innerHTML = "Please select a Game Set";
    } else {
        let pcBet = handSelector();
        let playerBet = "rock";
    
        // userSelected.innerHTML = playerBet;
        userSelected.innerHTML = "<img src='assets/images/" + playerBet + ".png'>";
    
        if(pcBet == playerBet) {
            result.innerHTML = "DRAW";
        } else if(pcBet == "paper") {
            pcScore.value = getscore(pcScore.value);
            if(pcScore.value == getGameSet()){
                result.innerHTML = "Defeat!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Oops!"
            }
        } else if(pcBet == "scissors") {
            userScore.value = getscore(userScore.value);
            if(userScore.value == getGameSet()){
                result.innerHTML = "VICTORY!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Nice!";
            }
        } else {
            result.innerHTML = "Play again.";
        }
    }
    
}

// player chooses paper
function getPaper() {
    if(getGameSet() == 0) {
        result.innerHTML = "Please select a Game Set";
    } else {
        let pcBet = handSelector();
        let playerBet = "paper";
    
        // userSelected.innerHTML = playerBet;
        userSelected.innerHTML = "<img src='assets/images/" + playerBet + ".png'>";
    
        if(pcBet == playerBet) {
            result.innerHTML = "DRAW";
        } else if(pcBet == "scissors") {
            pcScore.value = getscore(pcScore.value);
            if(pcScore.value == getGameSet()){
                result.innerHTML = "Defeat!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Oops!"
            }
        } else if(pcBet == "rock") {
            userScore.value = getscore(userScore.value);
            if(userScore.value == getGameSet()){
                result.innerHTML = "VICTORY!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Nice!";
            }
        } else {
            result.innerHTML = "Play again.";
        }
    }
}

// player chooses scissors
function getScissors() {
    if(getGameSet() == 0) {
        result.innerHTML = "Please select a Game Set";
    } else {
        let pcBet = handSelector();
        let playerBet = "scissors";

        // userSelected.innerHTML = playerBet;
         userSelected.innerHTML = "<img src='assets/images/" + playerBet + ".png'>";
    
        if(pcBet == playerBet) {
             result.innerHTML = "DRAW";
        } else if(pcBet == "rock") {
            pcScore.value = getscore(pcScore.value);
            if(pcScore.value == getGameSet()){
                result.innerHTML = "Defeat!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Oops!"
            }
        } else if(pcBet == "paper") {
            userScore.value = getscore(userScore.value);
            if(userScore.value == getGameSet()){
                result.innerHTML = "VICTORY!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Nice!";
            }
        } else {
            result.innerHTML = "Play again.";
        }
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

function resetGame() {
    // gameSet.value = 0;
    // pcScore.value = 0;
    // userScore.value = 0;
    // pcSelected.innerHTML = "";
    // userSelected.innerHTML = "";
    // result.innerHTML = "Ready ?";
    window.location.reload();
}

