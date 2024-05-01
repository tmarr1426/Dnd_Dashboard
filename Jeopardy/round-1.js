import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// Creates variables from HTML
const variables = {
  play: document.querySelector("#play"),
  playerTurn: document.querySelector("#player-turn"),
  category: document.querySelectorAll(".cat"),
  buttons: document.querySelectorAll(".pointsbtn"),
  guessBtn: document.querySelector(".guess"),
  passBtn: document.querySelector(".pass"),
  answer: document.querySelector(".answers"),
  p1Score: document.querySelector("#p1Score"),
  p2Score: document.querySelector("#p2Score"),
  round1: document.querySelector(".round1"),
  round2: document.querySelector(".round2"),
  finalRound: document.querySelector(".round3"),
  nextRound: document.querySelector(".next-round"),
};

// Sets variables for use in functions
let p1 = "Player One";
let p2 = "Player Two";
let currentPlayer = p1;
let answerIndex;
let button;
let buttonNumOne;
let p1Points;
let p2Points;

// Creates a function to switch players
function switchPlayer() {
  currentPlayer = currentPlayer === p1 ? p2 : p1;
  variables.playerTurn.textContent = `It is ${currentPlayer}'s turn.`;
}

// Sets text content upon loading the web page
window.addEventListener("load", (e) => {
  variables.playerTurn.textContent = `It is ${currentPlayer}'s turn.`;
  variables.category[0].textContent = placeholderQuestions[0].category;
  variables.category[1].textContent = placeholderQuestions[10].category;
  variables.category[2].textContent = placeholderQuestions[20].category;
  variables.category[3].textContent = placeholderQuestions[30].category;
  variables.category[4].textContent = placeholderQuestions[40].category;
  variables.category[5].textContent = placeholderQuestions[50].category;
});

// Adds a listener to every question button, and runs functions to swap text content to the appropriate question
variables.buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(button.id);
    variables.guessBtn.disabled = false;
    variables.passBtn.disabled = false;

    variables.buttons.forEach(function (disableButton) {
      if (disableButton !== button) {
        disableButton.disabled = true;
      }
    });

    findOffset(button);
  });
});

// Finds the index of the question
function findOffset(button) {
  buttonNumOne = button.id.split("_")[0];
  console.log(buttonNumOne);
  const buttonNumTwo = button.id.split("_")[1];
  console.log(buttonNumTwo);
  const offSetOne = buttonNumOne / 200 - 1;
  const offSetTwo = (buttonNumTwo - 1) * 10;
  let indexOne = Math.floor(offSetOne);
  let indexTwo = Math.floor(offSetTwo);
  let index = indexOne + indexTwo;
  console.log(indexOne, indexTwo);
  console.log(index);
  assignQ(index, button);
  assignA(index, button);
}

// Assigns the question to the appropriate buttons text content
function assignQ(i, button) {
  console.log(i);
  let questionIndex = placeholderQuestions[i].question;
  console.log(questionIndex);
  console.log(variables.buttons);
  button.textContent = questionIndex;
}

// Assigns the answer to be associated with the button that was pushed
function assignA(i, button) {
  answerIndex = placeholderQuestions[i].answer;
  console.log(answerIndex);
}

// Awaits a user input, and checks if the input was the answer. Then awards points as necessary
async function checkAnswer(input, answer) {
  if (input === answer) {
    console.log("Congragtulations! Here are your points!");
    variables.buttons.forEach(function (enableButton) {
      enableButton.disabled = false;
    });
    if (currentPlayer.includes(p1)) {
      console.log(variables.p1Score.textContent);
      variables.p1Score.textContent =
        Math.floor(variables.p1Score.textContent) + Math.floor(buttonNumOne);
        p1Points = variables.p1Score.textContent
        console.log(p1Points)
    } else if (currentPlayer.includes(p2)) {
      variables.p2Score.textContent = buttonNumOne;
      variables.buttons.forEach(function (enableButton) {
        enableButton.disabled = false;
        p2Points = variables.p2Score.textContent
        console.log(p2Points)
      });
    }
  } else if (input != answer) {
    console.log("Incorrect");
    if (currentPlayer.includes(p1)) {
      variables.p1Score.textContent = Math.floor(variables.p1Score.textContent) - Math.floor(buttonNumOne);
    } else if (currentPlayer.includes(p2)) {
      variables.p2Score.textContent = Math.floor(variables.p2Score.textContent) - Math.floor(buttonNumOne);
    }
    switchPlayer();
  } else {
    variables.buttons.forEach(function (enableButton) {
      enableButton.disabled = false;
    });
  }
}

// Adds a listener to the guess button to allow a user to make a guess.
variables.guessBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = variables.answer.value;
  checkAnswer(input, answerIndex);
});

// Adds a listener to the pass button to pass the turn to the next player.
variables.passBtn.addEventListener("click", (e) => {
  e.preventDefault();
  switchPlayer();
});

variables.nextRound.addEventListener("click", (e) => {
  e.preventDefault();
  p1Points = variables.p1Score.textContent
  p2Points = variables.p2Score.textContent
  document.location = `./round-2.html`
})

variables.round2.addEventListener("click", (e) => {
  e.preventDefault();
  p1Points = p1Score.textContent
  p2Points = p2Score.textContent
})