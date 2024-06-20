function getHumanChoice(choice){
    if (choice.toLowerCase() === 'rock'){
        return 'Rock';
    }
    else if (choice.toLowerCase() === 'paper'){
        return 'Paper';
    }
    else if (choice.toLowerCase() === 'scissors'){
        return 'Scissors';
    }
    else {
        alert("You did not pick a hand!");
    }
}

function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*(4-1)+1);
    if (compChoice === 1){
        return 'Rock';
    }
    else if (compChoice === 2){
        return 'Paper';
    }
    else if (compChoice === 3){
        return 'Scissors';
    }
}


function playGame(){
    alert("Welcome to Rock, Paper, Scissors! You will be playing five rounds against a computer. Good luck!");
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if ((humanChoice === 'Rock' && computerChoice === 'Paper') || 
            (humanChoice === 'Paper' && computerChoice === 'Scissors') ||
            (humanChoice === 'Scissors' && computerChoice === 'Rock')){
            alert("You lost! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        else if ((humanChoice === 'Paper' && computerChoice === 'Rock') || 
                 (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
                 (humanChoice === 'Rock' && computerChoice === 'Scissors')){
            alert("You won! " + humanChoice + " beats " + computerChoice);
            humanScore++;
    
        }
        else {
            alert("It was a draw! You both picked " + humanChoice);
        }
        alert("You're current score is: \nYou: " + humanScore + "\nComputer: " + computerScore);
    }

    for (let i = 0; i < 5; i++){
        let choice = prompt("Rock, paper, or scissors?");
        const humanSelection = getHumanChoice(choice);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        alert("You're the winner!");
    }
    else if (computerScore > humanScore){
        alert("Boohoo! You lost!");
    }
    else {
        alert("It was a draw! You did good!");
    }
    
}

playGame();