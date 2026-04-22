let a = 5;

if (a > 10) {
    console.log("a es mayor a 10");
} else {
    console.log("a es menor a 10");
}

console.log("fin de programa");

const hoy = new Date();
console.log(hoy.getDay());

// = asignación
// == los valores internos son los mismos
// === el tipo de los valores también son los mismos

//ejercicios, conseguir el día de la semana usando arrays.

const semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];
const diadehoy = semana[hoy.getDay()]
console.log(`Hoy es ${diadehoy}`);
