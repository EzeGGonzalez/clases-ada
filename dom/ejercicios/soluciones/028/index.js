// obtengo el formulario sobre el que quiero ejecutar una funcion al hacer submit
var form = document.querySelector('form');
// obtengo el <select> del cual quiero saber el valor seleccionado
// var select = document.getElementById('paises');
var select = document.querySelector('#paises');

// la funcion tiene como parametro la informacion del evento que envia JS
function mostrarOpcion (e) {
  // como no quiero que el formulario ejecuta su accion por default, cancelo el evento en este punto
  e.preventDefault();
  // obtengo el value seleccionado (el value que tiene el <option>)
  var id = select.value;
  // obtengo el texto del valor seleccionado (el texto que tiene el <option>)
  var opcion = select.selectedOptions[0].innerHTML;

  alert('Elegiste la opción ' + opcion + ' que tiene el id ' + id);
}

// agrego el listener sobre el evento submit del formulario
form.addEventListener('submit', mostrarOpcion)