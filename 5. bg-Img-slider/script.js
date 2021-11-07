
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let activeSlide = 0;

//Arrow Buttons
rightArrow.addEventListener ('click', () => {
  activeSlide++;
  const slidesLength = slides.length;

  if (activeSlide > slidesLength - 1) {
    activeSlide = 0;
  }

  backBgImgFunc();
  activeSlideFunc();
});

leftArrow.addEventListener ('click', () => {
  activeSlide--;
  const slidesLength = slides.length;

  if (activeSlide < 0) {
    activeSlide = slidesLength - 1;
  }

  backBgImgFunc();
  activeSlideFunc();
});

backBgImgFunc();

function backBgImgFunc() {
  slider.style.backgroundImage  = slides[activeSlide].style.backgroundImage;
}

//Active Slide
function activeSlideFunc() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
}

