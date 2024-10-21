const cardWrapper = document.querySelector('.card-wrapper');
const cards = document.querySelectorAll('.card');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

let currentIndex = 0;

function updateSlider() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  
  if(width >= 1000){
    cardWrapper.style.transform = `translateX(-${currentIndex * 5.5}%)`;
  }else if(width <= 992 && width >= 767){
    cardWrapper.style.transform = `translateX(-${currentIndex * 6}%)`;
  }else if(width <= 767){
    cardWrapper.style.transform = `translateX(-${currentIndex * 7}%)`;
  }
}

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider();
});

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateSlider();
});
