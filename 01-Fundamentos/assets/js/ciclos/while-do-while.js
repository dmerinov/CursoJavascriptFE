const carros = ['Ford', 'Mazda', 'Honda'];

let i = 0;
let j = 0;
// while (i< carros.length) {
//     console.log(carros[i]);
//     i++;
// }

//undefined y null se consideran nulos, así que se puede usar

while (carros[i]) {
    console.log(carros[i]);
    i++;
}

console.warn("Do while");

do {
    console.log(carros[j])
    j++
} while (carros[j]);