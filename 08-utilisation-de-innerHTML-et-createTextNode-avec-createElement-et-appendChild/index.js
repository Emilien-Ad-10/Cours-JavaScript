// La propriété innerHTML:
let h2 = document.createElement("h2");

h2.innerHTML= "J'apprend javascript pas à pas";

let body = document.querySelector("body");

body.appendChild(h2);

// La méthode createTexteNode():
let paragraphe = document.createElement("p");

let texte = document.createTextNode("C'est passionnant mais pas évident...");

paragraphe.appendChild(texte);

body.appendChild(paragraphe);