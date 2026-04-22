function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

function crearPersona2(nombre, apellido) {
    return {nombre, apellido}
} // esta es para cuando la propiedad se llama igual que el param.

const crearPersona3 = (nombre, apellido) => ({nombre, apellido}); //los () dicen que lo que regresas es el objeto, no el cuerpo de la función

const persona = crearPersona("David", "Merino");
const persona2 = crearPersona3("David", "Merino");
console.log(persona)
console.log(persona2)

function imprimeArgumentos(){
    console.log(arguments)
}

imprimeArgumentos("Fernando",1,2,3);

const imprimeArgumentos2 = (...args) => { //Una función de flecha no tiene el objeto argumentos, así que se le pasar un parametro rest
    console.log(args);
    return args;
}

imprimeArgumentos2("Fernando",1,2,3);

//para recuperar los argumentos de una función de flecha.
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(true,false,"Fernando","Hola");
console.log({casado, vivo, nombre, saludo})

const {apellido: nuevoApellido} = crearPersona("Fernando", "Herrera");
console.log(nuevoApellido);

//destructuración de argumentos.
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron man',
    vivo: false,
    trajes: ['traje','traje 2']
}
const imprimePropiedades = ({nombre, codeName, vivo, edad = 0, trajes}) => {
    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(trajes);
}
imprimePropiedades(tony)