const altura = 170;
const altura_mts = altura / 100;
const peso_kg = 70.55;

const alturaMtsUp = Math.ceil(altura_mts);
const pesoKgDown = Math.floor(peso_kg);

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

// Test
console.log(alturaMtsUp);
console.log(pesoKgDown);
console.log(sonIguales);
