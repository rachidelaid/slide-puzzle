import './style.css';
import getImage from './modules/getImage.js';

const wrapper = document.querySelector('.slides-wrapper');
const slides = [...wrapper.querySelectorAll('.slide .content')];

let board;

const refreshSlides = () => {
  board.forEach((posi, i) => {
    slides[i].parentNode.classList.remove('empty');
    if (posi === 0) {
      slides[i].parentNode.classList.add('empty');
    } else {
      slides[i].dataset.x = posi.x;
      slides[i].dataset.y = posi.y;
      slides[i].style.setProperty(
        'background-position',
        `${50 * posi.y}% ${50 * posi.x}%`,
      );
    }
  });
};

const start = async () => {
  const imageLink = await getImage();

  document.body.style.setProperty('--bg-image', `url(${imageLink})`);

  const list = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    0,
  ];

  // const arr = list;
  board = list.sort(() => Math.random() - 0.5);
  refreshSlides();
};

const moveSlide = (posi) => {
  let emptyIndex;
  let posiIndex;

  board.forEach((p, i) => {
    if (p === 0) {
      emptyIndex = i;
    } else if (p.x === posi.x && p.y === posi.y) {
      posiIndex = i;
    }
  });

  if (
    emptyIndex === posiIndex - 1 ||
    emptyIndex === posiIndex + 1 ||
    emptyIndex === posiIndex - 3 ||
    emptyIndex === posiIndex + 3
  ) {
    board[emptyIndex] = posi;
    board[posiIndex] = 0;
  }
};

slides.forEach((btn) => {
  btn.addEventListener('click', () => {
    const posi = { x: +btn.dataset.x, y: +btn.dataset.y };
    moveSlide(posi);
    refreshSlides();
  });
});

start();
