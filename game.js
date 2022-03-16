const playerImg = document.querySelector('.player-choice');
const compImg = document.querySelector('.computer-choice');
const myChoice = document.querySelector('.p-image');
const compChoice = document.querySelector('.c-image');
const scoreCount = document.querySelector('.current-score');
const playAgain = document.querySelector('.play-again');

playerImg.src = localStorage.getItem('optionImg');
compImg.src = localStorage.getItem('compImg');

const num = parseInt(scoreCount.textContent, 10);

function win() {
  const playButton = document.createElement('button');
  const winText = document.createElement('p');
}

if (playerImg.getAttribute('src') === 'images/icon-scissors.svg') {
  myChoice.classList.add('scissors-choice');

  if (compImg.getAttribute('src') === 'images/icon-paper.svg') {
    scoreCount.textContent = num + 1;
  } else {
    scoreCount.textContent = num - 1;
  }
} else if (playerImg.getAttribute('src') === 'images/icon-paper.svg') {
  myChoice.classList.add('paper-choice');

  if (compImg.getAttribute('src') === 'images/icon-rock.svg') {
    scoreCount.textContent = num + 1;
  } else {
    scoreCount.textContent = num - 1;
  }
} else {
  myChoice.classList.add('rock-choice');

  if (compImg.getAttribute('src') === 'images/icon-scissors.svg') {
    scoreCount.textContent = num + 1;
  } else {
    scoreCount.textContent = num - 1;
  }
}

if (compImg.getAttribute('src') === 'images/icon-scissors.svg') {
  compChoice.classList.add('scissors-comp');
} else if (compImg.getAttribute('src') === 'images/icon-paper.svg') {
  compChoice.classList.add('paper-comp');
} else {
  compChoice.classList.add('rock-comp');
}
