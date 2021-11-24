let secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);
let score = 20;
let highscore = 0;

const displayMeassage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMeassage('😍   NO NUMBER ');
    //when players win
  } else if (guess == secretnumber) {
    displayMeassage('Correct Number🎉');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '60rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess != secretnumber) {
    if (secretnumber > guess) {
      console.log('rahul');
      displayMeassage('too low🎉');
      score--;
      console.log(score);
      document.querySelector('.score').textContent = score;
    } else if (secretnumber < guess) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMeassage('Too high🙄 ');
    } else {
      document.querySelector('.message').textContent = 'you loss the game😜';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is high
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#000';
  displayMeassage('Start guessing....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
