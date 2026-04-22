const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('not');
console.log(true);
console.log(!true);
console.log(regresaFalse());
console.log(regresaTrue());

console.warn('and');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(regresaFalse() && regresaTrue()); // solo ejecuta la izq.
console.log(regresaTrue() && regresaFalse()); // ejecuta las 2 porque la primera es true.

console.warn('or');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(regresaFalse() || regresaTrue()); // ejecuta las dos
console.log(regresaTrue() || regresaFalse()); // ejecuta solo la primera

//Asignaciones
console.warn('Asignaciones');


const soyUndefined = undefined; 
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo'; // se queda con el último porque como es true sigue evaluando
const a2 = 'Hola' && 'Mundo'; // Mundo

const a3 = soyFalse || 'Ya no soy falso';
console.log(a3);
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso' || true; // el true ya no se ejecuta porque se queda con el que no es falso y es valor permitido.
console.log(a4);
