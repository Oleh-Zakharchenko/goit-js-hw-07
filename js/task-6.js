function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  clearBoxesContainer();

  let size = 30;

  const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);

      size += 10;
    }

    boxesContainer.appendChild(fragment);
  input.value = '';
}

function destroyBoxes() {
  clearBoxesContainer();
}

function clearBoxesContainer() {
  boxesContainer.innerHTML = '';
} 