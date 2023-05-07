// Quiz Questions
const questions = [
  {
    question: "Which famous musician was known as the 'King of Pop'?",
    choices: ["Michael Jackson","Elvis Presley","Frank Sinatra","John Lennon",],
    correctAnswer: 1,
  },
  {
   question:"Which music group's members were John Lennon, Paul McCartney, George Harrison, and Ringo Starr?",
   choices: ["The Rolling Stones", "The Beatles","Led Zeppelin", "Pink Floyd",],
   correctAnswer: 2,
  },
  {
  question: "Who sang the hit song 'Thriller'?",
  choices: ["Prince", "Madonna", "Michael Jackson", "Whitney Houston"],
  correctAnswer: 3
  },
  {
  question: "What instrument did Jimi Hendrix famously play?",
  choices: [ "Drums","Guitar", "Piano", "Bass"],
  correctAnswer: 2
  },
  {
  question: "Which musician won the Nobel Prize in Literature in 2016?",
  choices: ["Bob Dylan", "Paul Simon", "Bruce Springsteen", "Neil Young"],
  correctAnswer: 1
  },
  {
  question: "What was the name of Elvis Presley's estate?",
  choices: ["Graceland", "Neverland", "Nevermind", "Heartbreak Hotel"],
  correctAnswer: 1
  },
  {
  question: "Who is considered the 'Queen of Soul'?",
  choices: ["Etta James", "Diana Ross", "Gladys Knight", "Aretha Franklin"],
  correctAnswer: 4
  },
  {
  question: "What was the name of the first music video ever played on MTV?",
  choices: ["Thriller", "Video Killed the Radio Star", "Take On Me", "Money for Nothing"],
  correctAnswer: 2
  },
  {
  question: "Which rapper's real name is Marshall Mathers?",
  choices: ["Jay-Z", "Eminem", "Kendrick Lamar", "Drake"],
  correctAnswer: 2
  },
  {
  question: "Who wrote the musical 'Hamilton'?",
  choices: ["Lin-Manuel Miranda", "Andrew Lloyd Webber", "Stephen Sondheim", "Jason Robert Brown"],
  correctAnswer: 1
  }
];

// Get a reference to the stylesheet
const styleSheet = document.styleSheets[0];

// Define the CSS rule for the ::before pseudo-element
// Insert the new rule into the stylesheet
const rule ='body::before { content: ""; box-sizing: border-box;margin: 0; padding: 0; position: absolute; top: 0; left: 0; width:100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(5px); }';



// DOM Elements
const quizContainer = document.getElementById("quiz-container");
const overlayElement = document.getElementById("overlay");
const questionContainer = document.getElementById("question-container");
const timeElement = document.getElementById("time-left");
const questionCount = document.getElementById("question-count");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices-container");
const controlsContainer = document.getElementById("controls-container");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");

// Quiz Variables
let currentQuestionIndex;
let score;
let timerId;
let timeLeft;
let shuffledQuestions;

// Function to start the quiz
function startQuiz() {
  // Hide quiz complete overlay and remove blur effect
  styleSheet.deleteRule("body::before");

  currentQuestionIndex = 0;
  score = 0;
  overlayElement.classList.add("hidden");
  document.getElementById("quiz-notice").classList.add("hidden");
  timeLeft = 120;
  timeElement.textContent = timeLeft;
  timerId = setInterval(updateTimer, 1000);
  startButton.classList.add("hidden");
  showQuestion();
}

function updateTimer() {
  timeLeft--;
  timeElement.textContent = timeLeft;
  if (timeLeft === 0) {
    endQuiz();
  }
}

function startTimer() {
  timeElement = setInterval(() => {
    timeLeft--;
    timeElement.innerText = timeLeft;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Function to display the current question
function showQuestion() {
  questionContainer.classList.remove("hidden");
  questionCount.textContent = `${currentQuestionIndex+1} / ${questions.length}`;
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  // Clear the previous choices
  choicesElement.innerHTML = "";
  // Display the current choices
  currentQuestion.choices.forEach((choice, index) => {
    const choiceElement = document.createElement("button");
    choiceElement.classList.add("btn");
    choiceElement.classList.add("choice-btn");
    choiceElement.textContent = choice;
    choiceElement.addEventListener("click", () => {
      // Check if the answer is correct
      if (index === currentQuestion.correctAnswer - 1) {
        choiceElement.classList.add("correct");
        score += 10;
      } else {
        choiceElement.classList.add("wrong");
        // Show the correct answer
        choicesElement.children[
          currentQuestion.correctAnswer - 1
        ].classList.add("correct");
      }
      // Disable all the choices
      for (let i = 0; i < choicesElement.children.length; i++) {
        choicesElement.children[i].disabled = true;
      }
      // Show the Next button
      nextButton.classList.remove("hidden");
    });
    choicesElement.appendChild(choiceElement);
  });
  // Disable the Next button until the user selects an answer
  nextButton.classList.add("hidden");
}

// Function to go to the next question
function nextQuestion() {
  currentQuestionIndex++;
  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    questionCount.textContent = `${currentQuestionIndex} / ${questions.length}`;
    showQuestion();
  } else {
    // End the quiz if there are no more questions
    endQuiz();
  }
}

function overlay() {
  overlayElement.classList.remove("hidden");
  var grade = (score / questions.length) * 10;
  document.getElementById("question-total").textContent = questions.length;
  document.getElementById("final-score").textContent = score;
  document.getElementById("wrong-count").textContent = questions.length - score / 10;
  document.getElementById("grade").textContent = grade;
  const timeTaken = (document.getElementById("time-taken").textContent = 120 - timeLeft);

  // Give a feed back base on the grades and time taken
  const feedback = document.getElementById("feedback");
  if (grade >= 80 && timeTaken <= 50) {
    feedback.textContent = `Great you scored good`;
    feedback.style.color="lightgreen"

  } else if (grade >= 50 && timeTaken <= 100) {
    feedback.textContent = `You tried your best`;
    feedback.style.color="yellow"

  } else {
    feedback.textContent = `You tried your best`;
    feedback.style.color="red"
  }
  document.getElementById("play-again-btn").addEventListener("click", startQuiz);
}

// Function to end the quiz
function endQuiz() {
  styleSheet.insertRule(rule);
  // Stop the timer
  clearInterval(timerId);

  // Hide the Next button
  nextButton.classList.add("hidden");
  overlay();
}

// Add event listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);




