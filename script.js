function adicionaPixel() {
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.addEventListener('click', () => {
    }, false);
    const sectionPixelBoard = document.getElementById('pixel-board');
    sectionPixelBoard.appendChild(pixel);
  }
}

adicionaPixel();

const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.classList.add('selected');

function whenClick(event) {
  const selected = document.getElementsByClassName('selected')[0];
  selected.classList.remove('selected');
  const changeSelected = event.target;
  changeSelected.classList.add('selected');
}

const colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', whenClick);
}
