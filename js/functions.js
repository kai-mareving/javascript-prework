const printMessage = function(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

const clearMessages = function() {
    document.getElementById('messages').innerHTML = '';
}
  
const getRandomNumber = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }