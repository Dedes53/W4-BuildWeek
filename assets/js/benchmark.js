//implementare funzioni timer: reset alla nuova domanda e passaggio alla domanda successiva se scaduto.

//riferimenti al dom
const qText = document.getElementById("question"); //domanda
const quizContainer = document.getElementById("quiz"); //risposte
const nextButton = document.getElementById("confirm"); //pulsante di conferma

//domande
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//variabili
let index = 0; //indice della domanda corrente
let points = 0;

//timer
// const time = time.time;
// console.log(time);

// Mescola casualmente gli elementi di un array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

//funzione per creare le risposte
function createAnswer(text, isCorrect, index, answers) {
  const label = document.createElement("label");
  label.style.display = "block";

  //radio button
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "question-" + index; //forse superfluo
  radio.value = text;

  // se è la risposta corretta,
  // aggiungiamo un data-attribute
  if (isCorrect) {
    radio.dataset.correct = "true";
  }

  // inseriamo radio + testo nella label
  label.appendChild(radio);
  label.append(" " + text);

  // aggiungiamo la label all'array
  answers.push(label);

  return answers;
}

//stampa da domanda a schermo
function showQuestion() {
  quizContainer.innerHTML = ""; //azzera il testo delle domande

  // stampa il testo della domanda corrente
  const currentQuestion = questions[index];
  qText.textContent = currentQuestion.question;

  let answers = []; // array delle risposte

  // crea la risposta corretta
  createAnswer(questions[index].correct_answer, true, index, answers);

  // crea tutte le risposte errate
  questions[index].incorrect_answers.forEach((ans) => createAnswer(ans, false, index, answers));

  // mescola le risposte e le stampa a schermo
  shuffleArray(answers).forEach((answer) => quizContainer.appendChild(answer));
}

quizContainer.after(nextButton); // inserisce il bottone dopo il quiz

nextButton.addEventListener("click", () => {
  const selected = document.querySelector(`input[name="question-${index}"]:checked`); // radio button selezionato

  if (!selected) {
    index++;
    showQuestion();
    //funzione per resettare il timer
    return;
  }

  // se la risposta è corretta
  if (selected.dataset.correct === "true") {
    points++;
  }
  // if(timer finito){
  // passa ad un altra domanda}

  index++; // incremento l'indice per passare alla domanda successiva

  // se ci sono ancora domande
  if (index < questions.length) {
    showQuestion();

    //funzione per resettare il timer
  } else {
    // fine quiz
    qText.textContent = "Quiz terminato!";
    quizContainer.innerHTML = "";
    nextButton.disabled = true;

    // punteggio visibile solo in console
    console.log("Punteggio finale:", points);
  }
});

//avvia il quiz
window.onload = function () {
  showQuestion();
};
