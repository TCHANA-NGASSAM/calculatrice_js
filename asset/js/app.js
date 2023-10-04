

let afficherResultat = document.getElementById("afficherResultat")

function ajouterChiffre(chiffre) {
  afficherResultat.textContent += chiffre
}

 function ajouterOperation(operation) {
  afficherResultat.textContent  += operation;
}

 function effacerTout() {
    afficherResultat.textContent= ""
 }

