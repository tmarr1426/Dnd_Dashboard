import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

const variables = {
  play: document.querySelector("#play"),
  playerTurn: document.querySelector("#player-turn"),
  category: document.querySelector(".finalcat"),
  finalQuestion: document.querySelector(".final_question"),
  guessBtn: document.querySelector(".bet"),
  passBtn: document.querySelector(".pass"),
  answer: document.querySelector(".answer"),
  p1Score: document.querySelector("#p1Score"),
  p2Score: document.querySelector("#p2Score"),
  bet: document.querySelector(".betamt"),
  round1: document.querySelector(".round1"),
  round2: document.querySelector(".round2"),
  finalRound: document.querySelector(".round3"),
  nextRound: document.querySelector(".next-round"),
};

let p1 = "Player One";
let p2 = "Player Two";
let currentPlayer = p1;
let answerIndex;
let points;
let buttonNumOne;
let p1Points;
let p2Points;

window.addEventListener("load", (e) => {
  variables.playerTurn.textContent = `It is the Final Round! Let's make a wager!`;
  variables.category.textContent = placeholderQuestions[60].category;
});

async function checkAnswer(input, answer) {
  if (currentPlayer.includes(p1)) {
    variables.p1Score.textContent =
      Math.floor(variables.p1Score.textContent) -
      Math.floor(variables.bet.value);
    if (input === answer) {
      variables.buttons.forEach(function (enableButton) {
        enableButton.disabled = false;
      });
      if (currentPlayer.includes(p1)) {
        console.log(variables.p1Score.textContent);
        variables.p1Score.textContent =
          Math.floor(variables.p1Score.textContent) + Math.floor(buttonNumOne);
        p1Points = variables.p1Score.textContent;
        console.log(p1Points);
      } else if (currentPlayer.includes(p2)) {
        variables.p2Score.textContent = buttonNumOne;
        variables.buttons.forEach(function (enableButton) {
          enableButton.disabled = false;
          p2Points = variables.p2Score.textContent;
          console.log(p2Points);
        });
      }
    } else if (input != answer) {
      console.log("Incorrect");
      if (currentPlayer.includes(p1)) {
        variables.p1Score.textContent =
          Math.floor(variables.p1Score.textContent) - Math.floor(buttonNumOne);
      } else if (currentPlayer.includes(p2)) {
        variables.p2Score.textContent =
          Math.floor(variables.p2Score.textContent) - Math.floor(buttonNumOne);
      }
      switchPlayer();
    } else {
      variables.buttons.forEach(function (enableButton) {
        enableButton.disabled = false;
      });
    }
  } else if (currentPlayer.includes(p2)) {
    variables.p1Score.textContent =
      Math.floor(variables.p1Score.textContent) -
      Math.floor(variables.bet.value);
    if (input === answer) {
      variables.buttons.forEach(function (enableButton) {
        enableButton.disabled = false;
      });
      if (currentPlayer.includes(p1)) {
        console.log(variables.p1Score.textContent);
        variables.p1Score.textContent =
          Math.floor(variables.p1Score.textContent) + Math.floor(buttonNumOne);
        p1Points = variables.p1Score.textContent;
        console.log(p1Points);
      } else if (currentPlayer.includes(p2)) {
        variables.p2Score.textContent = buttonNumOne;
        variables.buttons.forEach(function (enableButton) {
          enableButton.disabled = false;
          p2Points = variables.p2Score.textContent;
          console.log(p2Points);
        });
      }
    } else if (input != answer) {
      console.log("Incorrect");
      if (currentPlayer.includes(p1)) {
        variables.p1Score.textContent =
          Math.floor(variables.p1Score.textContent) - Math.floor(buttonNumOne);
      } else if (currentPlayer.includes(p2)) {
        variables.p2Score.textContent =
          Math.floor(variables.p2Score.textContent) - Math.floor(buttonNumOne);
      }
      switchPlayer();
    } else {
      variables.buttons.forEach(function (enableButton) {
        enableButton.disabled = false;
      });
    }
  }
}

variables.finalQuestion.addEventListener("click", (e) => {
  points = variables.finalQuestion.textContent;
  variables.finalQuestion.textContent = placeholderQuestions[60].question;
  answerIndex = placeholderQuestions[60].answer;
});

variables.guessBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = variables.answer.value;
  checkAnswer(input, answerIndex);
});
