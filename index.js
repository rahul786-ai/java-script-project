// 'use strict';

// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number 🎉')
// );
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretnumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🎉🎉 no number!';
  } else if (guess == secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number🎉';
  } else if (guess > secretnumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loss the game😜';
    }
  } else if (guess < secretnumber) {
    document.querySelector('.message').textContent = 'too low🎉';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
