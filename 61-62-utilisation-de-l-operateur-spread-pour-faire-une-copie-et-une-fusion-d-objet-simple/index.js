//Copier un objet s'effectue de la même manière qu'un tableau:
let perso01 = {
    nom: "Doe",
    prenom: "John",
    age: 36
}

console.log("L'objet perso01:");
console.log(perso01);

let perso02 = {
    ...perso01,
}

console.log("L'objet perso01 copier dans l'objet perso02 avec le spread opérateur:");
console.log(perso02);

console.log("Ajout d'une propriété et d'une valeur à l'objet perso02:");
perso02.taille = 1.8;

console.log(perso02);

console.log("L'objet perso01 n'a pas subit de modification:")
console.log(perso01);

//Vidéo 62: fusionner deux objets simples:
console.log("Vidéo 62: fusionner deux objets simples:");
let objet01 = {
    a: 1,
    b: 2,
    c: 3
}
console.log("objet01:");
console.log(objet01);

let objet02 = {
    d: 4,
    e: 5,
    f: 6
}
console.log("objet02:");
console.log(objet02);

console.log("Fusion de objet01 et objet02 avec le spread opérateur:");
let objet03 = {
    ...objet01,
    ...objet02
}

console.log(objet03);