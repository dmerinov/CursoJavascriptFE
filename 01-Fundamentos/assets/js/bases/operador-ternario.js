const dia = 7; // 0:Domingo...
const horaActual = 10;

let horaApertura;
let mensaje; // esta abierto, esta cerrado. abrimos a las XX

horaApertura = ([0,6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? `está abierto` : `está cerrado, abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});

