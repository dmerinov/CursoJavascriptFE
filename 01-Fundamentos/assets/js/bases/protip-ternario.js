// const elMayor = (a, b) => {
// return (a>b) ? a : b
// }

const elMayor = (a, b) => (a>b) ? a : b;

const tieneMembresía = (miembro) => miembro ? '2 dólares' : '10 dólares'

console.log(elMayor(1,2));
console.log(tieneMembresía(true));
console.log(tieneMembresía(false));