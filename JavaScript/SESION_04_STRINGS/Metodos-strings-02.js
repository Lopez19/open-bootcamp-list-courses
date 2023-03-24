// Metodos de cadenas de texto Parte 2
let input = "JavaScript";
let output = "javascript";

// toLowerCase() convierte una cadena de texto a minusculas
console.log(input.toLowerCase() === output.toLowerCase()); // true

// toUpperCase() convierte una cadena de texto a mayusculas
console.log(input.toUpperCase() === output.toUpperCase()); // true

/**
 * Formas de concatenar cadenas de texto
 */
let firstName = "Horacio";
let lastName = "Lopez";

// Concatenacion con el operador +
console.log(firstName + " " + lastName);

// Concatenacion con el metodo concat()
console.log(firstName.concat(" ", lastName));

// Concatenacion con el metodo join()
console.log([firstName, lastName].join(" "));

// Concatenacion con el metodo template literals
console.log(`${firstName} ${lastName}`);

// Trim() elimina los espacios en blanco al inicio y al final de una cadena de texto
let fullName = " Horacio Lopez ";
console.log(fullName.trim());

// TrimStart() elimina los espacios en blanco al inicio de una cadena de texto
console.log(fullName.trimStart());

// TrimEnd() elimina los espacios en blanco al final de una cadena de texto
console.log(fullName.trimEnd());
