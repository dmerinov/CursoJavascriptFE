//Son como los diccionarios en python
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        long: -118.70
    },
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'Ultima-pelicula': "Infinity War"
};

console.log('Nombre ', personaje.nombre);
console.log('Nombre ', personaje['nombre']);
console.log('Edad ', personaje['edad']);
console.log('Coords ', personaje['coords']);
console.log('Coords ', personaje.coords.lat);
console.log('Nº de trajes: ',personaje.trajes.length);
console.log('Último traje: ',personaje.trajes[personaje.trajes.length - 1]);
const x = 'vivo'
console.log('vivo?: ',personaje[x]);
console.log('ultima pelicula: ',personaje["Ultima-pelicula"]);

//Más detalles
//borrar propiedad de objeto

delete personaje.edad
console.log(personaje);

//Meter propiedades de manera dinámica
personaje.casado = true;

//trabajar como si fuera un arreglo
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//para no poder mutar el objeto, const solo funciona sobre el objeto, no a sus propiedades. Se usa freeze.
//La dirección no se ve afectada, habría que hacer otro freeze
Object.freeze(personaje);
personaje.dinero = 12312312;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades);
console.log(valores);