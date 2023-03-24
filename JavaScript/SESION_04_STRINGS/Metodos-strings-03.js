// Metodos de cadenas de texto Parte 3

// Expression regular: https://regexr.com/
let texto_largo =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora est illo nesciunt asperiores ut qui ab assumenda, quod, hic excepturi accusamus officiis doloribus saepe, placeat praesentium fugit similique nisi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolorum eius laboriosam rerum libero, perspiciatis, repellendus pariatur cupiditate velit dicta, tempore fugit at molestiae. Architecto ratione delectus sint facilis eius.";

// Buscar una palabra en un texto con RegX
console.log(texto_largo.match(/Lorem/g));

// Existe una palabra incluida dentro del texto
console.log(texto_largo.includes("Lorem"));

// Saber si un texto comienza con una palabra
console.log(texto_largo.startsWith("Lorem"));

// Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("eius."));
