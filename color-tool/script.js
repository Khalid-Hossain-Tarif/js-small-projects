let toasterDiv = null;

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("color-change-btn");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  //copy color code
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    if (toasterDiv != null) {
      toasterDiv.remove();
      toasterDiv = null;
    }
    generateToastMessage(`${output.value} copied`);
  });
}

//Generate random hex color: #000, #fff
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

//Toast Message generate
function generateToastMessage(msg) {
  toasterDiv = document.createElement("div");
  toasterDiv.innerText = msg;
  toasterDiv.className = "toaster toaster-slide-in";
  document.body.appendChild(toasterDiv);

  toasterDiv.addEventListener("click", function () {
    toasterDiv.classList.add("toaster-slide-out");
    toasterDiv.classList.remove("toaster-slide-in");

    toasterDiv.addEventListener("animationend", function () {
      toasterDiv.remove();
      toasterDiv = null;
    });
  });

  setTimeout(() => {
    toasterDiv.classList.add("toaster-slide-out");
  }, 5000);

  setTimeout(() => {
    toasterDiv.remove();
    toasterDiv = null;
  }, 5300);
}
