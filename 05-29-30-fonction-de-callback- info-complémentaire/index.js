// Comment fonctionne une function de callback?
{
const func01 = ()=>{
    console.log("func01");
};
const func02 = ()=>{
    console.log("func02");
};

// Ajout d'un paramètre à la function03:
const func03 = (parametre)=>{
    console.log(parametre + "`je suis func03`");
};

// Placer le paramètre de la function03 en tant qu'argument dans la function principal (callback):
const principal =(parametre, callback)=>{
    console.log("je suis la function principal (callback)"); 
    callback(parametre);
};
    
principal("`je suis le parametre de 'func03' placé comme argument dans la function principal (callback)`", func03);
}

// Exemple simple de fonction de callback:
{
function salutation(nom) {
    alert ("Bonjour " + nom);
};

function récupération(callback){
    let nomInput = prompt ("Entrez votre nom");
    callback(nomInput);
};
// récupération(salutation); 
}