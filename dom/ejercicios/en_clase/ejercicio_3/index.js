// obtengo la lista <ul> donde voy a agregar los nuevos <li>
// como esta lista siempre va a existir, y solo voy a agregar childs, puedo declararla fuera del for()
var ul = document.getElementById('lineas');

// creo la funcion que se ejecuta al hacer click en el boton
function agregarLineas () {
  // itero 5 veces, para agregar las 5 lineas
  for (var i = 0; i < 5; i++) {
    // creo el nuevo elemento <li>
    var li = document.createElement('li');
    // al elemento nuevo le asigno el nuevo valor
    li.innerHTML = 'linea nro ' + (i + 1);
    // al <ul> le agrego el nuevo <li>
    ul.appendChild(li);
  }
}

document
  .getElementById('generar')
  .addEventListener('click', agregarLineas);