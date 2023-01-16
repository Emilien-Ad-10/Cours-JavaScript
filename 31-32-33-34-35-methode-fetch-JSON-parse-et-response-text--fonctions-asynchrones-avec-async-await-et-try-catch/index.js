{
// Méthode fetch dans une fonction asynchrone:
async function fetchusers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();
  console.log(response);
  return response;
};
fetchusers();  
}

{
const nom = document.querySelector("#name");
const prenom = document.querySelector("#username");
const ville = document.querySelector("#city");
const latitude = document.querySelector("#lat");
const longitude = document.querySelector("#lng");
const rue = document.querySelector("#street");
const chambre = document.querySelector("#suite");
const telephone = document.querySelector("#phone")
const compagnie = document.querySelector("#company");
const bouton = document.querySelector("button");
const chargement = document.querySelector("#chargement");
const parent = document.querySelector("article");

// Méthode '.fetch()':
const methode = fetch('https://jsonplaceholder.typicode.com/users/')
methode.then(async (response) =>{
  console.log(response);
  
  try{
  const userstxt = await response.text();
  users = JSON.parse(userstxt);
  console.log(users);
    
  const name = users[1].name;
  const username = users[1].username;
  const city = users[1].address.city;
  const lat = users[1].address.geo["lat"];
  const lng = users[1].address.geo["lng"];
  const street = users[1].address.street;
  const suite = users[1].address.suite;
  const phone = users[1].phone;
  const company = users[1].company.name;

  bouton.addEventListener("click", () =>{
    setTimeout(() =>{
      chargement.innerHTML = "Chargement...";
    setTimeout( () =>{
      parent.removeChild(chargement); 
      nom.innerHTML = name;
      prenom.innerHTML = username;
      ville.innerHTML = city;
      latitude.innerHTML = lat;
      longitude.innerHTML = lng;
      rue.innerHTML = street;
      chambre.innerHTML = suite;
      telephone.innerHTML = phone;
      compagnie.innerHTML = company;
      }, 3000);  
      }, 0);
    });
  } 
  catch(erreur) {console.log(erreur);};   

}).catch((erreur) =>{
  console.log(erreur);
});
}