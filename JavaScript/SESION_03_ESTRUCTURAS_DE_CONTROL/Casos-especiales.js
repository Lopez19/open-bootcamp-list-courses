// Casos muy especiales - break y continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 3) {
    continue; // Salta la iteracion actual
  }

  console.log(lista[i]);

  if (lista[i] > 5) {
    break; // Salta el bucle
  }
}

// Cual es el ambito de un bucle
// Ambito de bloque
// Ambito de global
