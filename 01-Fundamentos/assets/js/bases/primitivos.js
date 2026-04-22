//Strings
let nombre = 'Peter Parker';
console.log(nombre);
nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;

console.log(typeof(nombre));

//Booleano
let esMarvel = true;

//Numeros
let edad = 18;
console.log(typeof(nombre));
edad = 18.00; // mismo tipo. Number.
console.log(typeof(nombre));

//Undefined
let superPoder;
console.log(typeof superPoder);

//Null
let soyNull = null; // sale object.

//Symbol - identifica propiedades de manera única
let symbol1 = Symbol('a');
let symbol2 = Symbol('a'); // símbolos diferentes aunque tengan lo mismo

console.log(symbol1);
console.log(symbol2);
console.log(symbol1 === symbol2);

