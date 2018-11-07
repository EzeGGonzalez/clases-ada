function contador() {
  return $("li").length;
}

function contadorFinalizadas() {
  return $(".completada").length;
}

$("#agregar").on("click", function () {
  // <li>
  //     <span></span>
  //     <input />
  //     <button>Borrar</button>
  //     <button>Editar</button>
  //     <button>Guardar</button>
  // </li>

  // obtengo el value del input donde escribimos por teclado
  var task = $("input").val();

  // genero cada uno de los elementos que vamos a tener dentro del <li>
  var span = "<span>" + task + "</span>";
  var input = "<input class='hide' />";
  var btnBorrar = "<button class='borrar'>Borrar</button>";
  var btnEdit = "<button class='edit'>Editar</button>";
  var btnGuardar = "<button class='guardar hide'>Guardar</button>";

  // agrego un nuevo <li> al <ul> con todos los elementos que creamos mas arriba
  $("ul").append("<li>" + span + input + btnBorrar + btnEdit + btnGuardar + "</li>");

  // vacio el input una vez que agregamos la nueva tarea
  $("input").val("");

  // después de agregar una tarea, actualizo el contador del total de tareas
  $('.totales').html(contador());
})

$(document).on('click', 'li span', function () {
  $(this).toggleClass('completada');
  // if ($(this).hasClass('completada')) {
  //     $(this).removeClass('completada');
  // } else {
  //     $(this).addClass('completada');
  // }

  // después de marcar una tarea como completada, actualizo el contador del total de tareas completadas
  $('.finalizadas').html(contadorFinalizadas());
})

$(document).on('click', '.borrar', function () {
  $(this).parent("li").remove();

  // después de borrar una tarea, actualizo el contador del total de tareas
  $('.totales').html(contador());
  // y también actualizo el contador del total de tareas completadas
  $('.finalizadas').html(contadorFinalizadas());
})

// agrego el evento para que cuando clickeamos EDITAR, me aparezca el input y oculte el span
$(document).on('click', '.edit', function () {
  // obtenemos el valor tarea
  var tarea = $(this).siblings("span").html();
  // ocultamos el span que tiene el texto
  $(this).siblings("span").addClass("hide");
  // ocultamos el boton eliminar
  $(this).siblings(".borrar").addClass("hide");
  // ocultamos el boton editar
  $(this).addClass("hide");
  // al input que tenemos en el li le asignamos como value el texto que tiene el span
  // desocultando el input
  $(this).siblings("input").val(tarea).removeClass("hide");
  // desocultar el boton guardar
  $(this).siblings(".guardar").removeClass("hide");
})

// agrego el evento para poder confirmar el edit de la tarea con la tecla enter
$(document).on('keypress', 'li input', function (event) {
  if (event.keyCode === 13) {
    // vamos a buscar el valor del input
    var nuevaTarea = $(this).val();
    // asignamos en el span el nuevo valor de la tarea
    $(this).siblings('span').html(nuevaTarea);
    // desocultamos el span que tiene el texto
    $(this).siblings("span").removeClass("hide");
    // desocultamos el boton eliminar
    $(this).siblings(".borrar").removeClass("hide");
    // desocultamos el boton editar
    $(this).siblings(".edit").removeClass("hide");
    // ocultamos el input
    $(this).addClass("hide");
    // ocultar el boton guardar
    $(this).siblings('.guardar').addClass("hide");
  }
});

$(document).on('click', '.guardar', function () {
  // vamos a buscar el valor del input
  var nuevaTarea = $(this).siblings("input").val();
  // asignamos en el span el nuevo valor de la tarea
  $(this).siblings('span').html(nuevaTarea);
  // desocultamos el span que tiene el texto
  $(this).siblings("span").removeClass("hide");
  // desocultamos el boton eliminar
  $(this).siblings(".borrar").removeClass("hide");
  // desocultamos el boton editar
  $(this).siblings(".edit").removeClass("hide");
  // ocultamos el input
  $(this).siblings("input").addClass("hide");
  // ocultar el boton guardar
  $(this).addClass("hide");
});