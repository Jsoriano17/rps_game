/*rps game setup
rock beats scissors, paper beats rock, scissors beats paper
score counter for player and computer
image click correlates to rock , paper , or scissors
first to ten wins. 
once a player wins a winner is declared
a reset can be done using the reset button */

//rps game
let score = 0;
let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('.r')
const paper = document.querySelector('.p')
const scissors = document.querySelector('.s')
const playerScoreBoard = document.getElementById('player')
const computerScoreBoard = document.getElementById('computer')
const winMessage = document.querySelector('.win')
const loseMessage = document.querySelector('.lose')
const drawMessage = document.querySelector('.draw')

function computerChoice() {
let rpsArr = ['r', 'p', 's'];
let randomNumber = Math.floor(Math.random() * 3);
return rpsArr[randomNumber];
}

function win() {
    playerScore++;
    playerScoreBoard.innerHTML = playerScore;
    winMessage.style.display = 'block'
    loseMessage.style.display = 'none'
    drawMessage.style.display = 'none'
    console.log(win);
}

function draw() {
    winMessage.style.display = 'none'
    loseMessage.style.display = 'none'
    drawMessage.style.display = 'block'
    console.log(draw);
}

function lose() {
    computerScore++;
    computerScoreBoard.innerHTML = computerScore;
    winMessage.style.display = 'none'
    loseMessage.style.display = 'block' 
    drawMessage.style.display = 'none'
    console.log(lose);

}

function game(userChoice) {
    const getComputerChoice = computerChoice();
    switch (userChoice + getComputerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
           win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
          lose();
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw();
            break;
    }
};

function main() {

    rockChoice = rock.addEventListener('click', function() {
        game('r')
    });

    paperChoice = paper.addEventListener('click', function() {
        game('p')
    });

    scissorsChoice = scissors.addEventListener('click', function() {
        game('s')
    });
  };


main();


//button hover
let button = document.querySelector('.button')
let buttonClick = document.querySelector('.button_click')

button.addEventListener('mouseover', function () {
    button.style.display = 'none';
    buttonClick.style.display = 'block'
});

buttonClick.addEventListener('mouseout', function () {
    buttonClick.style.display = 'none';
    button.style.display = 'block';
})

//reset

buttonClick.addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    winMessage.style.display = 'none'
    loseMessage.style.display = 'none'
    drawMessage.style.display = 'none'
    let playerScoreBoard = document.getElementById('player').innerHTML = 0;
    let computerScoreBoard = document.getElementById('computer').innerHTML = 0;
})
