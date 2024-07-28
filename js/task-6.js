const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');   

const boxes = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6,
 0)}`;
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor
 = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes()
 {
  boxes.innerHTML = '';
}

createBtn.style.backgroundColor = '#4E75FF';
destroyBtn.style.backgroundColor = '#FF4E4E';

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Кількість елементів має бути від 1 до 100');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

