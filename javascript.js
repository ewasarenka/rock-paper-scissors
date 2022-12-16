const basicValues = ['Rock','Paper','Scissors'];
let searchString = ['Rock','Paper','Scissors','Rock'];
searchString = searchString.join('');

function getComputerChoice() {
    //losowanie
    let randomNumber = Math.floor(Math.random()*3);
    return basicValues[randomNumber];
};


function playRound(playerSelection, computerSelection) {
    let combinedValues = computerSelection + playerSelection;
    let result;
    if (playerSelection == computerSelection) { 
        result = 'It\'s a tie!';
    } else if (searchString.search(combinedValues) > -1 ) {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    };
    return result;
    }

    const Div = document.querySelector('.results');
    const Score = document.querySelector('.score');
    const Buttons = document.querySelectorAll('button');
    let computerScore = 0;
    let playerScore = 0;

    Buttons.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            let roundResult = playRound(btn.innerHTML,getComputerChoice());
            Div.textContent = roundResult;
            if(roundResult.search('Won') > -1) {
                playerScore++ ;
            } else if (roundResult.search('Lose') > -1) {
                computerScore++ ;
            }
            Score.textContent = `You ${playerScore} : ${computerScore} Computer`
        }); 
    });
    
   

// function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
/*    function game() {
    for (let i = 0; i < 5; i++) {
   const playerSelection = prompt('Rock, paper or scissors?','rock');
   const computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));
    }} */
/* 
    game(); */