// Comportamiento de los numeros en javascript
// Autor: Horacio Lopez Moreno

// Declaracion de variables
var a = 1; // Variable de tipo entero
var b = 1.5; // Variable de tipo flotante

var c = 1.5e3; // Variable de tipo flotante
var d = 1.5e-3; // Variable de tipo flotante
var e = 0x10; // Variable de tipo hexadecimal
var f = 010; // Variable de tipo octal
var g = 0b10; // Variable de tipo binario
var h = 1 / 0; // Variable de tipo infinito
var i = 0 / 0; // Variable de tipo NaN

// Mostrar los valores de las variables
console.log("a = " + a);
console.log("b = " + b);

console.log("c = " + c);
console.log("d = " + d);
console.log("e = " + e);
console.log("f = " + f);
console.log("g = " + g);
console.log("h = " + h);
console.log("i = " + i);

// Precisión de los numeros
console.log("a = " + a.toPrecision(1));
console.log("b = " + b.toPrecision(1));

console.log("c = " + c.toPrecision(1));
console.log("d = " + d.toPrecision(1));
console.log("e = " + e.toPrecision(1));
console.log("f = " + f.toPrecision(1));
console.log("g = " + g.toPrecision(1));
console.log("h = " + h.toPrecision(1));
console.log("i = " + i.toPrecision(1));

// Tip redondeo
console.log(Math.round((a + b) * 100) / 100);
