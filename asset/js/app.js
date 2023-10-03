let affichage = document.getElementById("affichage");

function ajouterChiffre(chiffre) {
  affichage.value += chiffre;
}

function ajouterOperation(operation) {
  affichage.value += operation;
}

function calculer() {
  try {
    var resultat = eval(affichage.value);
    affichage.value = resultat;
  } catch (error) {
    affichage.value = "Erreur";
  }
}

function effacer() {
  affichage.value = "";
}