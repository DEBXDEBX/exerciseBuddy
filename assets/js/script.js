let timer;
let runTask = true;
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
let yoga = false;
let index = 0;
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
  if (runTask === true) {
    timer = setInterval(blink, 700);
  }
});

stopBtn.addEventListener("click", () => {
  console.log("stop clicked");
  clearInterval(timer);
});

function blink() {
  if (index === 10) {
    console.log("Reset");
    index = 0;
    for (let u = 0; u < 10; u++) {
      LEDarray[u].style.backgroundColor = "#0f0";
    }
    yoga = !yoga;
    main();
  } else {
    console.log("David is great");
    main();
  }
}

function main() {
  console.log("Change LED COLOR");
  console.log(LEDarray[index]);
  if (yoga === true) {
    Y0.style.backgroundColor = "green";
    Y1.style.backgroundColor = "white";
  } else {
    Y0.style.backgroundColor = "white";
    Y1.style.backgroundColor = "blue";
  }
  LEDarray[index].style.backgroundColor = "red";
  index++;
}
