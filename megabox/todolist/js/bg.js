const body = document.querySelector('body');
const IMG_NUMBER = 4;

function paintImage(imgNB) {
  const image = new Image();
  image.src = `img/${imgNB + 1}.jpg`;
  image.classList.add('bgimage');
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
