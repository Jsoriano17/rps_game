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

function computerChoice() {
let rpsArr = ['r', 'p', 's'];
let randomNumber = Math.floor(Math.random() * 3);
return rpsArr[randomNumber];
}

function win() {
    playerScore++;
    playerScoreBoard.innerHTML = playerScore;
    console.log(win);
}

function draw() {
    console.log(draw);
}

function lose() {
    computerScore++;
    computerScoreBoard.innerHTML = computerScore;
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
button.addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    let playerScoreBoard = document.getElementById('player').innerHTML = 0;
    let computerScoreBoard = document.getElementById('computer').innerHTML = 0;
});

buttonClick.addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    let playerScoreBoard = document.getElementById('player').innerHTML = 0;
    let computerScoreBoard = document.getElementById('computer').innerHTML = 0;
})
