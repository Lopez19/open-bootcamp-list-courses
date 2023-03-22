// Bucles

// Bucle for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Bucle while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Bucle do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// Bucle for in
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
};

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

// Bucle for of
const colores = ["Rojo", "Azul", "Verde"];
for (let color of colores) {
  console.log(color);
}

// Bucle forEach
colores.forEach((color) => {
  console.log(color);
});
