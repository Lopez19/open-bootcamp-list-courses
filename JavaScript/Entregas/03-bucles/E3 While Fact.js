// Factorial-While
// Entry
let n = 10;
let fact = 1;
let i = 1;

// Ouput
// 3628800 (10!)

// Solution
while (i < n) {
  i++;
  fact = fact * i;
}

// Test Solution
console.log(fact);
