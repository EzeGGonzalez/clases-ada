// obtengo la lista <ul> donde voy a agregar los nuevos <li>
// como esta lista siempre va a existir, y solo voy a agregar childs, puedo declararla fuera del for()
var ul = $('#lineas');
// obtengo el elemento <input>, para obtener el valor que ingresa el usuario
var qLineasInput = $('#q-lineas');

// creo la funcion que se ejecuta al hacer click en el boton
function agregarLineas () {
  // obtengo el valor del input que ingreso el usuario
  var nroLineas = parseInt(qLineasInput.val());

  // itero 5 veces, para agregar las 5 lineas
  for (var i = 0; i < nroLineas; i++) {
    // creo el nuevo elemento <li>
    var li = $('<li></li>');

    // al elemento nuevo le asigno el nuevo valor
    // el número de la nueva linea a insertar, es igual a la cantidad de elementos que tengo actualmente + 1
    // la primer vez que entro, cuando tengo 0 elementos, la primer linea debe decir linea nro 1 (length + 1)
    // la segunda vez que entro, cuando tengo 1 elemento, la segunda linea debe decir linea nro 2 (length + 1)
    // la tercera vez que entro, cuando tengo 2 elementos, la tercera linea debe decir linea nro 3 (length + 1)
    // etc...
    li.text('linea nro ' + (ul.children().length + 1));

    // al <ul> le agrego el nuevo <li>
    li.appendTo(ul);
    // ul.appendChild(li);
  }

  // una vez que genere todas las lineas, vuelvo a blanco el valor del input
  qLineasInput.val('');
}

$('#generar').click(agregarLineas);