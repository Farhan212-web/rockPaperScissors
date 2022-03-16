const playerImg = document.querySelector('.player-choice');
const compImg = document.querySelector('.computer-choice');
const myChoice = document.querySelector('.p-image');
const compChoice = document.querySelector('.c-image');

playerImg.src = localStorage.getItem('optionImg');
compImg.src = localStorage.getItem('compImg');

if (playerImg.getAttribute('src') === 'images/icon-scissors.svg') {
  myChoice.classList.add('scissors-choice');
} else if (playerImg.getAttribute('src') === 'images/icon-paper.svg') {
  myChoice.classList.add('paper-choice');
} else {
  myChoice.classList.add('rock-choice');
}

if (compImg.getAttribute('src') === 'images/icon-scissors.svg') {
  compChoice.classList.add('scissors-comp');
} else if (compImg.getAttribute('src') === 'images/icon-paper.svg') {
  compChoice.classList.add('paper-comp');
} else {
  compChoice.classList.add('rock-comp');
}
