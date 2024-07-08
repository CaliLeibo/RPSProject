let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let humanScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
    let choice = rock.getAttribute("class");
    let humChoice = getHumanChoice(choice);
    
    playRound(humChoice, getComputerChoice());
    
});

paper.addEventListener("click", () => {
    let choice = paper.getAttribute("class");
    let humChoice = getHumanChoice(choice);
    
    playRound(humChoice, getComputerChoice());
    
});

scissors.addEventListener("click", () => {
    let choice = scissors.getAttribute("class");
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

function playRound(humanChoice, computerChoice){
    const round = document.querySelector("#round");
    const results = document.querySelector("#results");
    const final = document.querySelector("#final");

    if ((humanChoice === 'Rock' && computerChoice === 'Paper') || 
        (humanChoice === 'Paper' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Rock')){
        round.textContent = "You lost! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    else if ((humanChoice === 'Paper' && computerChoice === 'Rock') || 
             (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
             (humanChoice === 'Rock' && computerChoice === 'Scissors')){
        round.textContent = "You won! " + humanChoice + " beats " + computerChoice;
        humanScore++;    
    }
    else {
        round.textContent = "It was a draw! You both picked " + humanChoice;
    }
     
    results.textContent = "You: " + humanScore + " Computer: " + computerScore;

    
    if (humanScore === 5){
        final.textContent = "You won! Try again?";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        final.textContent = "You lost. Try again?";
        humanScore = 0;
        computerScore = 0;

    }
    else {
        final.textContent = " ";
    }
    
}
