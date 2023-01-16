//Création d'un objet dans un objet:
let personnage = {
    nom: "Camoran",
    prenom: "Mankar",
    age: "inconnu",
    mensuration: {
        taille: 1.80,
        poid: "85kg"
    },
    race: "haut elfe",
    test: function func(parametre){console.log(`Ce personnage provient du jeu ${parametre}`)} 
};

console.log(personnage);
console.log(personnage.nom);
console.log(personnage["prenom"]);
console.log(personnage.mensuration.taille);
console.log(personnage["mensuration"].poid);
personnage.test("Oblivion");

let array = [];
for (propriete in personnage){
    let props = `${propriete}: ${personnage[propriete]}`;
    console.log(props);
    array.push(props);
    console.log(array);
}

//Différentes façons d'ajouter une propriété à l'objet:
Object.defineProperty(personnage, "jeu", {value: "Oblivion"});
personnage.couleurDePeau = "blanche";
personnage["couleur des yeux"] = "noir";

//Remplacer la valeur d'une clé:
personnage.couleurDePeau = "grise";
personnage["couleur des yeux"] = "rouge-sang";

console.log(personnage);