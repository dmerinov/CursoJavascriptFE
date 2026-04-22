const heroes = ["Batman", "Superman", "Wonderwoman","Aquaman"];

for (let index = 0; index < heroes.length; index++) {
    const element = heroes[index];
    console.log(element);
}

console.warn('forin')
for (const heroe in heroes) {
    if (!Object.hasOwn(heroes, heroe)) continue;
    
    const element = heroes[heroe];
    console.log(heroes[heroe]);
}

console.warn('forof')
for (const hero of heroes) {
    console.log(hero);
}