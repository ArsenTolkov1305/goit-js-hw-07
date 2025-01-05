function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = input.value.trim();
  if (amount >= 1 && amount <= 100) createBoxes(amount);
  input.value = ''; // Очищення інпуту
});

destroyBtn.addEventListener('click', () => (boxes.innerHTML = ''));

function createBoxes(amount) {
  boxes.innerHTML = ''; // Очищення перед створенням нових
  const elements = Array.from({ length: amount }, (_, i) => {
    const size = 30 + i * 10;
    return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 4px;"></div>`;
  });
  boxes.insertAdjacentHTML('beforeend', elements.join(''));
}

