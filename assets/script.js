// Selects time
var timeEl = document.querySelector(".time");
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time " +secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
// Function to create message that games over
function sendMessage() {
  timeEl.textContent = "GAME OVER ";
 }
setTime();

//BOX