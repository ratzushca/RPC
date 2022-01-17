


const Rock = document.querySelector('.Rock')
const Paper = document.querySelector('.Paper')
const Scissors = document.querySelector('.Scissors')


const You = document.querySelector('#You')
const Computer = document.querySelector('#Computer')
const Game_Result = document.querySelector('#Game_Result')
const computer_Win = document.getElementById('computer_Win')
const userWin = document.getElementById('user_Win')
const userLose = document.getElementById('user_Lose')
const userTies = document.getElementById('total_Ties')

let wins = 0;
let lose = 0;
let tie = 0;

Rock.addEventListener('click', () => {
ifPickRock(computerChoice());
});

Paper.addEventListener('click', () => {
ifPickPaper(computerChoice());
});

Scissors.addEventListener('click', () => {
ifPickScissors(computerChoice());
});

    
const computerChoice = () => {
    const options = ['Rock','Paper','Scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    const computerChoice = options[randomChoice];
    return computerChoice;

    };

// paper beats Rock
// paper looses to scisors
// scissors lose to rock



function ifPickRock(computerChoice) {
    You.textContent = 'You picked: Rock';
    Computer.textContent = `Computer picked: ${computerChoice}`;
    switch (computerChoice) {
        case 'Scissors':
            Game_Result.textContent = 'You won!';
            wins++;
            userWin.textContent = `# of Wins: ${wins}`;
            break;
        case 'Paper':
            Game_Result.textContent = 'You lose!';
            lose++;
            userLose.textContent = `# of Loses: ${lose}`;
            break;
        default:
            Game_Result.textContent = 'Its a tie!';
            tie++;
            userTies.textContent = `# of Ties: ${tie}`;

        }
    };


function ifPickPaper(computerChoice) {
    You.textContent = 'You picked: Paper';
    Computer.textContent = `Computer picked: ${computerChoice}`;
    switch (computerChoice) {
        case 'Rock':
            Game_Result.textContent = 'You won!';
            wins++;
            userWin.textContent = `# of Wins: ${wins}`;
            break;
        case 'Scissors':
            Game_Result.textContent = 'You lose!';
            lose++;
            userLose.textContent = `# of Loses: ${lose}`;
            break;
        default:
            Game_Result.textContent = 'Its a tie!';
            tie++;
            userTies.textContent = `# of Ties: ${tie}`;
        }
    };

function ifPickScissors(computerChoice) {
    You.textContent = 'You picked: Scissors!';
    Computer.textContent = `Computer picked: ${computerChoice}`;
    switch (computerChoice) {
        case 'Rock':
            Game_Result.textContent = 'You lose!'; 
            lose++;
            userLose.textContent = `# of Loses: ${lose}`;       
            break;
        case 'Paper':
            Game_Result.textContent = 'You won!';
            wins++;
            userWin.textContent = `# of Wins: ${wins}`;
            break;
        default:
            Game_Result.textContent = 'Its a tie!';
            tie++;
            userTies.textContent = `# of Ties: ${tie}`;
        }
   
    };









