colore azzurro #01FFFF
viola #C2128D


DA AGGIUNGERE NEL JS DI RESULTS.JS:

const points = localStorage.getItem("points");

console.log(points);

in questo modo il valore di points dovrebbe essere una stringa, quindi se ti serve in number devi convertirlo: const score = Number(points);

DA CONTROLLARE SE CREA PROBLEMI POER VIA DEL FATTO CHE RIMANGONOP IN MEMORIA (NON SO BENE COME FUNZIONI)
IN CASO CAMBIARE "localStorage" CON "sessionStorage"