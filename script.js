let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(human,computer,secret){
    const humanDifference = Math.abs(secret - human)
    const computerDifference = Math.abs(secret - computer)
    return humanDifference <= computerDifference;
}

function updateScore(winner){
    if (winner ==='human'){
        humanScore++;
    }else if (winner ==='computer'){
        computerScore++;
    }
    }

function advanceRound(){
    currentRoundNumber++;
}