// Comparaciones

// Igualdad - Igualdad débil (no importa el tipo de dato)
console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(2 == "2.0"); // true
console.log(2 == "dos"); // false

// Identidad - Igualdad estricta (mismo tipo de dato)
console.log(2 === 2); // true
console.log(2 === "2"); // false
console.log(2 === "2.0"); // false
console.log(2 === "dos"); // false

// Diferencia - Diferencia débil (no importa el tipo de dato)
console.log(2 != 2); // false
console.log(2 != "2"); // false
console.log(2 != "2.0"); // false
console.log(2 != "dos"); // true

// Desigualdad - Diferencia estricta (mismo tipo de dato)
console.log(2 !== 2); // false
console.log(2 !== "2"); // true
console.log(2 !== "2.0"); // true
console.log(2 !== "dos"); // true

// Mayor que
console.log(2 > 2); // false
console.log(2 > "2"); // false
console.log(2 > "2.0"); // false
console.log(2 > "dos"); // false

// Menor que
console.log(2 < 2); // false
console.log(2 < "2"); // false
console.log(2 < "2.0"); // false
console.log(2 < "dos"); // false

// Mayor o igual que
console.log(2 >= 2); // true
console.log(2 >= "2"); // true
console.log(2 >= "2.0"); // true
console.log(2 >= "dos"); // false

// Menor o igual que
console.log(2 <= 2); // true
console.log(2 <= "2"); // true
console.log(2 <= "2.0"); // true
console.log(2 <= "dos"); // false
