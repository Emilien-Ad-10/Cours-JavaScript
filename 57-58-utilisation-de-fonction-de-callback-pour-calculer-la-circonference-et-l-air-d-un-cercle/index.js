//Fonction secondaire:
//calcul de la circonférence d'un cercle (périmètre du cercle: Pi*D)
function circonférence(D){
    return Math.PI * D;
}

//calcul de l'aire d'un cercle (surface d'un cercle: (Pi*D^2)/4)
//Math.PI: retourne 3.14.
//Math.pow: retourne la valeur de X à la puissance Y.
function surface(D){
    return (Math.PI*Math.pow(D, 2)/4);
}

//calcul du volume d'un cone: (PI*r^2*(h/3))
function volumedunCone(rayon, hauteur){
    return Math.PI * Math.pow(rayon, 2) * (hauteur / 3);
}

//Fonction principale 01:
function calcul(D, callback){
    return console.log(callback(D));
}

//Fonction principale 02:
function calculduVolumeduCone(callback, rayon, hauteur){
    return console.log(callback(rayon, hauteur));
}


console.log("circonférence du cercle:");
calcul(3, circonférence);
console.log("air du cercle:");
calcul(3, surface);
console.log("volume du cone:");
calculduVolumeduCone(volumedunCone, 1, 1);

//Exercice simple (vidéo 58)
//Fonction secondaire:
//addition:
function addition(a, b){
    return a + b;
}

//soustraction:
function soustraction(a, b){
    return a - b;
}

//multiplication:
function multiplication(a, b){
    return a * b;
}

//division:
function division(a, b){
    return a / b;
}

//Fonction principal:
//opération:
function operation(a, b, callback){
    return console.log(callback(a, b))
}

console.log("addition: 3 + 9:");
operation(3, 9, addition);
console.log("soustraction: 3 - 9:");
operation(3, 9, soustraction);
console.log("multiplication: 3 * 9:");
operation(3, 9, multiplication);
console.log("division: 3 / 9:");
operation(3, 9, division);