function saludar() {
    console.log('Hola mundo');
    return 1;
}

//funcion anónima - no hay manera de que ese nombre se pueda reutilizar.
const saludar2 = function(){
    console.log('Hola Mundo')
}

const saludarNombre = function(nombre){
    console.log('Hola '+nombre)
};

//funciones flecha
const saludarFlecha = (nombre) => {
    console.log('Hola flecha '+nombre)
}

valor = saludar();
console.log(valor);

saludar2();
saludarNombre('David');
saludarFlecha('David');

function sumar(a,b) {
    return a + b
}

const sumar2 = (a, b) => {
    return a+b;
}

const sumar3 = (a,b) => a+b;

function getAleatorio() {
    return Math.random();
}

const aleatorio = () => Math.random(); // devuelve un número aleatorio entre 0 y 1

console.log(sumar3(2,2));
console.log(aleatorio());
