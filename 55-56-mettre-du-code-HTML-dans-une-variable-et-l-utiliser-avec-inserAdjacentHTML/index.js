let li = document.querySelector("li");
//console.log(li);

let todoList = [
    {
        beforebegin:  "<li><span>'beforebegin'</span>: Avant l'élément lui-même.</li>",
        afterbegin: "<li><span>'afterbegin'</span>: Juste à l'intérieur de l'élément , avant son premier enfant.</li>",
        beforeend: "<li><span>'beforeend'</span>: Juste à l'intérieur de l'élément , après son dernier enfant.</li>",
        afterend: "<li><span>'afterend'</span>: Après l'élément lui-même.</li>"
    },
];

//console.log(todoList);

let ajoutText = `<li>
                    <p><span>Syntaxe</span>: élément.insertAdjacentHTML('position', text);</p>
                </li>`;

//console.log(ajoutText);

li.insertAdjacentHTML('afterend', ajoutText);

//Function pour inserer la todoList:
function affichage(position, valeur){
    li.insertAdjacentHTML(position, valeur);
};

affichage('afterend', todoList[0].afterend);
affichage('afterend', todoList[0].beforeend);
affichage('afterend', todoList[0].afterbegin);
affichage('afterend', todoList[0].beforebegin);