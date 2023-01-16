// Ajouter des données dans le local storage:
localStorage.setItem("nom", "O'conner");
localStorage.setItem("prenom", "brian earl spilner");
localStorage.setItem("nationalite", "americaine");
localStorage.setItem("genre", "masculin");
localStorage.setItem("metier", "FBI");
localStorage.setItem("film", "fast and furious");

// Récupération des données depuis le local storage:
let data0 = localStorage.getItem("nom");
let data1 = localStorage.getItem("prenom");
let data2 = localStorage.getItem("nationalite");
let data3 = localStorage.getItem("genre");
let data4 = localStorage.getItem("metier");
let data5 = localStorage.getItem("film");

console.log(data0);
console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);
console.log(data5);

// Supprimer des données dans le local storage:
localStorage.removeItem("métier");
localStorage.removeItem("prénom");

// Supprimer toutes les données dans le local storage:
localStorage.clear();