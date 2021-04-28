// I need to make a start button
//Button needs to be clickable
//when button is clicked a question is presented
//when we click start//
var startButton = document.getElementById("start-btn");
var questContEle = document.getElementById("question-container");
var questEle = document.getElementById("question");
var answerButtonEle = document.getElementById("answer-buttons");
var questList;
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  //hide the start button when clicked
  startButton.classList.add("hide");

  //show the questions when start button hidden
  questContEle.classList.remove("hide");
  setNextQuestion();
}
//when we click "next"
function setNextQuestion() {
  showQuestion(questList);
}

function showQuestion(question) {
  questEle.innerText = question.question;
}

function selectAnswer() {}

var questions = [
  {
    question: "A boolean's value can only be",
    answers: [
      { text: "True or False", correct: true },
      { text: "A string", correct: false },
      { text: "A number", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
];
