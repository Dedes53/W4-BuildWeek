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
