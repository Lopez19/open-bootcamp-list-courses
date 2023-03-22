// Calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break.
// Entry
let n = 10;
let fact = 1;

// Output
// 3628800 (10!)

// Solution
while (true) {
  if (n === 0) {
    break;
  } else {
    fact *= n;
    n -= 1;
  }
}

// Test Solution
console.log(fact);
