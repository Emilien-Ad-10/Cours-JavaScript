let div = document.querySelector("div");
let span1 = document.querySelector("span:nth-child(1)");
let span2 = document.querySelector("span:nth-child(2)");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    div.className = "div-h1";
    span1.className = "className";
    span2.className = "css";
    btn.className = "btn";
});

//Contrôle:
// console.log(div);
// console.log(span1);
// console.log(span2);
// console.log(btn);