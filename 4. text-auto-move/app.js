
"use strict";

const textElement = document.getElementById("movingText");
const movingText = "Hi, I'm Auto Moving Text!";
let idx = 1;
let speed = 200;


function movingTextFunc() {
    textElement.innerText = movingText.slice(0, idx);

    idx++;

    if(idx > movingText.length) {
        idx = 1;
    }

    setTimeout(movingTextFunc, speed);
}

movingTextFunc();


document.addEventListener ("contextmenu", function(hideInspect) {
    hideInspect.preventDefault();
}) 