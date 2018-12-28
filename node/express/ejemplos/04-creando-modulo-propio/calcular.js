// guardamos en una constante el % de IVA
const IVA = 0.21;

const calcularPrecio = function(precio) {
  // la función recibe por parámetro un precio y le sumamos el IVA
  return precio + (precio * IVA);
}
// finalmente, exportamos la función
module.exports = calcularPrecio;