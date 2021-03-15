'use strict';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 45;

// //Lines above are examples of DOM manipulation.

//Setting Secret Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//Score Changes
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //JS will call this function when the event happens. We will not be manually calling this function in the event listener.
  console.log(guess, typeof guess);

  if (!guess) {
    //You will get zero. Zero is a falsy value. Will give a boolean or false
    document.querySelector('.message').textContent =
      'Invalid Entry. Please Try Again'; //This changes the text in that area.
  } else if (guess === secretNumber && guess <= 20) {
    document.querySelector('.message').textContent =
      'You have the Secret Number! You Win!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber && guess <= 20) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High. Try Again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Game Over. Please Refresh to Restart Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber && guess <= 20) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low. Try Again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Game Over. Please Refresh to Restart Game';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('.message').textContent =
      'Please Enter A Number between 1 and 20';
  }
});
