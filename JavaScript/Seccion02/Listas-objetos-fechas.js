// Listas -> Arreglos, matrices o vectores = []
const lista = ["a", 2, false, undefined, null];
const lista2 = new Array(...lista);
const lista3 = new Array(3);
lista3[0] = "a";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const persona = {
  nombre: "Horacio",
  apellido: "Lopez",
  edad: 21,
  direccion: {
    pais: "Colombia",
    ciudad: "Buenaventura",
    edificio: {
      nombre: "Edificio Principal",
      telefono: "555-555-5555",
    },
  },
};
console.log(persona.nombre);

const vehiculo = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
  detalles: {
    color: "Blanco",
    motor: 1.8,
  },
  active: true,
};
console.log(vehiculo.detalles.color);

// Fechas
// Librerias de apoyo -> Moment.js
const fecha = new Date();
console.log(fecha);

const fecha2 = new Date(10);
console.log(fecha2);

const fecha3 = new Date("march 20 2020");
console.log(fecha3);

const fecha4 = new Date(2021, 1, 15);
console.log(fecha4);

const dia = fecha.getDay();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

console.log(dia, mes, anio);
