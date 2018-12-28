// importamos nuestro modulo y lo guardamos en una variable
const obtenerPrecio = require('./calcular');
// lo que importamos es la funcion que exportamos en el anterior archivo
// la ejecutamos y obtenemos el precio final con IVA
const precio = obtenerPrecio(200);
// finalmente mostramos en la consola el precio
console.log(precio);