//La méthode slice() permet de modifier un tableau sans modifier l'original mais en renvoyant une copie de celui-çi modifié.

console.log("Application de la méthode slice() sur un tableau:");

const animaux = ["lion", "antilope", "buffle", "zèbre", "guépard", "girafe", "éléphant", "crocodile"];
console.log(animaux);

const newAnimaux = animaux.slice(0, 4);

console.log(newAnimaux);

//Application de la méthode sur une string.

console.log("Application de la méthode slice() sur une string:");

const string01 = "J'ai appris HTML, CSS avec les cours d'OpenClassrooms !!!";
console.log(string01);
const newString01 = string01.slice(12, 16);
const newString02 = string01.slice(18, 21);
console.log(newString01);
console.log(newString02);

const string02 = "Pour commencer l'apprentissage de React, il faut des bases solides en JavaScript natif";
console.log(string02);
const newString03 = string02.slice(34, 39);
const newString04 = string02.slice(70, 80);
console.log(newString03);
console.log(newString04);

/***** ENTRAINEMENT *****/

/*const array = [];
array.push(newString01, newString02, newString04, newString03);
console.log(array);

let ul = document.querySelector('ul');

for(let i = 0; i<array.length; i++){
    console.log(array[i]);
    let li = document.createElement('li');
    li.innerText = array[i];
    ul.appendChild(li);
}*/