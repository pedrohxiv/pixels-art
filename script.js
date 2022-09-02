const firstBlock = document.querySelector('.first-block');
const secondBlock = document.querySelector('.second-block');
const thirdBlock = document.querySelector('.third-block');
const fourthBlock = document.querySelector('.fourth-block');

secondBlock.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'));
thirdBlock.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette2'));
fourthBlock.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette3'));

function randomColor() {
  localStorage.setItem('colorPalette',
    JSON.stringify((secondBlock.style.backgroundColor = `
    rgb(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255})`)));
  localStorage.setItem('colorPalette2',
    JSON.stringify((thirdBlock.style.backgroundColor = `
    rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`)));
  localStorage.setItem('colorPalette3',
    JSON.stringify((fourthBlock.style.backgroundColor = `
    rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`)));
}

function selectFirstPaletteColor() {
  firstBlock.classList.remove('selected');
  secondBlock.classList.remove('selected');
  thirdBlock.classList.remove('selected');
  fourthBlock.classList.remove('selected');
  firstBlock.classList.add('selected');
}

function selectSecondPaletteColor() {
  firstBlock.classList.remove('selected');
  secondBlock.classList.remove('selected');
  thirdBlock.classList.remove('selected');
  fourthBlock.classList.remove('selected');
  secondBlock.classList.add('selected');
}

function selectThirdPaletteColor() {
  firstBlock.classList.remove('selected');
  secondBlock.classList.remove('selected');
  thirdBlock.classList.remove('selected');
  fourthBlock.classList.remove('selected');
  thirdBlock.classList.add('selected');
}
function selectFourthPaletteColor() {
  firstBlock.classList.remove('selected');
  secondBlock.classList.remove('selected');
  thirdBlock.classList.remove('selected');
  fourthBlock.classList.remove('selected');
  fourthBlock.classList.add('selected');
}

function changeColor(event) {
  const pixel = document.querySelectorAll('.pixel');
  const pixels = [];
  const gettingStyleClass = window.getComputedStyle(document.querySelector('.selected'), null);
  const colorSelected = gettingStyleClass.getPropertyValue('background-color');
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = colorSelected;
  for (let i = 0; i < pixel.length; i += 1) {
    pixels.push(pixel[i].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixels));
}

function gettingPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', changeColor);
  }
}

function clearPixels() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function loadPixels() {
  if (localStorage.getItem('pixelBoard')) {
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = JSON.parse(localStorage.getItem('pixelBoard'))[i];
    }
  }
}

function cleanPixels() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].remove();
  }
}

function verifyInputVallue() {
  if (document.getElementById('board-size').value === '') {
    window.alert('Board inválido!');
  } else {
    cleanPixels();
    const num = document.getElementById('board-size').value;
    const pixelBoard = document.getElementById('pixel-board');
    for (let i = 0; i < (num * num); i += 1) {
      pixelBoard.appendChild(document.createElement('div')).classList.toggle('pixel');
      pixelBoard.style.gridTemplateColumns = `repeat(${num}, 40px)`;
      pixelBoard.style.gridTemplateRows = `repeat(${num}, 40px)`;
    }
    gettingPixel();
  }
}

function generatePixelBoard() {
  const num = 5;
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < (num * num); i += 1) {
    pixelBoard.appendChild(document.createElement('div')).className = 'pixel';
    pixelBoard.style.gridTemplateColumns = `repeat(${num}, 40px)`;
    pixelBoard.style.gridTemplateRows = `repeat(${num}, 40px)`;
  }
}

document.getElementById('generate-board').addEventListener('click', verifyInputVallue);
generatePixelBoard();
gettingPixel();
loadPixels();
document
  .getElementById('button-random-color')
  .addEventListener('click', randomColor);
firstBlock.addEventListener('click', selectFirstPaletteColor);
secondBlock.addEventListener('click', selectSecondPaletteColor);
thirdBlock.addEventListener('click', selectThirdPaletteColor);
fourthBlock.addEventListener('click', selectFourthPaletteColor);
firstBlock.addEventListener('click', changeColor);
secondBlock.addEventListener('click', changeColor);
thirdBlock.addEventListener('click', changeColor);
fourthBlock.addEventListener('click', changeColor);
document.getElementById('clear-board').addEventListener('click', clearPixels);
