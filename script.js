const cardWrapper = document.querySelector('.card-wrapper');
const cards = document.querySelectorAll('.card');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
let currentIndex = 0;

function updateSlider() {
  cardWrapper.style.transform = `translateX(-${currentIndex * 10}%)`;
}

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider();
});

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateSlider();
});
