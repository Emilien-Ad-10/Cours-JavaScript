//Création d'un nouveau titre h2:
let newH2 = document.createElement("h2");
newH2.innerHTML = "J'apprend javascript";

//Sélectionner l'ancien h2:
let oldH2 = document.querySelector("h2");

//Sélectionner le parent de l'élément à remplacer:
let parent = document.querySelector("body");

//Effectuer le remplacement:
parent.replaceChild(newH2, oldH2);

//Contrôle:
// console.log(newtitle);
// console.log(replace);
// console.log(parent);