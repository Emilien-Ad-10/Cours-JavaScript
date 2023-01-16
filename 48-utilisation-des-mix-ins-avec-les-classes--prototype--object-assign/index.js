class MuscleCar {
    constructor(fabricant, modèle, couleur, année, état, kilomètrage, prix, contact) {
        this.fabricant = fabricant;
        this.modèle = modèle;
        this.couleur = couleur;
        this.année = année;
        this.état = état;
        this.kilomètrage = kilomètrage;
        this.prix = prix;
        this.contact = contact;
    };
};

let mustang = new MuscleCar (
    "ford",
    "Mustang",
    "rouge",
    1970,
    "parfait état",
    138945,
    65000,
    "Contact.MuscleCarsPro@wanadoo.fr",
);

let impala = new MuscleCar (
    "Chevrolet",
    "Impala SS",
    "noir",
    1962,
    "parfait état",
    49375,
    55000,
    "Contact.MuscleCarsPro@wanadoo.fr",
);

let grandprix = new MuscleCar (
    "Pontiac",
    "Grand Prix",
    "blanche",
    1964,
    "parfait état",
    98575,
    60000,
    "Contact.MuscleCarsPro@wanadoo.fr",
);

console.log(mustang);
console.log(impala);
console.log(grandprix);

const suivi = {
    commande(vehicule) {
        console.log("Cette " + vehicule + " est réservée");
    },
    
    achat(vehicule) {
        console.log("Cette " + vehicule + " est vendue");
    },
    
    livraison(vehicule) {
        console.log("Cette " + vehicule + " est livrée");
    },
};

Object.assign(MuscleCar.prototype, suivi);

mustang.achat("Ford Mustang");
impala.livraison("Chevrolet Impala SS");
grandprix.commande("Pontiac Grand Prix");