let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo: ', juegos.length);
console.log('Primero: ', juegos[0]);
console.log('Ultimo: ', juegos[juegos.length - 1]);

//foreach
juegos.forEach(
    (elemento, indice, arr) => {
        console.log(elemento, indice, arr);
    }
)

//añadir - push
let nuevaLongitud = juegos.push('F-Zero');
console.log(nuevaLongitud, juegos);

//añadir al principio - unshift
juegos.unshift('Fire Emblem');
console.log(juegos);

//borrar último elemento - pop 
let borrado = juegos.pop()
console.log(borrado, juegos);

//borrar uno en particular - splice
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegos, juegosBorrados});

//saber posición de un juego - indexOf. Si regresa -1 es que no lo encontró.

let metroidIndex = juegos.indexOf('Metroid');
console.log('Metroid Index: ',metroidIndex);