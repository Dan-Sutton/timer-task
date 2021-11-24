let count = 0;
let startButton = document.querySelector("#startButton");
let stopButton = document.querySelector("#stopButton");
let p = document.querySelector("p");
startButton.addEventListener("click", buttonStart);

function incrementCount() {
  count++;
  p.innerText = count;
}

function buttonStart() {
  let intervalID = setInterval(incrementCount, 2000);
  function buttonStop() {
    clearInterval(intervalID);
  }
  stopButton.addEventListener("click", buttonStop);
}