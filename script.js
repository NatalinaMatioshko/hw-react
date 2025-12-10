"use strict";

let timerValue = 0;

const timer = () => {
  const timerBlock = document.querySelector("#timer_b span");

  timerValue++;

  timerBlock.textContent = `${timerValue} (...JS ТАЙМЕР також ПРАЦЮЄ...)`;
};

setInterval(timer, 1000);
