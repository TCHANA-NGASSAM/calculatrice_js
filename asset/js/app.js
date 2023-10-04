

let afficherResultat = document.getElementById("afficherResultat")

function ajouterChiffre(chiffre) {
  afficherResultat.textContent += chiffre
}

 function ajouterOperation(operation) {
  afficherResultat.textContent  += operation;
}

 function effacerTout() {
  
  if (afficherResultat !== ''){
    afficherResultat.textContent= ""
  }else{
    afficherResultat.textContent= 'ADRIEN CALCULATRICE'
  }
 }

 function effacerUnElement(){
  let affichage = afficherResultat.textContent
  let nouvelleAffichage = affichage.slice(0,-1)
  afficherResultat.textContent = nouvelleAffichage
 }

function calculer() {
  if (afficherResultat) {
    let resultat = eval(afficherResultat.textContent);
     afficherResultat.textContent  = resultat;
  } else{
     afficherResultat.textContent  = "Erreur";
  }
}

