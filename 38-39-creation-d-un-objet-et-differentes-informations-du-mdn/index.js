// Créer un objet:
let voiture = {
    fabricant: "Ford",
}

// 2 façons d'ajouter un ou des attribut(s) à cet objet: 
voiture.modèle = "Mustang"

voiture["année"] = 1969

//console.log(voiture);

//L'objet natif Object et quelques méthodes:
//console.log(Object);

// Manipulation d'objet sur JSONPlaceholder:
let promise = fetch("https://jsonplaceholder.typicode.com/users");
promise.then( async (response) => {
    try{
        let data = await response.json();
        //console.log(data);

        // console.log(Object.keys(data));
        // console.log(Object.entries(data));
        // console.log(Object.values(data));
        
        //La méthode defineProperty permet de définir une nouvelle propriété ou de modifier une propriété existante directement sur un objet. La méthode renvoie l'objet modifié.
        Object.defineProperty(data[1], "name",{
            writable: true,
        });
        data[1].name = "Chris Curtis";
        console.log(data[1].name);

        //La méthode permet d'accéder au attributs d'un propriété d'un objet:
        let descriptor = Object.getOwnPropertyDescriptor(data[1], "name");
        //console.log(descriptor);
        
    }catch{err => console.log(err)};    
}).catch( err => console.log(err));