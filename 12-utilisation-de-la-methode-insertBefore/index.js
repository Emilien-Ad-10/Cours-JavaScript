//Création d'une balise li:
let li = document.createElement("li");
li.innerHTML = "La méthode <strong>Node.insertBefore()</strong> insère un nœud avant un nœud de référence en tant qu'enfant d'un nœud parent spécifié."

//Sélectionner la position:
let position = document.querySelector("li:nth-child(2)");

//Sélectionner le parent:
let parent = position.parentNode;

//Insérer la nouvelle balise:
parent.insertBefore(li, position);

//Contrôle:
// console.log(li);
// console.log(position);
// console.log(parent);