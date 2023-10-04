let afficherOperation = document.getElementById("afficherOperation")
let afficherResultat = document.getElementById("afficherResultat")

function ajouterChiffre(chiffre) {
  afficherOperation.value += chiffre
  afficherResultat.value = ''
}

 function ajouterOperation(operation) {
  afficherOperation.value  += operation;
  afficherResultat.value = ''
}

 function effacerTout() {
    afficherOperation.value= ""
    afficherResultat.value = ""
 }

 function effacerUnElement(){
  let affichage = afficherOperation.value
  let nouvelleAffichage = affichage.slice(0,-1)
  afficherOperation.value = nouvelleAffichage
 }
function calculer() {
  if (afficherOperation) {
   try {
    let resultat = eval(afficherOperation.value);
    afficherResultat.value  = resultat;
   } catch (e){
    afficherResultat.value  = "Erreur";
    console.log(e)

   }
  } else{
    afficherResultat.value  = "Erreur";
    console.log(afficherOperation)
  }
  afficherOperation.value = ''
}

