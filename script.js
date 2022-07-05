function adicionaPixel() {
  for (let index = 0; index < 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    const sectionPixelBoard = document.getElementById('pixel-board');
    sectionPixelBoard.appendChild(pixel);
  }
}

adicionaPixel();

// window.onload = function () {
//   const firstselected = document.querySelector('black');
//   firstselected.className = 'selected';
// };
