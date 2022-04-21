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

scoreDiv.textContent = 'Your Score: ' + playerScore + `   Computer Score: ` + computerScore;
rockDiv.textContent = 'rock';
paperDiv.textContent = 'paper';
scissorsDiv.textContent = 'scissors';


gameDiv.appendChild(scoreDiv);
gameDiv.appendChild(choicesDiv);
gameDiv.appendChild(resultsDiv);
choicesDiv.append(rockDiv, paperDiv, scissorsDiv);




// Game Styling
gameDiv.style.maxWidth = '800px';
gameDiv.style.justifyContent = 'center';

// Score Styling
scoreDiv.style.display = 'flex';
scoreDiv.style.justifyContent = 'center';

// Choice Styling
choicesDiv.style.display = 'flex';
choicesDiv.style.paddingTop = '20px';
choicesDiv.style.paddingLeft = '60px';
choicesDiv.style.paddingRight = '60px';
choicesDiv.style.justifyContent = 'space-between';


rockDiv.style.cursor = 'default';
paperDiv.style.cursor = 'default';
scissorsDiv.style.cursor = 'default';

// choicesDiv.array.forEach(element => {
//     element.style.cursor = 'default';
// });

// Results Styling
resultsDiv.style.display = 'flex';
resultsDiv.style.paddingTop = '20px';
resultsDiv.style.paddingLeft = '60px';
resultsDiv.style.paddingRight = '60px';
resultsDiv.style.justifyContent = 'center';

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
    if (result === 'tie') {scoreDiv.textContent = 'Your Score: ' + playerScore + `   Computer Score: ` + computerScore; return;};
    (result === 'win') ? playerScore++ : computerScore++
    (playerScore >= 5) ? scoreDiv.textContent = 'You Win!': scoreDiv.textContent = 'Your Score: ' + playerScore + `   Computer Score: ` + computerScore;
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

//game() Create a function that calls playRound 5 times and keeps score and reports a winner at the end.

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Please enter Rock, Paper or Scissors', 'rock').toLowerCase();
//         const computerSelection = computerPlay();

//         let result = playRound(playerSelection, computerSelection);
       
//         if (result === 'win') {
//             playerScore += 1;
//         } else if (result === 'lose') {
//             computerScore += 1;
//         } else 
//             playerScore += 0;
//             computerScore += 0;
//     }
//     console.log(playerScore);
//     console.log(computerScore);
   
//     playerScore > computerScore ? console.log('You Win') : console.log('You Lose');
// };



// game();
