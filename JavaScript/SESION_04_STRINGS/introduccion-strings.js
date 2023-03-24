// Strings o cadenas de caracteres
let str_dbl = "Hola soy un texto con comilla dobles";
let str_sng = "Hola soy un texto con comillas simples";

// Test
console.log(str_dbl);
console.log(str_sng);

// Formas de concatenar
let str_comillas =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. "Alias fugiat numquam."';

// Mezclar comillas
let str_comillas2 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. "Alias fugiat numquam."';

// Mezclar comillas
let str_comillas3 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. 'Alias fugiat numquam.'";

console.log(str_comillas);
console.log(str_comillas2);
console.log(str_comillas3);

// Comillas invertidas (template strings)
let saludo = "Horacio";
let str_comillas4 = `Hola, ${saludo} soy un texto con comillas invertidas`;

console.log(str_comillas4);

// Plantillas HTML
let plantilla = `<h1>Hola, ${saludo} soy un texto con comillas invertidas</h1>`;
console.log(plantilla);

/**
 * Introductorio de variables en HTML
 */
let libros = [
  "El poder del ahora",
  "El alquimista",
  "El principito",
  "The programmer pragmatic",
];
