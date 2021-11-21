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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🎉🎉 no number!';
    //when players win
  } else if (guess == secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number🎉';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '300rem';
    // when guess is too high
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loss the game😜';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretnumber) {
    document.querySelector('.message').textContent = 'too low🎉';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
