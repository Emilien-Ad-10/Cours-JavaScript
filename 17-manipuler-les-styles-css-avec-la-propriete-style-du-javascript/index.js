const div = document.querySelector("div");
const css = document.querySelector("#css");
const style = document.querySelector("#style");
const JS = document.querySelector("#JS");
const btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    div.style.border = "5px solid #f57f3a";
    div.style.background = "#aaaff7";
    css.style.color = "#0004fc";
    style.style.color = "#f57f3a";
    JS.style.color = "#f57f3a";
    btn.style.color = "#aaaff7";
    btn.style.background = "#f57f3a";
});