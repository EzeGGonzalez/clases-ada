// obtengo la lista <ul> donde voy a agregar los nuevos <li>
// como esta lista siempre va a existir, y solo voy a agregar childs, puedo declararla fuera del for()
var ul = $('#lineas');

// creo la funcion que se ejecuta al hacer click en el boton
function agregarLineas () {
  // itero 5 veces, para agregar las 5 lineas
  for (var i = 0; i < 5; i++) {
    // creo el nuevo elemento <li>
    var li = $('<li>linea nro ' + (i + 1) + '</li>');
    // al <ul> le agrego el nuevo <li>
    ul.append(li);
  }
}

$('#generar').click(agregarLineas)