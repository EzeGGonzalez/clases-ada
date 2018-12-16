// js es para hacer dinámica la web
// no ser solo una maqueta
// pero en un princio era solo para validar
// console.log('hola desde consola');
// crear un array de productos
var productos = [];

// DATOS PRIMITIVOS
// var numericas = 3;
// var textos = "saraza";
// var booleanas = true;

// un producto va a ser un objeto JSON con las siguientes propiedas
// {
//   id: 1,
//   nombre: "sazara",
//   precio: 123
// }
// QUE ESSS UN OBJETO JSON
// es un elemento que tiene propiedades
// una propiedad es una caracteristica
// var alumna_1 = {
//   nombre: "",
//   apellido: "",
//   email: "",
//   dni: ""
// }
// se usan para intercambiar datos (enviar, recibir)
var producto1 = {
  id: 1,
  nombre: 'Producto 1',
  precio: 10
};

var producto2 = {
  id: 2,
  nombre: 'Producto 2',
  precio: 15
}
// agregamos cada producto al array de productos creado más arriba
productos.push(producto1);
productos.push(producto2);

// vamos a agregar todos los productos que tengo guardados en el array
for (var i = 0; i < productos.length; i++) {
  // esta deberia ser la estructura final
  // <li>
  //   <span class="nombre">Producto 1</span>
  //   <span class="precio">123</span>
  // </li>

  // creamos el <li>
  var elLi = $('<li></li>');
  // creamos los dos span
  // var elSpanNombre = $(`<span class="nombre"></span>`);
  var elSpanNombre = $('<span class="nombre"></span>');
  // productos sub i
  elSpanNombre.text(  productos[i].nombre  );
  var elSpanPrecio = $('<span class="precio"></span>');
  // productos[i] es UN objeto
  elSpanPrecio.text(  productos[i].precio  );

  // agregamos ambos span al li
  elLi.append(elSpanNombre);
  elLi.append(elSpanPrecio);

  // voy a buscar el elemento ul con id #productos
  // y le hacemos el append de cada producto
  $("#productos").append(elLi);
}