let personne = {
    nom: "Dee",
    prénom: "John",
    genre: "masculin",
    age: "49ans",
    taille: 1.92,
    nationalité: "Américaine",
    Bonjour: function () {
        alert ("Bonjour Mr " + this.prénom + " " + this.nom);
    }
}; 

personne.Bonjour();