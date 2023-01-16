(function(){
let lien = document.createElement("a");
let paragraphes = document.querySelectorAll("p");
lien.setAttribute("href", "#");
lien.innerHTML = "   lire la suite...";

paragraphes[0].appendChild(lien);

function disparition(){
    for (let i = 0; i < paragraphes.length; i++) {
        if (i === 0){
            continue
        }else if(i >= 1){
            paragraphes[i].style.display = "none";
        }
    }
}
console.log(paragraphes);
console.log(paragraphes.length);
disparition();

function apparition(){
    for (let i = 0; i < paragraphes.length; i++) {
        paragraphes[i].style.display = "block";
    }
    this.remove();
}

lien.addEventListener("click", apparition);
})();