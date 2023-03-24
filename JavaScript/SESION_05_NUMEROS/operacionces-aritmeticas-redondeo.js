/**
 * Principales operaciones aritmeticas
 * Representacion de numeros em cadena de caracteres
 * Redondeo de numeros decimales
 */

let a = 3.5;
let b = 4.8;

/**
 * Operaciones aritmeticas
 */

// Suma (+)
console.log(a + b);

// Resta (-)
console.log(a - b);

// Multiplicacion (*)
console.log(a * b);

// Division (/)
console.log(a / b);

// Modulo (%)
console.log(a % b);

// Exponente (**)
console.log(a ** b);

/**
 * Representacion de numeros en cadena de caracteres
 */

// toString()
let a_str = a.toString();
console.log(typeof a_str);

/**
 * Redondeo de numeros decimales
 */
let c = 3.3;
let d = c * 3;

// .toFixed() -> devuelve un string con el numero redondeado a la cantidad de decimales indicados
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

// .toPrecision() -> devuelve un string con el numero redondeado y con la cantidad de digitos indicados
console.log(d.toPrecision(4));
console.log(typeof d.toPrecision(4));
