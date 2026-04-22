//const arr = new Array(10); // existe pero no es muy común.
let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});
console.log(videoJuegos[0]);

let arrCosas = [
    true,
    123,
    'Fernando',
    1+2,
    function(){},
    () => {},
    {a: 1},
    ['X','Megaman','0','Dr.Light']
];
console.log(arrCosas);
console.log(arrCosas[0]);
console.log(arrCosas[2]);

//obtener el último elemento del arreglo de dentro del arreglo
console.log(arrCosas[7][3]);
