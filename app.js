// Function to start quiz
// Remove start btn, h1, p
// Show quiz container
// Function to go to next question
// Function to select answer
// Create list of questions
// Randomize questions, set current question index

const startBtn = document.getElementById("start-btn");
const nxtBtn = document.getElementById("next-btn");
const quizContainerEl = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const answersEl = document.getElementById("answers");

let randomQuestion, currentQuestion;

startBtn.addEventListener("click", startQuiz);
nxtBtn.addEventListener("click", () => {
  currentQuestion++;
  nextQuestion();
});

function startQuiz() {
  startBtn.classList.add("hide");
  h1.classList.add("hide");
  p.classList.add("hide");
  randomQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  //   Show quiz container/1st question
  quizContainerEl.classList.remove("hide");
  nextQuestion();
}

function nextQuestion() {
  resetState();
  showQuestion(randomQuestion[currentQuestion]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answersEl.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nxtBtn.classList.add("hide");
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answersEl.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (randomQuestion.length > currentQuestion + 1) {
    nxtBtn.classList.remove("hide");
  } else {
    startBtn.innerText = "Restart";
    startBtn.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is scope?",
    answers: [
      { text: "The aiming device on a gun", correct: false },
      { text: "Where a variable can be accessed", correct: true },
      {
        text: "A technique for targeting an element in the DOM",
        correct: false,
      },
      { text: "A type of JavaScript function", correct: false },
    ],
  },
  {
    question: "What is the 'this' keyword?",
    answers: [
      { text: "This refers to that", correct: false },
      { text: "This refers to the function it belongs to", correct: false },
      { text: "This refers to the object that is belongs to", correct: true },
      { text: "This is confusing", correct: false },
    ],
  },
  {
    question: "How many different data types are there?",
    answers: [
      { text: "6", correct: false },
      { text: "10", correct: false },
      { text: "3", correct: false },
      { text: "7", correct: true },
    ],
  },
  {
    question: "What are the different data types?",
    answers: [
      {
        text: "Number, string, bowling, undeclared, null, calculation, things",
        correct: false,
      },
      {
        text: "Number, symbol, boolean, undefined, null, object, string",
        correct: true,
      },
      {
        text: "letter, string, icon, operator, assignment, value, variable",
        correct: false,
      },
      {
        text: "Number, letter, division, string, null, undeclared, integer",
        correct: false,
      },
    ],
  },
  {
    question: "What is an API?",
    answers: [
      {
        text: "Small units of independent, reusable code that are used as the building blocks for creating a JavaScript application  ",
        correct: false,
      },
      {
        text: "The combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)",
        correct: false,
      },
      {
        text: "A medium to fetch or send data between interfaces",
        correct: true,
      },
      {
        text: "a way of storing data that can be changed later on",
        correct: false,
      },
    ],
  },
];
