//Syntaxe de la méthode splice(): tableau.splice(indexDeDébut, nbreASupprimer, éléments)

const mois = ["Janvier", "Février", "Mai"];
console.log(mois);

console.log("Rajout d'une donnée dans le tableau après février:");
mois.splice(2, 0, "Mars", "Avril");
console.log(mois);

console.log("suppression d'éléments dans le tableau:");
mois.splice(3, 1);
console.log(mois);

console.log("suppression d'éléments dans le tableau avec un index négatif:");
mois.splice(-3, 1);
console.log(mois);