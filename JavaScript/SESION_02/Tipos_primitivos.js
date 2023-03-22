// Tipos Primitivos

// Number
let number = 1;

// String
let hola = "Hola";

// Boolean
let booleanT = true;
let booleanF = false;

// Null
let nulo = null;

// Undefined
let indefinido = undefined;

/**
 * Null, Undefined, False and 0 => Todas son falsy
 * No son iguales Null y Undefined
 */

console.log(nulo === indefinido);

if (nulo) {
  // Cumple la condición
  console.log("Es verdadero");
} else {
  // No cumple la condición
  console.log("Es falso");
}
