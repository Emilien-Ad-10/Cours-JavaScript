//BOUCLE WHILE:
//syntaxe:
{
let i = 0;
while ( i < 11) {
    //console.log(i);
    if(i == 3) {
        break
    }
    i++;  
};
//console.log("break");
}
// Tant que la CONDITION est vrai alors ...

//BOUCLE FOR:
//syntaxe:
{
for (let i = 0; i < 11; i++) {
    //console.log(i);
};
}

//EXEMPLE avec un array (tableau):
{
let modeles = ["Impala SS", "Corvette", "Mustang", "Pontiac Grand Prix"];

for (let i = 0; i < modeles.length; i++){
    let modele = modeles[i]
    //console.log("Voici une " + modele);
};
}

//Pour afficher les différents modeles EN PARTANT DE LA FIN du tableau:
{
let modeles = ["Impala SS", "Corvette", "Mustang", "Pontiac Grand Prix"];
    
for (let i = modeles.length - 1; i >= 0 ; i--){
    let modele = modeles[i]
    //console.log("Voici une " + modele);
};
}

//EXERCICE:
{
//Creer une boucle pour vérifier si un nombre est un nombre premier:
//Un nombre premier est un nombre qui est divisible uniquement par 1 et lui même. Il n'est donc pas premier s'il est divisible par un nombre compris entre 2 et lui même - 1.
let nombre = 97
let nombrePremier = true
for (let i = 2; i < nombre; i++){
    if(nombre % i === 0){
        nombrePremier = false
        //console.log(`ce nombre n'est pas premier`)
        //console.log(nombre + ` est divisible par ` + i)
        break
    }
    
};
if(nombrePremier){
    //console.log(nombre + ` est premier`);
}
}

//EXERCICE n°2:
{
//Afficher les muscleCars qui font moins de 450 chevaux:
//Pour chaque muscleCar, si la puissance est inférieure à 450, afficher le modele:  
let muscleCars = [{
    modele: "Impala SS",
    puissance: 400
}, {
    modele: "Corvette",
    puissance: 430
}, {
    modele: "Mustang",
    puissance: 460
}];

for (let i = 0; i < muscleCars.length; i++) {
    let muscleCar = muscleCars[i]
    if(muscleCar.puissance < 450){
        //console.log(muscleCar.modele + ` possède moins de 450 ch.`);
    }
    //else console.log(muscleCar.modele + ` possède plus de 450 ch.`);
};
}

// EXERCICE n°3:
{
//Afficher à l'aide d'une boucle for si un chiffre est pair ou impair:
//for (let i = 1; i < 11; i++)
    //if(i % 2 == 0)
    //console.log(i + " est pair")
    //else console.log(i + " est impair")    
}