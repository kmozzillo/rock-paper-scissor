function getComputerChoice() {

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    };

    return choice;
};

function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Rock') {
                return 'Tie!';
            }
            if (computerSelection === 'Paper') {
                return 'You Lose! Paper beats rock!';
            }
            else {
                return 'You Win! Rock beats scissors!';
            };
        case 'paper':
            if (computerSelection === 'Rock') {
                return 'You Win! Paper beats rock!';
            }
            if (computerSelection === 'Paper') {
                return 'Tie!';
            }
            else {
                return 'You Lose! Scissor beats paper!';
            }
        case 'scissor':
            if (computerSelection === 'Rock') {
                return 'You lose! Rock beats scissor!';
            }
            if (computerSelection === 'Paper') {
                return 'You win! Scissor beats paper!';
            }
            else {
                return 'Tie';
            }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));