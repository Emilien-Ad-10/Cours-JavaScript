//Création d'un tableau:
const materiels =[
    "marteau",
    "tournevis",
    "visses",
    "rondelle",
    "ecrou",
];

//Afficher le tableau çi dessus dans la console:
console.table(materiels);

//Afficher la valeur de l'index 3 dans la console:
console.log(materiels[3]);

//Rajouter une valeur dans le tableau:
materiels[5] = "pince";
//Controle du rajout:
console.log(materiels);

//fonction fléchée:
const demande = () => {
    alert("Besoin d'un " + materiels[1] + " " + "et d'une " + materiels[2]);
};
demande();

//Utiliser .length pour obtenir la longueur du tableau:
console.log(materiels.length);

//Utiliser la méthode .sort() pour trier:
console.log(materiels.sort());