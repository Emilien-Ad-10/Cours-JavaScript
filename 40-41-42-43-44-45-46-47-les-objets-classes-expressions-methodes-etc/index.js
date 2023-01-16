// Création d'une classe:
{
class MuscleCar {
    constructor (fabricant, modèle, année) {
        this.fabricant = fabricant;
        this.modèle = modèle;
        this.année = année;
    };
};

// Création d'une sous-classe avec extends et utilisation du mot-clé super:
class avis extends MuscleCar{
    constructor(fabricant, avis){
        super(fabricant);
        this.avis = avis;
    }
    affichageAvis(modèle){
        //console.log("La " + modèle + " de la marque " + this.fabricant + " " + "est une " + this.avis);
    };
};
const Avis01 = new avis("Chevrolet", "très bonne voiture");

Avis01.affichageAvis("Corvette");

// Appelle de plusieurs instances de classe pour créer des nouveaux objets:
let muscleCar01 = new MuscleCar(
    "Ford", 
    "mustang", 
    1970
);

let muscleCar02 = new MuscleCar(
    "Chevrolet",
    "Impala SS",
    1962,
);

let muscleCar03 = new MuscleCar(
    "Pontiac",
    "Grand Prix",
    1964,
);

//console.log(muscleCar01);
//console.log(muscleCar02);
//console.log(muscleCar03);
}

//Ajouter une méthode à une classe:
{
class MuscleCar {
    constructor(fabricant, modèle, année, couleur) {
        this.fabricant = fabricant,
        this.modèle = modèle,
        this.année = année,
        this.couleur = couleur
    }
// Méthode + argument:
    affichage(argument) {
        //console.log("Voici une " + this.fabricant + " " + this.modèle + " de" + " " + this.année + "." + " Elle est de couleur " + this.couleur + "." + argument);
    }
};

let muscleCar01 = new MuscleCar (
    "Chevrolet",
    "Corvette",
    1972,
    "jaune",
);

//console.log(muscleCar01);

// Appelle de la méthode + argument:
muscleCar01.affichage(" Argument: Véhicule en parfaite état, en vente à $65.000.");
}

//Expression de classe:
{
const MuscleCar = class {
    constructor (fabricant, modèle, année) {
        this.fabricant = fabricant;
        this.modèle = modèle;
        this.année = année;
    };
};
}

// accesseur (getter) dans une classe:
{
const vehicule = {
    array: ["Ford mustang", "Chevrolet Impala SS", "Pontiac Grand Prix", "Chevrolet Corvette"],
    get MuscleCar () {
        if(this.array.length === 0){
            return undefined;
        }
        return this.array[this.array.length -1];
    }
}
//console.log(vehicule.MuscleCar);    
}
// mutateur (setter) et  accesseur (getter) dans une classe:
{
const vehicule = {
    set muscleCar(name) {
        this.array.push(name);
    },
    array:[],
    
    get muscleCar () {
        if(this.array.length === 0){
            return undefined;
        }
        return this.array[this.array.length -2];
    }
};
vehicule.muscleCar = "Ford Mustang";
vehicule.muscleCar = "Chevrolet Corvette";
vehicule.muscleCar = "Chevrolet Impala SS";
vehicule.muscleCar = "Pontiac Grand Prix";

//console.log(vehicule.array);
//console.log(vehicule.muscleCar);
}

//Les méthodes statiques:

//Les méthodes statiques sont utilisées lorsque la méthode ne s'applique qu'à la classe elle-même et pas à ses instances. Les méthodes statiques sont généralement utilisées pour créer des fonctions utilitaires.

//Le mot-clé static permet de définir une méthode statique d'une classe.

//METHODE STATIC NON COMPRISE!!!

//Méthode .random(): créer un nombre aléatoire sur l'intervalle [0-1]:
let nbre01 = Math.random();
//console.log(nbre01);

//Méthode .floor(): arrondit vers le bas à l'entier le plus proche:
let nbre02 = Math.floor(35.79);
//console.log(nbre02);

//_____________________________________________________________

// Déclaration d'une fonction: vidéo 43: 8.40 min:
{
function func(nombre) {
    return nombre * 3
}

const resultat = func(3);

//console.log(resultat);
}
// Déclaration d'une fonction récursive: vidéo 43: 12.40 min:
{
function factorielle(n){
    if
        ((n===0)||(n===1))
    return 1;
    else 
    return (n*factorielle(n-1));
}

let a, b, c, d, e;
a = factorielle(1);
b = factorielle(3);
c = factorielle(5);
d = factorielle(7);
e = factorielle(9);

//console.log(a, b, c, d, e);
}