let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');

console.log('Player chose: ' + playerInput);

let playerMove = 'unknown move';

if(playerInput == '1'){
  playerMove = 'rock';
} else if (playerInput == '2') {
    playerMove = 'paper';
} else {
    playerMove = 'scissors';
}

printMessage('Your move is: ' + playerMove);