
const imgBoxesContainer = document.getElementById('img-boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => imgBoxesContainer.classList.toggle('big'));

function createImgBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('img-box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      imgBoxesContainer.appendChild(box);
    }
  }
}

createImgBoxes();
