// Convert time to a format of hours, minutes, seconds, and milliseconds
function ConvertTimeToString(time) {
  let inHrs = time / 3600000;
  let hh = Math.floor(inHrs);

  let inMin = (inHrs - hh) * 60;
  let mm = Math.floor(inMin);

  let inSec = (inMin - mm) * 60;
  let ss = Math.floor(inSec);

  let inMs = (inSec - ss) * 100;
  let ms = Math.floor(inMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");
  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// I have Declared variables to use in our functions below here
let startTime;
let elapsedTime = 0;
let timerInterval;

// Created a function to modify innerHTML Text.
function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

// Create Start, Stop & Resetfunctions
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(ConvertTimeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}
// Pause Function
function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}
// Reset Function 
function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons
function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners
let playButton = document.getElementById("playBtn");
let pauseButton = document.getElementById("pauseBtn");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
