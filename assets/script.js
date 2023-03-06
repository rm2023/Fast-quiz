
// variables for timer
var timeEl = document.querySelector(".time");
var secondsLeft = 20;
var timerInterval

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
//starting score
score = 100;
// Function to create message that games over
function sendMessage() {
  timeEl.textContent = "GAME OVER ";
}


//Question BOX
//variables for questions
var questionE1 = document.querySelector("#question-holder");
var YN =document.querySelector("#Q")
var a1= document.querySelector("#a1")
var a2= document.querySelector("#a2")
var a3= document.querySelector("#a3")
var a4= document.querySelector("#a4")

var nextBtn = document.querySelector(".show-next");
var currentQuestionIndex = -1;
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


//clik button comparision
a1.addEventListener("click", function () {
 
  if (a1.textContent == questions[currentQuestionIndex].correct) {
    YN.textContent = "correct";
    nextBtn.click();
    
  } else {
    YN.textContent = "wrong";
    score = score-25;
  }
});


a2.addEventListener("click", function () {
 
  if (a2.textContent == questions[currentQuestionIndex].correct) {
    YN.textContent = "correct";
    nextBtn.click();
    

  } else {
    YN.textContent = "wrong";
    score = score-25;
  }
});
a3.addEventListener("click", function () {
 
  if (a3.textContent == questions[currentQuestionIndex].correct) {
    YN.textContent = "correct";
    nextBtn.click();
  } else {
    YN.textContent = "wrong";
    score = score-25;
  }
});

a4.addEventListener("click", function () {
 
  if (a4.textContent == questions[currentQuestionIndex].correct) {
    YN.textContent = "correct";
    nextBtn.click();
  
  } else {
    YN.textContent = "wrong";
    score = score-25;
  }
});
//next button
nextBtn.addEventListener("click", function () {
  currentQuestionIndex++;
  YN.textContent = "";
  if (currentQuestionIndex===0) {
    setTime();
  }
    
  
  if (questions[currentQuestionIndex] == undefined) {
    clearInterval(timerInterval);
    questionE1.textContent = "game over";
    
    var scores=JSON.parse(localStorage.getItem("scores"))||[]
    var user = prompt("CONGATULATIONS your score is "+score+" Please enter name");
    var scoreObj={
      score:score,
      user:user

    }
    scores.push(scoreObj)
    localStorage.setItem("scores",JSON.stringify(scores) );
    window.location.href = "./score.html";
    
    
  } else {

    questionE1.textContent = questions[currentQuestionIndex].q;
    a1.textContent = questions[currentQuestionIndex].answers[0];
    a2.textContent = questions[currentQuestionIndex].answers[1];
    a3.textContent = questions[currentQuestionIndex].answers[2];
    a4.textContent = questions[currentQuestionIndex].answers[3];
    nextBtn.style.display = "none";
    
    
  }
  
});
