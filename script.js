const rulesButton = document.querySelector('.rules');

const body = document.querySelector('.game');

const rulesPopup = document.querySelector('.rules-popup');

const rulesTextDiv = document.querySelector('.text-div');

const gameOptions = document.querySelectorAll('.option');

const score = document.querySelector('.current-score');

score.textContent = localStorage.getItem('theScore');

const optionsArr = ['images/icon-scissors.svg', 'images/icon-paper.svg',
  'images/icon-rock.svg'];

rulesButton.addEventListener('click', () => {
  if (rulesTextDiv.firstChild) {
    return;
  }

  const ruleImg = document.createElement('img');
  const rulesText = document.createElement('p');
  const cross = document.createElement('img');

  cross.src = 'images/icon-close.svg';
  cross.classList.add('cross');
  ruleImg.classList.add('rule-img');

  ruleImg.src = 'images/image-rules.svg';
  rulesText.textContent = 'RULES';

  rulesText.classList.add('rule-header');

  rulesTextDiv.appendChild(rulesText);
  rulesTextDiv.appendChild(cross);

  rulesPopup.appendChild(ruleImg);
  body.classList.add('hidden-body');

  cross.addEventListener('click', () => {
    while (rulesTextDiv.firstChild) {
      rulesTextDiv.removeChild(rulesTextDiv.firstChild);
    }

    rulesPopup.removeChild(rulesPopup.children[1]);
    body.classList.remove('hidden-body');
  });
});

gameOptions.forEach(item => {
  item.addEventListener('click', () => {
    localStorage.setItem('optionImg', item.getAttribute('src'));
    const index = optionsArr.indexOf(item.getAttribute('src'));
    optionsArr.splice(index, 1);

    const randIndx = Math.floor(Math.random() * 2);
    localStorage.setItem('compImg', optionsArr[randIndx]);
    optionsArr.push(item.getAttribute('src'));
  });
});
