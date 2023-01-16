// Utilisation de la propriété onclick:
{
let btn = document.querySelector("#btn-1");

btn.onclick = () => {
    alert("Utilisation de la propriété 'onclick'");
}

console.log(btn);
}

// Utilisation de la méthode addEventListener():
{
let btn = document.querySelector("#btn-2");

btn.addEventListener("click", () => {
    alert("Utilisation de la méthode addEventListener()");
})

console.log(btn);
}