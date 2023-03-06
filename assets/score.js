
//had to be moved to another folder was keeping it from working
//OPENS SCORES FROM STORAGE
function highscore() {
  var scores = JSON.parse(localStorage.getItem("scores")) || []
  for (let index = 0; index < scores.length; index++) {
    const element = document.createElement("div");
    element.textContent = scores[index].user + "-" + scores[index].score
    var scoreEl = document.getElementById("scores")
    scoreEl.appendChild(element)
    console.log(scoreEl);
  }
}
highscore()