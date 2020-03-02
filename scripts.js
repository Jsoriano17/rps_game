/*rps game setup
rock beats scissors, paper beats rock, scissors beats paper
score counter for player and computer
image click correlates to rock , paper , or scissors
first to ten wins. 
once a player wins a winner is declared
a reset can be done using the reset button */

//rps game
let score = 0;
let player_Score = 0;
let computer_Score = 0;




















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

