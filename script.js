function randomNumberFrom1To255() {
  const min = Math.ceil(0);
  const max = Math.floor(255);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
  const r = randomNumberFrom1To255();
  const g = randomNumberFrom1To255();
  const b = randomNumberFrom1To255();
  return `rgb(${r},${g},${b})`;
}

function generateColorPallete() {
  const pallete = document.getElementById('color-palette');
  for (let i = 0; i < 4; i += 1) {
    const p = document.createElement('p');
    p.setAttribute('class', 'color');
    p.style.backgroundColor = randomColor();
    pallete.appendChild(p);
  }
  pallete.firstChild.style.backgroundColor = 'black';
}

const createSquare = () => document.createElement('div');

function createBoard(size) {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
  for (let index = 0; index < size; index += 1) {
    pixelBoard.appendChild(createSquare());
    pixelBoard.children[index].classList.add('linha');
    for (let index2 = 0; index2 < size; index2 += 1) {
      const line = document.querySelectorAll('.linha');
      line[index].appendChild(createSquare());
      line[index].children[index2].classList.add('pixel');
      line[index].children[index2].style.backgroundColor = 'white';
    }
  }
}

window.onload = () => {
  generateColorPallete();
  createBoard(5);
};
