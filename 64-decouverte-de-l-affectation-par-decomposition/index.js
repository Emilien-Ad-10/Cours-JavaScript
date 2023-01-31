console.log("1er technique:");

const array = ["un", "deux", "trois"];
console.log(array);
const un = array[0];
const deux = array[1];
const trois = array[2];

console.log(un);
console.log(deux);
console.log(trois);


console.log("2e technique:");

const [Un, Deux, Trois] = array;
console.log(array);

console.log(Un);
console.log(Deux);
console.log(Trois);

console.log("assigner des valeurs: const [a, b, c] = [1, 2, 3];");
const [a, b, c] = [1, 2, 3];

console.log(a);
console.log(b);
console.log(c);

console.log("affectation du 'rest' dans un array:");
const array02 = [1, 45, "soixante", "orange", 90, "jaune", 86, "bleu"];
console.log(array02);

console.log("[d, e, h, j, ...rest] = array02;");
[d, e, h, j, ...rest] = array02;
console.log(rest);

console.log("[,,, ...rest02] = array02;");
[,,, ...rest02] = array02;
console.log(rest02);