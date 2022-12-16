const basicValues = ['Rock','Paper','Scissors'];

//begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    //losowanie
    let randomNumber = Math.floor(Math.random()*basicValues.length);
    return basicValues[randomNumber];
};

//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
function playRound(playerSelection, computerSelection) {
    let result;
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    if ((playerSelection == basicValues[0] && computerSelection == basicValues[2]) || (playerSelection == basicValues[1] && computerSelection == basicValues[0]) || (playerSelection == basicValues[2] && computerSelection == basicValues[1])) {
        return `You Won! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == computerSelection) {
        result = 'It\'s a tie!';
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    };
    //return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
    return result;
    }

// function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
   function game() {
    for (let i = 0; i < 5; i++) {
   const playerSelection = prompt('Rock, paper or scissors?','rock');
   const computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));
    }}

    game();


