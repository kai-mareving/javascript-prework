function getMoveName(moveId) {
    if(moveId == 1){
      return 'rock';
    } else if(moveId == 2) {
        return 'paper';
    } else if (moveId == 3) {
        return 'scissors';
    } else {
        printMessage('Move with id ' + moveId + ' is unknown.');
        return 'unknown move';
    }
}

// Game sum-up
function displayResult(computerMove, playerMove) {
    printMessage('I played ' + computerMove + ', and you played ' + playerMove);
  
    if (computerMove == 'rock' && playerMove == 'paper'
        || computerMove == 'paper' && playerMove == 'scissors'
        || computerMove == 'scissors' && playerMove == 'rock') {
        printMessage('You win!');
    } else if (computerMove === playerMove) {
        printMessage('We have a tie');
    } else if (playerMove == 'unknown move' || computerMove == 'unknown move') {
        printMessage('Something went wrong!');
    } else {
        printMessage('This time you loose :(');
    }
}

// Computers turn
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

console.log('randomNumber: ' + randomNumber + '. computerMove: ' + computerMove);

// Players turn
let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');
let playerMove = getMoveName(playerInput);

console.log('playerMove: ' + playerMove);

// Action!
displayResult(computerMove,playerMove);