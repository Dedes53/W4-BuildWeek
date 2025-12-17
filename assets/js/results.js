const totalQuestions = 6;
const correctAnswers = 5;
const wrongAnswers = totalQuestions - correctAnswers;

const correctPercent = (correctAnswers / totalQuestions) * 100;
const wrongPercent = 100 - correctPercent;

document.querySelector(".correct .percent").textContent = correctPercent.toFixed(1) + "%";

document.querySelector(".wrong .percent").textContent = wrongPercent.toFixed(1) + "%";

document.querySelector(".correct .answers").textContent = `${correctAnswers}/${totalQuestions} questions`;

document.querySelector(".wrong .answers").textContent = `${wrongAnswers}/${totalQuestions} questions`;

document.querySelector(".donut").style.background = `conic-gradient(
      #00ffff 0deg ${correctPercent * 3.6}deg,
      #c2188b ${correctPercent * 3.6}deg 360deg
    )`;
