{
    
let body = document.querySelector("body");    
let btn01 = document.createElement("button");
let btn02 = document.createElement("button");

btn01.setAttribute("class", "btn01");
btn02.setAttribute("class", "btn02");

btn01.innerHTML = "fonction nommée";
btn02.innerHTML = "fonction fléchée";

body.appendChild(btn01);
body.appendChild(btn02);

//console.log(body);

//fonction nommée:
btn01.addEventListener("click", () => {
    function alerte () {
        alert(`Ceci est une fonction nommée: 
            function alerte () {
                alert(fonction nommée);
            };   
            alerte();`);
    };   
    alerte();        
});

//fonction fléchée:    
btn02.addEventListener("click", () => {
    let alerte = () => {
        alert(`Ceci est une fonction fléchée:
            let alerte = () => {
                alert("fonction fléchée");
            };
            alerte();`);
    };
    alerte();    
});

}