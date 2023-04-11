//button/s
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let resetBtn = document.querySelector("#resetBtn");

//eventListener/s
rockBtn.addEventListener("click", getRock);
paperBtn.addEventListener("click", getPaper);
scissorsBtn.addEventListener("click", getScissors);
resetBtn.addEventListener("click", resetGame);

//display/s
let userSelected = document.querySelector("#userSelected");
let pcSelected = document.querySelector("#pcSelected");
let result = document.querySelector("#result");
let pcScore = document.querySelector("#pcScore");
let userScore = document.querySelector("#userScore");
pcScore.disabled = true;
userScore.disabled = true;

// elements
let matchList = document.querySelector("#matchList");
let tableList = document.querySelector("#tableList");

// options
let gameSet = document.querySelector("#gameSet");

// array
let pcHands = ["rock", "paper", "scissors"];

// pc hands selector
function handSelector() {
    let ihand = Math.abs(Math.round(Math.random() * pcHands.length - 1));
    // pcSelected.innerHTML = pcHands[ihand];
    pcSelected.innerHTML = "<img src='assets/images/" + pcHands[ihand] + ".png'>";
    return pcHands[ihand];
}
let colorStyle = "";
// player chooses rock
function getRock() {
    if(gameSet.value == 0) {
        result.innerHTML = "Please select a Game Set";
    } else {
        let pcBet = handSelector();
        let playerBet = "rock";

        // userSelected.innerHTML = playerBet;
        userSelected.innerHTML = "<img src='assets/images/" + playerBet + ".png'>";
    
        if(pcBet == playerBet) {
            result.innerHTML = "DRAW";
            colorStyle = "aliceblue";
        } else if(pcBet == "paper") {
            pcScore.value = getscore(pcScore.value);
            if(pcScore.value == gameSet.value){
                result.innerHTML = "Defeat!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Oops!"
            }
            colorStyle = "#ED2B2A";
        } else if(pcBet == "scissors") {
            userScore.value = getscore(userScore.value);
            if(userScore.value == gameSet.value){
                result.innerHTML = "VICTORY!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Nice!";
            }
            colorStyle = "yellow";
        } else {
            result.innerHTML = "Play again.";
        }

        recordPick(pcBet, playerBet, colorStyle);
    }
    
}

// player chooses paper
function getPaper() {
    if(gameSet.value == 0) {
        result.innerHTML = "Please select a Game Set";
    } else {
        let pcBet = handSelector();
        let playerBet = "paper";
    
        // userSelected.innerHTML = playerBet;
        userSelected.innerHTML = "<img src='assets/images/" + playerBet + ".png'>";
    
        if(pcBet == playerBet) {
            result.innerHTML = "DRAW";
            colorStyle = "aliceblue";
        } else if(pcBet == "scissors") {
            pcScore.value = getscore(pcScore.value);
            if(pcScore.value == gameSet.value){
                result.innerHTML = "Defeat!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Oops!"
            }
            colorStyle = "#ED2B2A";
        } else if(pcBet == "rock") {
            userScore.value = getscore(userScore.value);
            if(userScore.value == gameSet.value){
                result.innerHTML = "VICTORY!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Nice!";
            }
            colorStyle = "yellow";
        } else {
            result.innerHTML = "Play again.";
        }

        recordPick(pcBet, playerBet, colorStyle);
    }
}

// player chooses scissors
function getScissors() {
    if(gameSet.value == 0) {
        result.innerHTML = "Please select a Game Set";
    } else {
        let pcBet = handSelector();
        let playerBet = "scissors";

        // userSelected.innerHTML = playerBet;
         userSelected.innerHTML = "<img src='assets/images/" + playerBet + ".png'>";
    
        if(pcBet == playerBet) {
             result.innerHTML = "DRAW";
             colorStyle = "aliceblue";
        } else if(pcBet == "rock") {
            pcScore.value = getscore(pcScore.value);
            if(pcScore.value == gameSet.value){
                result.innerHTML = "Defeat!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Oops!"
            }
            colorStyle = "#ED2B2A";
        } else if(pcBet == "paper") {
            userScore.value = getscore(userScore.value);
            if(userScore.value == gameSet.value){
                result.innerHTML = "VICTORY!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
            } else {
                result.innerHTML = "Nice!";
            }
            colorStyle = "yellow";
        } else {
            result.innerHTML = "Play again.";
        }

        recordPick(pcBet, playerBet, colorStyle);
    }
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

// match history
// function recordPick(pcPicked, userPicked) {
//     let picked = document.createElement("li");
//     picked.textContent = pcPicked + " vs " + userPicked;
//     matchList.appendChild(picked);
// }

// function recordPick(pcPicked, userPicked) {
//     let picked = document.createElement("tr");
//     picked.innerHTML = "<td>" + pcPicked + "</td><td>vs</td><td>" + userPicked + "</td>";
//     tableList.appendChild(picked);
// }

function recordPick(pcPicked, userPicked, colorStyle) {
    let row = document.createElement("tr");
    let tdpc = document.createElement("td");
    let tdvs = document.createElement("td");
    let tduser = document.createElement("td");
    // row.innerHTML = td;
    tdpc.textContent = pcPicked;
    // tdpc.style.color = "red";
    tdvs.textContent = "vs";
    tduser.textContent = userPicked;
    tduser.style.color = colorStyle;
    row.appendChild(tdpc);
    row.appendChild(tdvs);
    row.appendChild(tduser);
    tableList.appendChild(row);
}