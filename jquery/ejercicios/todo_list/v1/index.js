// guardo el elemento del boton agregar
var boton = $('#add');
// guardo el nodo del input
var input = $('#text');
// guardo el elemento container donde voy a agregar cada tarea nueva
var list = ('#task-list');

// esta función se ejecuta cuando hago click en el botón 'agregar nota', y agrega un nuevo div al container
function agregarTarea () {
  // div ejemplo a agregar: <div>Tarea 1 <button>X</button></div>
  if (input.val() === '') return;

  // creo el nuevo elemento div
  var nuevaTarea = $('<div></div>')
    .html(input.val()) // al div de la tarea le agrego el contenido del input, lo que ingresa el usuario
    .appendTo(list); // finalmente, agrego el div de la nueva tarea al contenedor general

  // creo el nuevo elemento button
  $('<button>X</button>')
    .on('click', quitarTarea) // al nuevo button para eliminar la tarea, le agrego el onclick
    .appendTo(nuevaTarea);

  // limpiar el valor que tiene la caja de texto
  input.val('');
}

// esta función se ejecuta cada vez que hacemos click en el button dentro del div de cada tarea
function quitarTarea (e) {
  // con e.target tengo el elemento sobre el cual se hizo el click
  // el parent() del botón clickeado, es el div de la tarea que quiero eliminar
  // finalmente borro el div con remove()
  $(e.target).parent().remove();
}

function agregarTareaEnter (e) {
  if (e.keyCode === 13) {
    agregarTarea();
  }
}

// al boton 'agregar tarea' le agrego el onclick
boton.on('click', agregarTarea);
input.on('keydown', agregarTareaEnter);