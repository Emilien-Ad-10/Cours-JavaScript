//Utilisation de l'opérateur REST dans une fonction lorsque le nombre de paramètre est inconnu:
//previous = précédent
//current = courant / actuel
//current Value = valeur courante / actuelle

function somme (...parametres){
    return parametres.reduce((previous, current) => {
        return previous + current;
    })
}

console.log(somme(1, 3, 5, 7, 9));
//la console affiche: 25

//Affecter des éléments d'un tableau à une variable:
let array01 = ["HTML", 5, "CSS", 3, "JavaScript", "GIT", "GITHUB"];
console.log(array01);

let [a, b, c, d, ...array02] = array01;
console.log(array02);