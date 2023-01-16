{
let h1 = document.querySelector("h1");

//L'évenement mouseover intervient lorsque la souris se trouve sur l'élement:
h1.addEventListener("mouseover", () => {
    h1.style.color = "#222";
    h1.style.background = "#efef0e";
    h1.style.padding = "0.5%";
    h1.style.boxShadow = "3px 5px 12px #222";
});

//L'évenement mouseout intervient lorsque la souris se trouve en dehors de l'élement:
h1.addEventListener("mouseout", () => {
    h1.style.color = "#efef0e";
    h1.style.background = "#222";
    h1.style.padding = "0.5%";
    h1.style.boxShadow = "3px 5px 12px #222";
});
}