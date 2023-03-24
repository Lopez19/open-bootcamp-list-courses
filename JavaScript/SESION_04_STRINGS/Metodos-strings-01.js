// Metodos mas usados con cadenas de texto
let str = " Hola mundo ";

// Como obtener la longitud de una cadena de texto
console.log(str.length);

// Como obtener un caracter de una cadena de texto
console.log(str.charAt(0));

// Como obtener el codigo ASCII de un caracter
console.log(str.charCodeAt(0));

// Como obtener un caracter a partir de su codigo ASCII
console.log(String.fromCharCode(72));

// Como obtener un subconjunto de caracteres de una cadena de texto
console.log(str.substring(0, 4));

// Como obtener un subconjunto de caracteres de una cadena de texto a partir de un indice
console.log(str.slice(0, 4));

// buscar un caracter o una cadena de texto dentro de una cadena de texto
console.log(str.indexOf("mundo"));

// Como reemplazar un caracter o una cadena de texto dentro de una cadena de texto solo la primera ocurrencia
console.log(str.replace("mundo", "programacion"));

// Como reemplazar un caracter o una cadena de texto dentro de una cadena de texto todas las ocurrencias que se encuentren usando una expresion regular global (/g)
console.log(str.replace(/mundo/g, "programacion"));

// Como convertir una cadena de texto a mayusculas
console.log(str.toUpperCase());

// Como convertir una cadena de texto a minusculas
console.log(str.toLowerCase());

// Como dividir una cadena de texto en un arreglo de cadenas de texto
console.log(str.split(" "));

// Como concatenar cadenas de texto
console.log(str.concat(" ", "programacion"));

// Como eliminar espacios en blanco al inicio y al final de una cadena de texto
console.log(str.trim());
