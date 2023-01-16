let duplication = document.querySelector("p:nth-child(2)");

let clone = duplication.cloneNode();

clone.innerHTML = "<strong>L'affichage du clonage peut se faire de 2 manières:</strong><br><br>document.body.appendChild(clone);<br>duplication.appendChild(clone);<br><br><strong>A SAVOIR:</strong> La méthode '.cloneNode();' par défaut clone l'élément sans son contenu. Il est possible de cloner les descendants de l'élément en indiquant la valeur <strong>'true'</strong> dans les paramètres de la méthode:<br><br> <strong>Exemple:</strong> ... .cloneNode(<strong>true</strong>);";

document.body.appendChild(clone);
// duplication.appendChild(clone);

//Contrôle:
// console.log(duplication);
// console.log(clone);