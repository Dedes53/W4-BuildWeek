const points = localStorage.getItem("points");
const totalQuestions = 10;
const correctAnswers = points;
const wrongAnswers = totalQuestions - correctAnswers;

const correctPercent = (correctAnswers / totalQuestions) * 100;
const wrongPercent = 100 - correctPercent;

document.querySelector(".correct .percent").textContent = correctPercent.toFixed(1) + "%";

document.querySelector(".wrong .percent").textContent = wrongPercent.toFixed(1) + "%";

document.querySelector(".correct .answers").textContent = `${correctAnswers}/${totalQuestions} questions`;

document.querySelector(".wrong .answers").textContent = `${wrongAnswers}/${totalQuestions} questions`;

document.querySelector(".donut").style.background = `conic-gradient(
      #01ffff 0deg ${correctPercent * 3.6}deg,
      #C2128D ${correctPercent * 3.6}deg 360deg
    )`;

const donutCenter = document.querySelector(".donut-center");

if (correctPercent >= 60) {
  donutCenter.innerHTML = `
     <p> Congratulations! <b class="highlight"><br />You passed the exam.</b></p>
     <p>
      We'll send you the certificate<br />
      in few minutes.<br />
      Check your email (including<br />
      promotions / spam folder) </p>`;
} else {
  donutCenter.innerHTML = `
     <p> We're sorry!</p> <b class="redlight">You didn't pass the exam.</b><br />
      
      Review the material<br />
      and try again. </p>`;
}
