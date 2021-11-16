'use strict';

console.log(
  (document.querySelector('.message').textContent = 'Correct Number 🎉')
);
document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
