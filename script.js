function randomColor() {
  document.querySelector('.second-block').style.backgroundColor = `rgb(${
    Math.random() * 255
  }, ${Math.random() * 255}, ${Math.random() * 255})`;
  document.querySelector('.third-block').style.backgroundColor = `rgb(${
    Math.random() * 255
  }, ${Math.random() * 255}, ${Math.random() * 255})`;
  document.querySelector('.fourth-block').style.backgroundColor = `rgb(${
    Math.random() * 255
  }, ${Math.random() * 255}, ${Math.random() * 255})`;
}

document
  .getElementById('button-random-color')
  .addEventListener('click', randomColor);
