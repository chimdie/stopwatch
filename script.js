const secsOutput = document.getElementById("secs");
const milisecsOutput = document.getElementById("milisecs");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let secs = 00;
let milisecs = 00;
let interval;

startBtn.addEventListener("click", () => {
  // console.log("clicked: start");
  // clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseBtn.addEventListener("click", () => {
  // console.log("clicked: pause");
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  let milisecs = "00";
  let secs = "00";
  secsOutput.innerHTML = secs;
  milisecsOutput.innerHTML = milisecs;
});

const startTimer = () => {
  // increment the miliseconds
  milisecs++;
  // if the miliseconds is less than or equal to 9, change the output to 0 and increment miliseconds
  if (milisecs <= 9) milisecsOutput.innerHTML = "0" + milisecs;
  // if the miliseconds is greater than 9, change the output to 0 and increment miliseconds
  if (milisecs > 9) milisecsOutput.innerHTML = "0" + milisecs;

  if (milisecs > 99) {
    // once miliseconds is greater than 99, increment seconds
    secs++;
    secsOutput.innerHTML = "0" + secs;

    milisecs = 0;
    milisecsOutput.innerHTML = "0" + milisecs;
  }
  if (secs > 9) secsOutput.innerHTML = secs;
};
