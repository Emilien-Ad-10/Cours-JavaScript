let lettres = ["a", "b", "c", "d", "e", "f", "g"];

console.log(lettres);

let majuscules = lettres.map(lettres => {
    return lettres.toUpperCase();
});

console.log(majuscules);

/* */

let ventes = [15, 30, 45, 60, 75, 90, 105];

console.log(ventes);

let superVentes = ventes.map( vente => {
    return vente * 3;
});

console.log(superVentes);

/* Multiplier par deux: 
1er méthode: */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros);

let numerosDoubles = numeros.map(numero => {
    return numero * 2;
});

console.log(numerosDoubles);

/* Deuxième méthode: */

function multiplication (x) { 
    return x * 3};

console.log(numeros.map(multiplication));