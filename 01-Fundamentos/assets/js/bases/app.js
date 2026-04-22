//console.log('hola mundo');

//VARIABLES - se alojan en el objeto global window.
let a = 10; //  forma actual de inicializar variables
var b= 10; // forma antigua de inicializar variables
const c = 10; //constante

//Polyfill -> función de javascript que permite usar funciones nuevas en versiones antiguas

let x = a + b;
console.log(x);

var miNombre = 'David'; // var global, se guarda en widnow -> mala práctica.