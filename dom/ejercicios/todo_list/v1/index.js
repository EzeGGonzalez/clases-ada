// guardo el elemento del boton agregar
var boton = document.getElementById('add');
// guardo el nodo del input
var input = document.getElementById('text');
// guardo el elemento container donde voy a agregar cada tarea nueva
var list = document.getElementById('task-list');

// esta función se ejecuta cuando hago click en el botón 'agregar nota', y agrega un nuevo div al container
function agregarTarea () {
  // div ejemplo a agregar: <div>Tarea 1 <button>X</button></div>
  if (input.value === '') {
    return;
  }

  // creo el nuevo elemento div
  var nuevaTarea = document.createElement('div');
  // creo el nuevo elemento button
  var nuevoBoton = document.createElement('button');

  // al nuevo button para eliminar la tarea, le agrego el onclick
  nuevoBoton.addEventListener('click', quitarTarea)
  // agrego la X como contenido al button
  nuevoBoton.innerHTML = 'X';

  // al div de la tarea le agrego el contenido del input, lo que ingresa el usuario
  nuevaTarea.innerHTML = input.value;

  // limpiar el valor que tiene la caja de texto
  input.value = '';

  // al div de la tarea le agrego (append) el button para eliminar la tarea
  nuevaTarea.appendChild(nuevoBoton);

  // finalmente, agrego el div de la nueva tarea al contenedor general
  list.appendChild(nuevaTarea);
}

// esta función se ejecuta cada vez que hacemos click en el button dentro del div de cada tarea
function quitarTarea (e) {
  // con e.target tengo el elemento sobre el cual se hizo el click
  var botonClickeado = e.target;
  // el parent del botón clickeado, es el div de la tarea que quiero eliminar
  var elDivAEliminar = botonClickeado.parentNode;

  // una vez que obtuve el div a eliminar, le digo al contenedor que elimine ese elemento
  list.removeChild(elDivAEliminar);
}

function agregarTareaEnter (e) {
  if (e.keyCode === 13) {
    agregarTarea();
  }
}

// al boton 'agregar tarea' le agrego el onclick
boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown', agregarTareaEnter);