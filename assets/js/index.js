//Gestione livelli (Extra)
let Nindex;
const livelli = document.getElementById("levels");
const check = document.getElementById("checkrequired");

livelli.addEventListener("change", () => {
  const difficultvalue = livelli.value;
  console.log(difficultvalue);
});

if (livelli.value === "Easy") {
  Nindex = 3;
  console.log(Nindex);
} else if (livelli.value === "Medium") {
  Nindex = 6;
} else if (livelli.value === "Hard") {
  Nindex = 10;
}
console.log(livelli.value);

localStorage.setItem("Nindex", Nindex);
