{
let envoie = document.querySelector("button");

envoie.addEventListener("click", () =>{
    // Récupération des données de la partie "genre" du formulaire :
    let genre = document.querySelectorAll("input[name='genre']");
    for (i = 0; i < genre.length; i++){
        if(genre[i].checked === true){
            choix = genre[i].value;
        }
    }

    // stockage dans le local storage,
    // Récupération de la suite des données:
    localStorage.setItem("genre", choix);
    localStorage.setItem("nom", document.querySelector("#nom").value);
    localStorage.setItem("prenom", document.querySelector("#prenom").value);
    localStorage.setItem("commentaire", document.querySelector("#formulaire").value);

    console.log(genre);
    console.log(document.querySelector("#nom").value);
    console.log(document.querySelector("#prenom").value);
    console.log(document.querySelector("#formulaire").value);

    // Récupération et affichage des données:
    document.querySelector("#genre");
    document.querySelector("#lenom");
    document.querySelector("#leprenom");
    document.querySelector("#commentaire");

    console.log(envoie);
    console.log(document.querySelector("#genre").innerHTML = localStorage.getItem("genre"));
    console.log(document.querySelector("#lenom").innerHTML = localStorage.getItem("nom"));
    console.log(document.querySelector("#leprenom").innerHTML = localStorage.getItem("prenom"));
    console.log(document.querySelector("#commentaire").innerHTML = localStorage.getItem("commentaire"));
});
}