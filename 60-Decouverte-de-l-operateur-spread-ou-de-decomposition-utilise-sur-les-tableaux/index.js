//L'utilisation de l'opérateur spread permet de décomposer les valeurs à l'intérieure de la variables (tableaux):
console.log("1er exemple:"); 
let array01 = [1, 2, 3];
console.log(array01);
console.log("avec l'opérateur spread:");
console.log(...array01);

//2e exemple:
console.log("2e exemple: array01 est décomposé à l'intérieure de array02:"); 
let array02 = [34, 76, 98, ...array01, 23, 56]
console.log(array02);

//Cré&tion d'une fonction:
function somme (x,y,z) {
    return console.log(x + y + z);
}

//L'opérateur spread permet de placer un tableau comme argument dans une fonction:
console.log("Somme de array [1, 2, 3] placer en argument dans une function avec l'opérateur spread:")
somme(...array01);

//Fusions de deux tableaux:
let array03 = [1, 3, 5];
let array04 = [7, 9, 11];
array03.push(array04);
console.log("Fusion avec la méthode push() sans l'opérateur spread:")
console.log(array03);

let array05 = [1, 3, 5];
let array06 = [7, 9, 11];
array05.push(...array06);
console.log("Fusion avec la méthode push() et l'opérateur spread:")
console.log(array05);

let array07 = [1, 3, 5];
let array08 = [7, 9, 11];

let array09 = [...array07, ...array08];
console.log("Fusion avec l'opérateur spread dans un nouveau tableau:")
console.log(array09);

let array10 = [1, 3, 5];
let array11 = [7, 9, 11];

let array12 = [array10, array11];
console.log("Fusion sans l'opérateur spread dans un nouveau tableau:")
console.log(array12);

console.log("Copie d'un tableau:");
let array13 = [1, 3, 5];
let array14 = array13;
array14.push(7);
//Les tableaux sont des objets, il fonctionnent par références.
console.log(array13);
console.log(array14);

//Pour copier un tableau, creer un nouveau tableau, puis inserer celui que l'on veut copier avec le spread opérateur:
//Exemple:
console.log("Bonne manière de faire pour la copie d'un tableau:");
let array15 = [1, 3, 5];
let array16 = [...array15];
array16.push(7);
console.log(array15);
console.log(array16);