const playerImg = document.querySelector('.player-choice');
const myChoice = document.querySelector('.p-image');
const compChoice = document.querySelector('.p-image');

playerImg.src = localStorage.getItem('optionImg');

if (playerImg.getAttribute('src') === 'images/icon-scissors.svg') {
  myChoice.classList.add('scissors');
}
