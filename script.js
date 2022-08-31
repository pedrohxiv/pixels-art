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

document
  .getElementById('button-random-color')
  .addEventListener('click', randomColor);
