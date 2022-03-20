var playerName = window.prompt("What is your initial?");
var timeRel = document.getElementById("countdown");
var mainRel = document.getElementById("rush");
var timeLeft = 50;
var start = document.getElementById("start");
var questionsContainer = document.getElementById("questions");
var question = document.getElementById("question");
var quizContainer = document.getElementById("quiz-container");
var scoreboard = document.getElementById("scoreboard");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var points = document.getElementById("score");
var button = document.getElementsByClassName("option");
var qI = 0;
var score = 0;
var answers = document.getElementById("answers");
var answerBank = document.getElementById("answerBank");
var timeInterval;
//Question bank
var questionBank = [
  {
    questionBank:
      'What is the correct JavaScript syntax to write "Hello World"?',
    option: [
      'System.out.println("Hello World")',
      'printLn("Hello World")',
      'document.write("Hello World")',
      'response.write("Hello World")',
    ],
    answer: 'document.write("Hello World")',
  },
  {
    questionBank:
      "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
    option: ["a wrapper", "a link", "a cursor", "a form"],
    answer: "a wrapper",
  },
  {
    questionBank: "Arrays in JavaScript can be used to store:",
    option: ["Quotes", "Parenthesis", "Curly Brackets", "All of the above"],
    answer: "Parenthesis",
  },
  {
    questionBank: "The condition in an if/else statement is enclosed in:",
    option: ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
    answer: "Parenthesis",
  },
  {
    questionBank:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    option: ["JavaScript", "Terminal Bash", "for loops", "console.log"],
    answer: "console.log",
  },
  {
    questionBank:
      "Which of the following methods is used to access HTML elements using Javascript?",
    option: ["getElementById()", "getElementByClassName()", "Both A and B", "None of the above"],
    answer: "Both A and B",
  },
  {
    questionBank:
      "How can a datatype be declared to be a constant type?",
    option: ["const", "var", "let", "constant"],
    answer: "const",
  },
  {
    questionBank:
      "How to stop an interval timer in Javascript?",
    option: ["clearTimer", "clearInterval", "intervalOver", "None of the above"],
    answer: "clearInterval",
  },
];
// Timer counts down from 50
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timeRel.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timeRel.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timeRel.textContent = "";
      // Use `clearInterval()` to stop the timer
      alert("timesup")
      quizContainer.style.display = "none";
      scoreboard.style.display="block"
      window.clearInterval(timeInterval);
    }
  }, 1000);
}
function startQuiz() {
  countdown();
  displayQuestion();
}

function displayQuestion() {
  answers.innerHTML = "";
  questionsContainer.style.display = "block";
  question.innerHTML = "Question" + (qI + 1) + "" + questionBank[qI].questionBank;
  questionBank[qI].option.forEach(optionValue => {
    console.log(optionValue)
    var optionBtn = document.createElement('button');
    optionBtn.textContent = optionValue;
    optionBtn.onclick = checkAnswer;
    optionBtn.setAttribute('class','option')
    answers.appendChild(optionBtn)
  });
  start.innerHTML =
    "Question" + "" + (qI + 1) + "" + "of" + "" + questionBank.length;
}
function calscore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).textContent = "Correct!";
  } else {
    document.getElementById(e.id).textContent = "Incorrect!";
  }
}

function nextQuestion() {
  if (qI < questionBank.length - 1) {
    qI += 1;
    displayQuestion();
  } else {
    points.innerHTML = score + "/" + questionBank.length;
    quizContainer.style.display = "none";
    scoreboard.style.display="block"
    window.clearInterval(timeInterval);
  }
}

// Back to Quiz
function backToQuiz() {
  location.reload();
}

//Check Answers
function checkAnswer() {
  if (this.textContent === questionBank[qI].answer){
    timeLeft += 10; 
    score++
    nextQuestion()
  }else {timeLeft -=10
    score-1
    nextQuestion()
  }

  answerBank.style.display = "block";
  scoreboard.style.display = "block";

}

start.addEventListener("click", startQuiz);
