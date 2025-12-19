//Gestione livelli (Extra)
let Nindex;
const livelli = document.getElementById("levels");
const check = document.getElementById("checkRequired");

function updateLevel() {
  const selectedValue = livelli.value;
  check.textContent = selectedValue;
  console.log("Selected level:", selectedValue);

  if (selectedValue === "Easy") {
    Nindex = 3;
  } else if (selectedValue === "Medium") {
    Nindex = 6;
  } else if (selectedValue === "Hard") {
    Nindex = 10;
  }

  console.log("Nindex:", Nindex);
  localStorage.setItem("Nindex", Nindex);
}

livelli.addEventListener("change", updateLevel);
updateLevel();
