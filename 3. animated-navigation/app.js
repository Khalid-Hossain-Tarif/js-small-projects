
const toogleBtn = document.getElementById('toogle-btn');
const navMenu = document.getElementById('nav');
const stickyHeader = document.querySelector('.header');

toogleBtn.addEventListener ("click", () => navMenu.classList.toggle('active'));

window.addEventListener ("scroll", () =>  stickyHeader.classList.toggle('sticky', window.scrollY > 0));

