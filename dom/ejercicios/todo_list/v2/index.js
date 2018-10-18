var boton = document.getElementById('add');
var input = document.getElementById('text');
var list = document.getElementById('task-list');

var contador = 0;

function agregarTarea () {
  var nuevaTarea = document.createElement('div');
  nuevaTarea.id = 'tarea-' + contador;

  nuevaTarea.innerHTML = input.value
    + '<button onclick="quitarTarea(' + contador + ')">X</button>';

  list.appendChild(nuevaTarea);

  contador++;
}

function quitarTarea (idDelDivAEliminar) {
  var elDivAEliminar = document.getElementById('tarea-' + idDelDivAEliminar)
  list.removeChild(elDivAEliminar);
}

boton.addEventListener('click', agregarTarea);