// Performance: if else and switch

const obtenerCalorias = (comida) => {
  const valores_caloricos = {
    manzana: 95,
    banana: 105,
    sandia: 115,
    kiwi: 55,
    naranja: 45,
    platano: 105,
    melon: 50,
    pera: 100,
    uva: 67,
    cereza: 85,
    mango: 98,
    papaya: 28,
    piña: 112,
    frutilla: 32,
    durazno: 51,
    mandarina: 47,
  };

  return valores_caloricos[comida] ?? "No se encontró la comida";
};

console.log(obtenerCalorias("banana"));
