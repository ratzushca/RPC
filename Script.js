


var Rock = document.querySelector('.Rock')
var Paper = document.querySelector('.Paper')
var Scissors = document.querySelector('.Scissors')


var You = document.querySelector('#You')
var Computer = document.querySelector('#Computer')
var Game_Result = document.querySelector('#Game_Result')
var user_Win = document.getElementById('#user_Win')
var computer_Win = document.getElementById('#computer_Win')

var record=[];





    Rock.addEventListener('click', () => {
    if_pick_rock(computerChoice());
    });

    Paper.addEventListener('click', () => {
    if_pick_paper(computerChoice());
    });

    Scissors.addEventListener('click', () => {
    if_pick_scissors(computerChoice());
    });

    
    var computerChoice = () => {
    var options = ['Rock','Paper','Scissors'];
    var randomChoice = Math.floor(Math.random() * 3);
    var computerChoice = options[randomChoice];
    return computerChoice;

    };

// paper beats Rock
// paper looses to scisors
// scissors lose to rock



function if_pick_rock(computerChoice) {
    You.textContent = 'You picked: Rock';
    Computer.textContent = `Computer picked: ${computerChoice}`;
    switch (computerChoice) {
        case 'Scissors':
            Game_Result.textContent = 'You won!';
            record.push("Win");
            break;
        case 'Paper':
            Game_Result.textContent = 'You lose!';
            record.push("Lose");
            break;
        default:
            Game_Result.textContent = 'Its a tie!';

        }
    };


function if_pick_paper(computerChoice) {
    You.textContent = 'You picked: Paper';
    Computer.textContent = `Computer picked: ${computerChoice}`;
    switch (computerChoice) {
        case 'Rock':
            Game_Result.textContent = 'You won!';
            record.push("Win");
            break;
        case 'Scissors':
            Game_Result.textContent = 'You lose!';
            record.push("Lose");
            break;
        default:
            Game_Result.textContent = 'Its a tie!';
        }
    };

function if_pick_scissors(computerChoice) {
    You.textContent = 'You picked: Scissors!';
    Computer.textContent = `Computer picked: ${computerChoice}`;
    switch (computerChoice) {
        case 'Rock':
            Game_Result.textContent = 'You lose!';
            record.push("Lose");
            
            break;
        case 'Paper':
            Game_Result.textContent = 'You won!';
            record.push("Win");
        
            break;
        default:
            Game_Result.textContent = 'Its a tie!';
        }
   
    };

document.getElementById("user_Win").innerHTML = "You lost " + record.filter(x => x=="Lose").length + " times.</p><p>You won " + record.filter(x => x=="Win").length + " times.";








