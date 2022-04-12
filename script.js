

//computerPlay  Need to create a function that will randomly return Rock Paper or Scissors.  

function computerPlay () {
    // computerChoice returns a value from 1-3
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'paper';
    } else return 'scissors';

}

//playRound  Create a function that takes the input playerSelection and computerSelection and determines a winner or if the round tied.

function playRound (playerSelection, computerSelection) {
    let result = '';
    if (playerSelection === computerSelection) {
        result += 'tie';
    } else {
        ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) ? result +='lose' : result +='win';

    }
    console.log(result);
    return result;

}

//game() Create a function that calls playRound 5 times and keeps score and reports a winner at the end.

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please enter Rock, Paper or Scissors', 'rock').toLowerCase();
        const computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);
       
        if (result === 'win') {
            playerScore += 1;
        } else if (result === 'lose') {
            computerScore += 1;
        } else 
            playerScore += 0;
            computerScore += 0;
    }
    console.log(playerScore);
    console.log(computerScore);
   
    playerScore > computerScore ? console.log('You Win') : console.log('You Lose');
}

game();
