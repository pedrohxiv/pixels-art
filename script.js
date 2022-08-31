document.querySelector('.second-block').style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'));
document.querySelector('.third-block').style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette2'));
document.querySelector('.fourth-block').style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette3'));

function randomColor() {
  localStorage.setItem('colorPalette', JSON.stringify(document.querySelector('.second-block').style.backgroundColor = `rgb(${
    Math.random() * 255
  }, ${Math.random() * 255}, ${Math.random() * 255})`));
  localStorage.setItem('colorPalette2', JSON.stringify(document.querySelector('.third-block').style.backgroundColor = `rgb(${
    Math.random() * 255
  }, ${Math.random() * 255}, ${Math.random() * 255})`));
  localStorage.setItem('colorPalette3', JSON.stringify(document.querySelector('.fourth-block').style.backgroundColor = `rgb(${
    Math.random() * 255
  }, ${Math.random() * 255}, ${Math.random() * 255})`));
}

function selectFirstPaletteColor() {
    document.querySelector('.first-block').classList.remove('selected');
    document.querySelector('.second-block').classList.remove('selected');
    document.querySelector('.third-block').classList.remove('selected');
    document.querySelector('.fourth-block').classList.remove('selected');
    document.querySelector('.first-block').classList.add('selected');
}

function selectSecondPaletteColor() {
    document.querySelector('.first-block').classList.remove('selected');
    document.querySelector('.second-block').classList.remove('selected');
    document.querySelector('.third-block').classList.remove('selected');
    document.querySelector('.fourth-block').classList.remove('selected');
    document.querySelector('.second-block').classList.add('selected');
}

function selectThirdPaletteColor() {
    document.querySelector('.first-block').classList.remove('selected');
    document.querySelector('.second-block').classList.remove('selected');
    document.querySelector('.third-block').classList.remove('selected');
    document.querySelector('.fourth-block').classList.remove('selected');
    document.querySelector('.third-block').classList.add('selected');
}
function selectFourthPaletteColor() {
    document.querySelector('.first-block').classList.remove('selected');
    document.querySelector('.second-block').classList.remove('selected');
    document.querySelector('.third-block').classList.remove('selected');
    document.querySelector('.fourth-block').classList.remove('selected');
    document.querySelector('.fourth-block').classList.add('selected');
}

document.getElementById('button-random-color').addEventListener('click', randomColor);
document.querySelector('.first-block').addEventListener('click', selectFirstPaletteColor);
document.querySelector('.second-block').addEventListener('click', selectSecondPaletteColor);
document.querySelector('.third-block').addEventListener('click', selectThirdPaletteColor);
document.querySelector('.fourth-block').addEventListener('click', selectFourthPaletteColor);
