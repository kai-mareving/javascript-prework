'use strict';

function playGame(playerInput) {
    clearMessages();

    const getMoveName = function (moveId) {
        if (moveId == 1) {
            return 'rock';
        } else if (moveId == 2) {
            return 'paper';
        } else if (moveId == 3) {
            return 'scissors';
        } else {
            printMessage('Move with id ' + moveId + ' is unknown.<br><br>');
            return 'unknown move';
        }
    };

    const displayResult = function(computerMove, playerMove) {
        printMessage('Computer played: ' + computerMove + '<br> You played: ' + playerMove + '.' + '<br><br>');
  
        if (computerMove == 'rock' && playerMove == 'paper'
            || computerMove == 'paper' && playerMove == 'scissors'
            || computerMove == 'scissors' && playerMove == 'rock') {
            printMessage('You win!');
        } else if (computerMove === playerMove) {
            printMessage('We have a tie!');
        } else if (playerMove == 'unknown move' || computerMove == 'unknown move') {
            printMessage('Something went wrong!');
        } else {
            printMessage('This time you loose :(');
        }
    }

    // Computers turn
    let randomNumber = getRandomNumber(1, 3);
    // Math.floor(Math.random() * 3 + 1);  -- old version. Leaving for reference
    let computerMove = getMoveName(randomNumber);
    // Players turn
    let playerMove = getMoveName(playerInput);

    console.log('randomNumber: ' + randomNumber + '. computerMove: ' + computerMove);
    console.log('playerInput: ' + playerInput + '. playerMove: ' + playerMove);

    displayResult(computerMove, playerMove);
}

// Action!
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });