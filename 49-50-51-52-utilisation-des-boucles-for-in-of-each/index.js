{
//boucle for: permet de parcourir un array (tableau).
//array: 
let main = [
    "pouce",
    "index",
    "majeur",
    "annulaire",
    "auriculaire",
];

//fonction: 
function boucleFor() {
    // boucle for:
    for (let i = 0; i < main.length; i++) {
        console.log(`Une main possède un ${main[i]}`);
    };
};
// Appel de la fonction:
boucleFor();
}

{
// boucle for...in:
// objet:
const muscleCar = {
    ID_vehicule: "CC-7549568",
    Fabricant: "Chevrolet",
    Modele: "Impala SS",
    Annee: 1967,
    Transmission: "automatique",
    Puissance: 466,
    Couleur_ext: "noir métallique",
    Couleur_int: "rouge bordeaux",
    Prix: 65000,
};

console.log(muscleCar);

//fonction:
function boucleForIn(){
    //boucle for...in:
    for(const propriete in muscleCar) {
        console.log(`${propriete}: ${muscleCar[propriete]}`);
    };
};
//Appel de la fonction:
boucleForIn();
}

{
//boucle for...of:
//Array:
let main = [
    "pouce",
    "index",
    "majeur",
    "annulaire",
    "auriculaire",
];

console.log(main);

//fonction:
function boucleForOf() {
    //boucle for...of:
    for(const valeur of main) {
        console.log(valeur);
    };
};
//Appel de la fonction:
boucleForOf();

//Exemple sur une string (chaine de caractère):
const boucle = "Les boucles en JavaScript";

console.log(boucle);

//fonction:
function boucleString() {
    //boucle for...of: 
    for(const string of boucle) {
        console.log(string);
    };
};
//Appel de la fonction:
boucleString();
}

{
//méthode forEach();
//Array:
let main = [
    "pouce",
    "index",
    "majeur",
    "annulaire",
    "auriculaire",
];

console.log(main);

//Utilisation de la méthode:
main.forEach((string, index) => {
    console.log(`${string} a pour index ${index}`);
});
}