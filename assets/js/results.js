const points = Number(localStorage.getItem("points")) || 0;
const N = Number(localStorage.getItem("N")) || 10;

// Utente corrente (salvato in index.js)
const currentUser = localStorage.getItem("currentUser");

const totalQuestions = N;
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
      promotions / spam folder)
    </p>`;
} else {
  donutCenter.innerHTML = `
   <p> We're sorry!</p>
     <div><b class="redlight">You didn't pass the exam.</b></div><br />
    Review the material<br />
    and try again.
  `;
}

// Mostra lo storico dei risultati dell'utente
function showUserHistory(username) {
  if (!username) return;

  const key = "results_" + username;
  const existing = localStorage.getItem(key);
  const results = existing ? JSON.parse(existing) : [];

  const container = document.getElementById("user-history");
  if (!container) return;

  if (results.length === 0) {
    container.textContent = "No other scores for " + username;
    return;
  }

  container.innerHTML = `<h3>Previous results of ${username}</h3>`;
  const list = document.createElement("ul");

  results.forEach((r) => {
    const li = document.createElement("li");
    const percent = ((r.score / r.total) * 100).toFixed(1);
    li.textContent = `Score: ${r.score}/${r.total} (${percent}%) - Difficulty: ${r.difficulty} - Date: ${new Date(r.date).toLocaleString()}`;
    list.appendChild(li);
  });

  container.appendChild(list);
}

// Chiama la funzione appena caricata la pagina risultati
window.addEventListener("DOMContentLoaded", () => {
  showUserHistory(currentUser);
});
