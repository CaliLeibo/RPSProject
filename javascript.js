let rock = document.querySelector('.rock')

rock.addEventListener("click", () => {
    let choice = rock.getAttribute("class");
    let humChoice = getHumanChoice(choice);
    
    playRound(humChoice, getComputerChoice());
});
    


function getHumanChoice(choice){
    if (choice.toLowerCase() === 'rock'){
        return 'Rock';
    }
    else if (choice.toLowerCase() === 'paper'){
        return 'Paper';
    }
    else if (choice.toLowerCase() === 'scissors'){
        function playGame(){
            let humanScore = 0;
            let computerScore = 0;
        return 'Scissors';
        }
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