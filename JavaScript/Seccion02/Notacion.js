/**
 * Notaciones
 * 1. Notacion de punto -> Acceder a los atributos de un objeto
 * 2. Notacion de corchetes -> Listas, arreglos, matrices
 * 3. Notacion de punto y corchetes
 * 4. Notacion de punto y coma -> Deliminar el final de una linea
 * 5. Notacion de parentesis -> Funciones
 * 6. Notacion de llaves -> Agrupar bloques de codigo
 */

let persona = {
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

// Notacion de punto
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.direccion.pais);
console.log(persona.direccion.ciudad);
console.log(persona.direccion.edificio.nombre);
console.log(persona.direccion.edificio.telefono);

// Notacion de corchetes -> Listas, arreglos, matrices
const items = ["Computador", "Celular"];
console.log(items[0]);

// Notacion de parentesis -> Funciones
const saludar = (a, b) => {
  return a + b;
};
console.log(saludar(4, 2));

// Notacion de llaves -> Objetos y agrupar bloques de codigo
const vehiculo = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
  detalles: {
    color: "Blanco",
    motor: 1.8,
  },
};
console.log(vehiculo);

if (vehiculo.marca == "Toyota") {
  console.log("Hola");
}
