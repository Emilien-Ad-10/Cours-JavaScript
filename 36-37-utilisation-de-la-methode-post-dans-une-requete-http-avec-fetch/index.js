// Nouvel utilisateur: Création d'un objet:
const newUsers = {
    name: "Kurtis",
    username: "Chris",
    age: "38 ans",
    nationality: "Américan",
    city: "New-York",
};

// Utilisation de la méthode POST:
const promise = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(newUsers),
    headers:{
        "Content-Type": "application/json"
    }
});

// Récupération de l'objet et des données:
promise.then( async(response)=>{
    try{
        console.log(response);
        const data = await response.json();
        console.log(data);
        const name = data.name;
        const username = data.username;
        const age = data.age;
        const nationality = data.nationality;
        const city = data.city;

        console.log(name);
        console.log(username);
        console.log(age);
        console.log(nationality);
        console.log(city);

    }catch{err => console.log(err)};    
}).catch(err => console.log(err));