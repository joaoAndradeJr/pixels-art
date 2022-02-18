const colorsArray = ['black', 'green', 'yellow', 'red'];
const pallete = document.getElementById('color-palette');
const pixels = document.getElementById('pixel-board');

for (let i = 0; i < 4; i += 1) {
  const p = document.createElement('p');
  p.setAttribute('class', 'color');
  p.style.backgroundColor = colorsArray[i];
  pallete.appendChild(p);
}

for (let i = 0; i < 5; i += 1) {
  const p = document.createElement('p');
  p.setAttribute('class', 'pixel');
  pixels.appendChild(p);
}
