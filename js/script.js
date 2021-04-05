// NEW FUNCTIONS
function getMoveName(MoveId) {
    if(MoveId == 1){
      return 'rock';
    } else if(MoveId == 2) {
        return 'paper';
    } else if (MoveId == 3) {
        return 'scissors';
    } else {
        printMessage('Move with id ' + MoveId + ' is unknown.');
        return 'unknown move';
    }
}
  
function displayResult(ComputerMove, PlayerMove){
    printMessage('I played ' + ComputerMove + ', and you ' + PlayerMove);
  
    if( ComputerMove == 'rock' && PlayerMove == 'paper'){
      printMessage('You win!');
    } else {
      printMessage('This time you loose :(');
    }
}
/******* changes are not yet staged in git       */  


// Computers turn
let randomNumber = Math.floor(Math.random() * 3 + 1);

//console.log('Drawn number is: ' + randomNumber);

let computerMove = getMoveName(getRandomNumber);
//let computerMove = 'unknown move';
console.log(computerMove);

/* if(randomNumber == 1){
  computerMove = 'rock';
} else if (randomNumber == 2) {
    computerMove = 'paper';
} else if (randomNumber == 3) {
    computerMove = 'scissors';
} else {
    printMessage('Something went wrong');
}

printMessage('My move is: ' + computerMove); */

// Players turn
/* let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');

console.log('Player chose: ' + playerInput);

let playerMove = 'unknown move';

if(playerInput == '1'){
  playerMove = 'rock';
} else if (playerInput == '2') {
    playerMove = 'paper';
} else if (playerInput == '3') {
    playerMove = 'scissors';
} else {
    printMessage('Something went wrong');
}

printMessage('Your move is: ' + playerMove); */

// Game sum-up
/* if (computerMove == 'rock' && playerMove == 'paper' || computerMove == 'paper' && playerMove == 'scissors' || computerMove == 'scissors' && playerMove == 'rock') {
    printMessage('You win!');
} else if (computerMove === playerMove && playerMove !== 'unknown move' && computerMove !== 'unknown move') {
    printMessage('We have a tie');
} else if (computerMove == 'unknown move' || playerMove == 'unknown move') {
    printMessage('Something went wrong');
} else {
    printMessage('Computer won. You loose. We are sorry. Try again!');
} */