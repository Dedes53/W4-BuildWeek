//creiamo una costante che ci permette di prendere le stelle una per una
const stelle = document.querySelectorAll(".stella");

stelle.forEach((stella, i) => {
  stella.addEventListener("mouseover", () => {
    hoverStelle(i);
  });
});

function hoverStelle(indiceCliccato) {
  stelle.forEach((stella, i) => {
    if (i <= indiceCliccato) {
      stella.classList.add("hover");
    } else {
      stella.classList.remove("hover");
    }
  });
}
// facciamo un ciclo in cui possiamo toccare ogni stella e stampiamo in console il messaggio
stelle.forEach((stella, i) => {
  stella.addEventListener("click", () => {
    console.log("Hai cliccato la stella numero:", +(i + 1));
    accendiStelle(i); //fondamentale per richiamare la funzione nel momento in cui clicchaimo su una stella
  });
});
//questa funzione ci serve per aggiungere la classe .attiva ogni volta che clicchiamo su una stella, e ci permette di illuminare ogni stella precedente a quella cliccata, tramite l'indice (i)
function accendiStelle(indiceCliccato) {
  stelle.forEach((stella, i) => {
    if (i <= indiceCliccato) {
      stella.classList.add("attiva");
    } else {
      stella.classList.remove("attiva");
    }
  });
}
