let playerScore = 0;
let computerScore = 0;
let result = '';

const gameDiv = document.querySelector('#gameDiv');
const scoreDiv = document.createElement('div');
const choicesDiv = document.createElement('div');
const rockDiv = document.createElement('div');
const paperDiv = document.createElement('div');
const scissorsDiv = document.createElement('div');
const resultsDiv = document.createElement('div');

scoreDiv.textContent = `Your Score: ${playerScore}          Computer Score: ${computerScore}`;
rockDiv.textContent = 'Rock';
paperDiv.textContent = 'Paper';
scissorsDiv.textContent = 'Scissors';

gameDiv.appendChild(scoreDiv);
gameDiv.appendChild(choicesDiv);
gameDiv.appendChild(resultsDiv);
choicesDiv.append(rockDiv, paperDiv, scissorsDiv);

rockDiv.classList.add('choice');
paperDiv.classList.add('choice');
scissorsDiv.classList.add('choice');
choicesDiv.classList.add('choices');
resultsDiv.classList.add('results');
scoreDiv.classList.add('score');


rockDiv.style.backgroundColor = 'hsla(23, 69%, 50%, 1)';
scissorsDiv.style.backgroundColor = 'silver';


// Event Listening

rockDiv.addEventListener('click', () => {
    playRound('rock', computerPlay());
    scoring();
});

paperDiv.addEventListener('click', () => {
    playRound('paper', computerPlay());
    scoring();
});

scissorsDiv.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    scoring();
});


function scoring () {
    resultsDiv.textContent = result;
    if (result === 'tie') {scoreDiv.textContent = `Your Score: ${playerScore}    Computer Score: ${computerScore}`; return;};
    (result === 'win') ? playerScore++ : computerScore++
    (playerScore >= 5) ? scoreDiv.textContent = 'You Win!': scoreDiv.textContent = `Your Score: ${playerScore}    Computer Score: ${computerScore}`;
    if (computerScore >= 5) {scoreDiv.textContent = 'You Lose!';}
};

//computerPlay  Need to create a function that will randomly return Rock Paper or Scissors.  
function computerPlay () {
    // computerChoice returns a choice of 'rock' 'paper' or 'scissors'
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'paper';
    } else return 'scissors';
};

//playRound  Create a function that takes the input playerSelection and computerSelection and determines a winner or if the round tied.
function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result = 'tie';
    } else {
        ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) ? result ='lose' : result ='win';
    }
    return result;

};