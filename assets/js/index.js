// //Gestione livelli (Extra)
// let Nindex;
// const livelli = document.getElementById("levels");
// const check = document.getElementById("checkRequired");

// const user = document.getElementById("user").value;
// const proceedBtn = getElementById("proceed");
// function updateLevel() {
//   const selectedValue = livelli.value;
//   check.textContent = selectedValue;
//   console.log("Selected level:", selectedValue);

//   if (selectedValue === "Easy") {
//     Nindex = 3;
//   } else if (selectedValue === "Medium") {
//     Nindex = 6;
//   } else if (selectedValue === "Hard") {
//     Nindex = 10;
//   }

//   console.log("Nindex:", Nindex);
//   localStorage.setItem("Nindex", Nindex);
// }

// livelli.addEventListener("change", updateLevel);
// updateLevel();

// proceedBtn.addEventListener("click", function(){

// })

const form = document.getElementById("start-form");
const proceedBtn = document.getElementById("proceed");
const checkbox = document.getElementById("checkRequired");
const levelsSelect = document.getElementById("levels");
const userInput = document.getElementById("user");

proceedBtn.addEventListener("click", () => {
  if (!checkbox.checked) {
    alert("Devi accettare la promessa prima di procedere.");
    return;
  }

  const username = userInput.value.trim();
  if (!username) {
    alert("Inserisci il tuo nome.");
    return;
  }

  const difficulty = levelsSelect.value;

  // Salvo utente e difficoltà
  localStorage.setItem("currentUser", username);
  localStorage.setItem("currentDifficulty", difficulty);

  // Numero di domande in base alla difficoltà
  let N;
  if (difficulty === "Easy") {
    N = 3;
  } else if (difficulty === "Medium") {
    N = 6;
  } else {
    N = 10;
  }

  // Salvo N per benchmark.js e results.js
  localStorage.setItem("N", N.toString());

  // Inizializzo lo storico dell'utente se non esiste
  const key = "results_" + username;
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify([]));
  }

  // Vai al quiz
  window.location.href = "./benchmark.html";
});
