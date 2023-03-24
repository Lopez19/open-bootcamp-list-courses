/**
 * Operador .valueOf() -> retorna o valor primitivo de un objeto
 * NaN -> Infinity
 * Numeros Hexadecimais -> 0x
 * Convertir de String -> parseInt() e parseFloat()
 * Obtener Máximo y Mínimo -> Math.max() y Math.min()
 */

// Operador .valueOf() -> retorna o valor primitivo de un objeto
let x = new Number(123);
console.log(x.valueOf()); // 123

let str = new String("Hola");
console.log(str.valueOf()); // Hola

// NaN -> Infinity -> Not a Number
console.log(2 / "Hola"); // NaN
console.log(isNaN(2 / "Hola")); // true

// Numeros Hexadecimales -> 0x -> 0-9, a-f
let hex = "0x3a5b7";
console.log(parseInt(hex, 16));

// Convertir de String -> parseInt() e parseFloat() e Number()
let numero = "5.89";
let numero2 = 17.2;

console.log(typeof numero); // string
console.log(typeof numero2); // number

console.log(numero + numero2); // 5.8917.2 -> Error de concepto

console.log(Number(numero) + numero2); // 23.09 -> Correcto
console.log(parseInt(numero));
console.log(parseFloat(numero));

// Obtener Máximo y Mínimo -> Math.max() y Math.min()
let min_precision = Number.EPSILON;
let min_value_JS = Number.MIN_VALUE;
let max_value_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_value_JS);
console.log(max_value_JS);
