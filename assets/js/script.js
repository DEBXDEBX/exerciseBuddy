let timer;
let runTask = true;
let warningAudio = document.querySelector("#warningAudio");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let L0 = document.querySelector("#L0");
let L1 = document.querySelector("#L1");
let L2 = document.querySelector("#L2");
let L3 = document.querySelector("#L3");
let L4 = document.querySelector("#L4");
let L5 = document.querySelector("#L5");
let L6 = document.querySelector("#L6");
let L7 = document.querySelector("#L7");
let L8 = document.querySelector("#L8");
let L9 = document.querySelector("#L9");
let Y0 = document.querySelector("#Y0");
let Y1 = document.querySelector("#Y1");
let yoga = true;
let index = 0;
//60,000 milliseconds is one Minute
let timeMill = 60000;
let LEDarray = [];
LEDarray.push(L0);
LEDarray.push(L1);
LEDarray.push(L2);
LEDarray.push(L3);
LEDarray.push(L4);
LEDarray.push(L5);
LEDarray.push(L6);
LEDarray.push(L7);
LEDarray.push(L8);
LEDarray.push(L9);

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  stopBtn.style.display = "block";
  if (runTask === true) {
    timer = setInterval(blink, timeMill);
  }
});

stopBtn.addEventListener("click", () => {
  startBtn.style.display = "block";
  stopBtn.style.display = "none";
  clearInterval(timer);
});

function blink() {
  if (index === 10) {
    warningAudio.play();
    index = 0;

    for (let u = 0; u < 10; u++) {
      LEDarray[u].style.backgroundColor = "#0f0";
    }

    if (yoga === true) {
      Y0.style.backgroundColor = "#0f0";
      Y1.style.backgroundColor = "white";
    } else {
      Y0.style.backgroundColor = "white";
      Y1.style.backgroundColor = "blue";
    }

    yoga = !yoga;

    main();
  } else {
    main();
  }
}

function main() {
  LEDarray[index].style.backgroundColor = "red";
  index++;
}
