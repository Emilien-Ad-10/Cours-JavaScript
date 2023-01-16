// setTimeout()
{
const TestTimer = 3000;
const AttenteTimer = 1000;
const ResultatTimer =3000;
const FelicitationTimer = 1000;     

const test = document.querySelector("#test");
const attente = document.querySelector("#attente");
const resultat = document.querySelector("#resultat");
const felicitation = document.querySelector("#felicitation");

const methode = setTimeout(() =>{
    console.log(test.innerHTML = "test de la méthode 'setTimeout()'");
    setTimeout(() =>{
        console.log(attente.innerHTML = "Veuillez patienter pendant l'éxécution de la méthode...");
        setTimeout(() =>{
            console.log(resultat.innerHTML = "Le test de la méthode 'setTimeout()' est un succès");
            setTimeout(() =>{
                console.log(felicitation.innerHTML = "FELICITATION^^");
            },FelicitationTimer);
        },ResultatTimer);
    },AttenteTimer);
},TestTimer);

//console.log(methode);
clearTimeout(methode);
}

// setInterval()
{
const timer = 3000;
let i = 0;

const methode = setInterval(() => {
    i++;
    if (i <= 5) {
        console.log("methode en cours...");
    }
    else{
        clearInterval(methode);
        console.log("methode terminée.");
    }
},timer);

//console.log(methode);
clearInterval(methode);
}