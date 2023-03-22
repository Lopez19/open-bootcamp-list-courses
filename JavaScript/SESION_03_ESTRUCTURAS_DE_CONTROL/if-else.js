/**
 * Bifurcaciones
 * if ... else
 */

let saldo = 1000;
let efectivo = 500;

if (saldo > efectivo) {
  console.log(
    `Su saldo es de ${saldo} dólares, puede retirar los ${efectivo} dólares`
  );
} else {
  console.log(
    `Su saldo es de ${saldo} dólares, no puede retirar los ${efectivo} dólares`
  );
}
