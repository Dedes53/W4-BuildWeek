//timer
// Inizializza il cerchio "già pronto"
let time = 90;

var bar = new ProgressBar.Circle("#container", {
  color: "white",
  strokeWidth: 10,
  trailColor: "#ada9a9ff",
  trailWidth: 10,
  easing: "linear",
  duration: time * 1000, // Durata di un secondo * 90
  text: {
    autoStyleContainer: false,
  },
  from: { color: "#9B1D8E", width: 6 },
  to: { color: "#b71b00ff", width: 6 }, // Cambia colore verso la fine
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    var value = Math.round(circle.value() * time); // Calcola il numero
    circle.setText(time - value); // Mostra il countdown testuale
    circle.text.style.fontSize = "40px";
  },
});
//
// speriamo funzioni
bar.animate(1.0);
