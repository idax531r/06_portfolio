//------BURGER MENU-----//
window.addEventListener("load", sidenVises); //Lytter til at siden er loaded

function sidenVises() {
  //Første function: Hvad skal der ske når siden vises?
  console.log("sidenVises"); //for at sikre JS kører, kan den ses i konsollen?
  document.querySelector("#menuknap").addEventListener("click", toggleMenu); //Lytter efter klik på burgerknap
}

//Efter klik på menuknap, henviser vi til en ny function: "toggleMenu"

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden"); //ved klik på menuknap, tilføjer eller fjerner den menuen, da den indeholder class hidden.

  //Laver variabel. Den siger hvis menu indeholder hidden, altså er gemt væk.
  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  //Så hvis det er sandt, viser den burger ikon. Hvis falsk, viser den kryds
  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "X";
  }
}
