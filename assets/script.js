// variables for time

var timeEl = document.querySelector(".time");
var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time " + secondsLeft;

    if (secondsLeft === 0) {
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

//Question BOX
//variables for questions
var questionE1 = document.querySelector("#question-holder");
var YN =document.querySelector("#Q")
var a1= document.querySelector("#a1")
var a2= document.querySelector("#a2")
var a3= document.querySelector("#a3")
var a4= document.querySelector("#a4")

var nextBtn = document.querySelector(".show-next");
var currentQuestionIndex = 0;
var questions = [
  {
    q: "Which company developed JavaScript?",
    answers: ["netscape", "Aol", "Limewire", "yahoo"],
    correct: "netscape"
  },
  {
    q: "What is the DOM?",
    answers: ["Document object model", "the man", "the lady", "a game"],
    correct: "Document object model"
  },{
    q: "Which element is used for or styling HTML5 layout?",
    answers: ["JavaScrpt", "PHP", "jQuery", "CSS"],
    correct: "CSS"
  },{
    q: " In which part of the HTML metadata is contained?",
    answers: ["head tag", "tite tag", "html tag", "body tag"],
    correct: "head tag"
  },
 
];


nextBtn.addEventListener("click", function () {
  
  if (questions[currentQuestionIndex] == undefined) {
    
    questionE1.textContent = "game over";

  } else {
    questionE1.textContent = questions[currentQuestionIndex].q;
    a1.textContent = questions[currentQuestionIndex].answers[0];
    a2.textContent = questions[currentQuestionIndex].answers[1];
    a3.textContent = questions[currentQuestionIndex].answers[2];
    a4.textContent = questions[currentQuestionIndex].answers[3];
    currentQuestionIndex++;
    
  }
});

console.log(questions[currentQuestionIndex].correct);
//clik button comparision
a1.addEventListener("click", function () {
 
  if (a1 == questions[currentQuestionIndex].correct) {
    YN.textContent = "correct";
  } else {
    YN.textContent = "wrong";
  }
});

a2.addEventListener("click", function () {
 
  if (a2 == questions[currentQuestionIndex].correct) {
    YN.textContent = "correct";
  } else {
    YN.textContent = "wrong";
  }
});
a3.addEventListener("click", function () {
 
  if (a3 == questions[currentQuestionIndex].correct) {
    YN.textContent = "correct";
  } else {
    YN.textContent = "wrong";
  }
});

a4.addEventListener("click", function () {
 
  if (a4 == questions[currentQuestionIndex].correct) {
    YN.textContent = "correct";
  } else {
    YN.textContent = "wrong";
  }
});