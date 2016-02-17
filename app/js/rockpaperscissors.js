////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.\n")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.    
    if (move === undefined || null){
        move = getInput();
    }

    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === undefined || null){
        move = randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove){
        winner = "tie";
    } else if (playerMove == "rock" && computerMove == "scissors"){
        winner = "player";
    } else if (playerMove == "rock" && computerMove == "paper"){
        winner = "computer"; 
    } else if (playerMove == "paper" && computerMove == "rock"){
        winner = "player";
    } else if (playerMove == "paper" && computerMove == "scissors"){
        winner = "computer";
    } else if (playerMove == "scissors" && computerMove == "rock"){
        winner = "computer";
    } else if (playerMove == "scissors" && computerMove == "paper"){
        winner = "player";
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    var round = 1;
    while(playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();

        var tempWin = getWinner(playerMove, computerMove);
        console.log("*******Round" + round + "******\n The player chose " + playerMove + ". The computer played " + computerMove + ". ")

        if (tempWin === "player"){
            console.log("The player wins this round.\n");
            playerWins += 1;
            
            round++;
            console.log("The current score is Player: " + playerWins + " Computer: " + computerWins + "\n");
        } else if (tempWin === "computer"){
            console.log("The computer wins this round.\n");
            computerWins += 1;
            
            round++;
            console.log("The current score is Player: " + playerWins + " Computer: " + computerWins + "\n");
        } else if (tempWin === "tie"){
            console.log("This round ended in a tie.\n")
            round++;
            console.log("The current score is Player: " + playerWins + " Computer: " + computerWins + "\n");
        }
    }
    if (playerWins || computerWins){
        if (playerWins > computerWins){
            console.log("The final score is Player: " + playerWins + " Computer: " + computerWins + "\n");
            console.log("The player wins the game.  Humanity is saved!");
        } else if (computerWins > playerWins){
            console.log("The final score is Player: " + playerWins + " Computer: " + computerWins + "\n");
            console.log("The computer wins the game.  You were humanity's last hope.")
        }
    }
    /* YOUR CODE HERE */
    
}

