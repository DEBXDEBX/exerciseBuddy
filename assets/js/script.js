let timer;
let runTask = true;
let sliderAudio = document.querySelector("#sliderAudio");
let startAudio = document.querySelector("#startAudio");
let stopAudio = document.querySelector("#stopAudio");
let warningAudio = document.querySelector("#warningAudio");
let yogaLedAudio = document.querySelector("#yogaLedAudio");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
const tabAudio = document.querySelector("#tabAudio");
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
let slider = document.querySelector("#sliderInput");
let label = document.querySelector("#label");
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
  startAudio.play();
  slider.style.display = "none";
  startBtn.style.display = "none";
  stopBtn.style.display = "block";
  if (runTask === true) {
    timer = setInterval(cycle, timeMill);
  }
});

stopBtn.addEventListener("click", () => {
  stopAudio.play();
  slider.style.display = "block";
  startBtn.style.display = "block";
  stopBtn.style.display = "none";
  clearInterval(timer);
});

function cycle() {
  tabAudio.play();
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

// slider
slider.addEventListener("change", () => {
  sliderAudio.play();
  clearInterval(timer);
  let labelValue;
  switch (Number(slider.value)) {
    case 1:
      timeMill = 60000;
      labelValue = "Cycle Every Sixty Seconds";
      break;
    case 2:
      timeMill = 50000;
      labelValue = "Cycle Every Fifthty Seconds";
      break;
    case 3:
      timeMill = 40000;
      labelValue = "Cycle Every Forty Seconds";
      break;
    case 4:
      timeMill = 30000;
      labelValue = "Cycle Every Thirty Seconds";
      break;
    case 5:
      timeMill = 20000;
      labelValue = "Cycle Every Twenty Seconds";
      break;
    case 6:
      timeMill = 10000;
      labelValue = "Cycle Every Ten Seconds";
      break;
    case 7:
      timeMill = 1000;
      labelValue = "Cycle Every Second";
      break;
    default:
      console.log("Invalid Entry");
      labelValue = "Invalid Entry";
  }
  label.textContent = labelValue;
});

Y0.addEventListener("click", () => {
  if (Y0.style.backgroundColor === "rgb(0, 255, 0)") {
    return;
  } else {
    yogaLedAudio.play();
    Y0.style.backgroundColor = "#0f0";
    Y1.style.backgroundColor = "white";
    yoga = false;
  }
});

Y1.addEventListener("click", () => {
  if (Y1.style.backgroundColor === "blue") {
    return;
  } else {
    yogaLedAudio.play();
    Y0.style.backgroundColor = "white";
    Y1.style.backgroundColor = "blue";
    yoga = true;
  }
});
