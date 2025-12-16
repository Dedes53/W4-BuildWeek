//FACCIO IL TIMER
// Dio bono
let time = 90;
const secondi = document.getElementById("secondi");

const intervallo = setInterval(TIMER, 1000);

function TIMER() {
  secondi.textContent = time;
  time--;

  if (time < 0) {
    clearInterval(intervallo);
    console.log("tempo scaduto");
  }
}
// Inizializza il cerchio "già pronto"
var bar = new ProgressBar.Circle("#container", {
  color: "#00d2ff",
  strokeWidth: 6,
  trailColor: "#333",
  trailWidth: 1,
  easing: "linear",
  duration: 100000, // Durata in millisecondi (10 secondi)
  text: {
    autoStyleContainer: false,
  },
  from: { color: "#9B1D8E", width: 6 },
  to: { color: "#ff4b2b", width: 6 }, // Cambia colore verso la fine
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    var value = Math.round(circle.value() * 10); // Calcola il numero
    circle.setText(10 - value); // Mostra il countdown testuale
  },
});

// Avvia l'animazione
bar.animate(1.0);
