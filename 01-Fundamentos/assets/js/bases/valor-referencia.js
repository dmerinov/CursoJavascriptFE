let a = 10;
let b = a;

console.log(a, b);
a = 30;
console.log(a, b);

let juan = {nombre: 'Juan'};
let ana = juan;

console.log(juan, ana);
ana.nombre = "ana"
console.log(juan, ana); // como se pasa por referencia juan pasa a ser ana también.

const cambiaNombre = ({...persona}) => { // el spread rompe la relación entre objetos cuando se igualan por referencia
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

//cuando hay que crear una copia del objeto se pone entre llaves.

let juan2 = {nombre: 'Juan'};
let ana2 = {...juan};

console.log(juan2, ana2);
ana.nombre = "ana"
console.log(juan2, ana2); // como se pasa por referencia juan pasa a ser ana también.

const frutas = ["Manzanas","Peras","Piña"];
//const otrasFrutas = [...frutas]; ESTO ROMPE RELACIÓN ENTRE REFERNCIAS
const otrasFrutas = frutas.slice() //ESTO TAMBIÉN
otrasFrutas.push("Mango");
console.table({frutas, otrasFrutas});