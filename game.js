const playerImg = document.querySelector('.player-choice');
const compImg = document.querySelector('.computer-choice');
const myChoice = document.querySelector('.p-image');
const compChoice = document.querySelector('.c-image');
const scoreCount = document.querySelector('.current-score');
const playAgain = document.querySelector('.play-again');

playerImg.src = localStorage.getItem('optionImg');
compImg.src = localStorage.getItem('compImg');

let num = 0;

function win() {
  const playButton = document.createElement('button');
  const winText = document.createElement('p');
  const divText = document.createElement('div');
  const homePage = document.createElement('a');

  divText.classList.add('winText');
  winText.classList.add('whiteText');
  playButton.classList.add('reset-button');

  winText.textContent = 'YOU WIN';
  playButton.textContent = 'PLAY AGAIN';
  homePage.href = 'index.html';

  divText.appendChild(winText);
  homePage.appendChild(playButton);

  divText.appendChild(homePage);
  playAgain.appendChild(divText);
}

function lose() {
  const playButton = document.createElement('button');
  const winText = document.createElement('p');
  const divText = document.createElement('div');
  const homePage = document.createElement('a');

  divText.classList.add('winText');
  winText.classList.add('whiteText');
  playButton.classList.add('reset-button');

  winText.textContent = 'YOU LOSE';
  playButton.textContent = 'PLAY AGAIN';
  homePage.href = 'index.html';

  divText.appendChild(winText);
  homePage.appendChild(playButton);

  divText.appendChild(homePage);
  playAgain.appendChild(divText);
}

if (playerImg.getAttribute('src') === 'images/icon-scissors.svg') {
  myChoice.classList.add('scissors-choice');

  if (compImg.getAttribute('src') === 'images/icon-paper.svg') {
    num += 1;
    scoreCount.textContent = num + 1;
    win();
  } else {
    num -= 1;
    scoreCount.textContent = num - 1;
    lose();
  }
} else if (playerImg.getAttribute('src') === 'images/icon-paper.svg') {
  myChoice.classList.add('paper-choice');

  if (compImg.getAttribute('src') === 'images/icon-rock.svg') {
    num += 1;
    scoreCount.textContent = num + 1;
    win();
  } else {
    num -= 1;
    scoreCount.textContent = num - 1;
    lose();
  }
} else {
  myChoice.classList.add('rock-choice');

  if (compImg.getAttribute('src') === 'images/icon-scissors.svg') {
    num += 1;
    scoreCount.textContent = num + 1;
    win();
  } else {
    num -= 1;
    scoreCount.textContent = num - 1;
    lose();
  }
}

localStorage.setItem('theScore', scoreCount.textContent);

if (compImg.getAttribute('src') === 'images/icon-scissors.svg') {
  compChoice.classList.add('scissors-comp');
} else if (compImg.getAttribute('src') === 'images/icon-paper.svg') {
  compChoice.classList.add('paper-comp');
} else {
  compChoice.classList.add('rock-comp');
}
