let test = document.querySelector("#test");

//L'évenement onblur intervient lorque l'on pert le focus de l'élement:
//Exemple avec un champ de saisie d'un formulaire:
test.onblur = () => {
    alert("Vous êtes en dehors du champs de saisie test");
};

console.log(test);