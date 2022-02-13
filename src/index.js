import './style.css';
import getImage from './modules/getImage.js';

const wrapper = document.querySelector('.slides-wrapper');

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
    { x: 2, y: 2 },
  ];

  const slides = [...wrapper.querySelectorAll('.slide')];
  console.log(slides[1]);

  const arr = list;
  // const arr = list.sort(() => Math.random() - 0.5);
  arr.forEach((posi, i) => {
    window
      .getComputedStyle(slides[i], ':before')
      .setProperty(
        'background-position',
        `${posi.x * 155}px ${posi.y * 155}px`,
      );
  });
};

start();
