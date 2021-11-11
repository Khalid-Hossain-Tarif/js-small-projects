
const loadingNumber = document.querySelector('.loading-number');

let load = 0;

let interval = setInterval(loading, 33)

function loading() {
  load++;

  loadingNumber.innerText = `${load}%`;

  if (load === 100) {
    clearInterval(interval);
    loadingNumber.style.opacity = "1";
  }
}


