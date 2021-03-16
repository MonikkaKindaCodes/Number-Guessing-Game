'use strict';
//Setting Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//Score Changes
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  return message;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //JS will call this function when the event happens. We will not be manually calling this function in the event listener.
  console.log(guess, typeof guess);

  if (!guess || guess < 0 || guess > 20) {
    //You will get zero. Zero is a falsy value. Will give a boolean or false
    displayMessage('Invalid Entry. Please Try Again'); //This changes the text in that area.

    //When Player Wins the Game
  } else if (guess === secretNumber) {

    displayMessage('You have the Secret Number! You Win!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When Guess is Too High or Low
  }
  else if (guess !== secretNumber) {
    if (score > 1) {
      //Added Ternary Operator to get rid of the Too High, Too Low if/else blocks
      displayMessage(guess > secretNumber ? 'Too High, Try Again' : 'Too Low, Try Again');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over. Please Select Again to Restart Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
