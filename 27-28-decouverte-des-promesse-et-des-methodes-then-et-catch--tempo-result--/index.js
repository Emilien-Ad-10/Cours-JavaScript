// déclaration d'une promesse:
let promesse = new Promise((resolve, reject) =>{
    //Instruction:
    let operation = ((8/2*(2+2)+2)*2)/18-2;
    let resultat = operation;
    //console.log(resultat);
    //Condition:
    if(resultat === 0){
        //temporisation:
        setTimeout(() => {
            resolve("promesse résolue, resultat est bien strictement égale à 0");
        }, 3000)
    }else{
        reject("promesse rejetée, resultat n'est pas strictement égale à 0");
    }
});

console.log(promesse);

promesse.then((res) =>{
    console.log(res);
});

promesse.catch((err) =>{
    console.log(err);
});