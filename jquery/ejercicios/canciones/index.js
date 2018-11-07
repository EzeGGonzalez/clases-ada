// ARRIBA DE TODO DEFINO MIS VARIABLES GLOBALES
let canciones = [
  { nombre: "moscas en la casa", autor: "Shakira", genero: "pop" },
  { nombre: "Edge of Glory", autor: "Lady Gaga", genero: "pop" },
  { nombre: "Back in Black", autor: "AC/DC", genero: "rock" },
  { nombre: "No se tu", autor: "Luismi", genero: "Latin" }
];
let cancionesEscuchadas = [];

function crearTabla() {
  var miTabla = $('<table id="tablaCanciones"></table>');
  var cabecera = "<th>Nombre</th><th>Autor</th><th>Genero</th>";
  miTabla.append(cabecera);
  var container = $("div.table-canciones");
  container.append(miTabla);
  render();
}

function crearTablaCancionesEscuchadas() {
  var miTablaCancionesEscuchadas = $(
    '<table id="tablaCancionesEscuchadas"></table>'
  );
  var cabecera = "<th>Nombre</th><th>Autor</th><th>Genero</th>";
  miTablaCancionesEscuchadas.append(cabecera);

  var container = $("div.table-canciones-escuchadas");
  container.append(miTablaCancionesEscuchadas);
}

function borrarCancion(cancion) {
  console.log(cancion);
  // 1) recupero el indice de la cancion a borrar
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  console.log(indice);
  // 2) borro la cancion de mi lista
  canciones.splice(indice, 1);
  limpiarTabla();
  render();
}

function limpiarTabla() {
  $(".fila").remove();
}
function limpiarTablaEscuchadas() {
  $(".filaEscuchadas").remove();
}

function marcarComoEscuchada(cancion) {
  // 1) Actualizar el array de canciones
  // 1.1) Borrar la cancion del array de canciones
  // SPLICE => desde donde borro, cuantos elementos borro
  // Necesito el indice de la cancion
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  canciones.splice(indice, 1);
  // 1.2) Agregar la cancion en el array de escuchadas
  cancionesEscuchadas.push(cancion);
  // Estas lineas hacen exactamente lo mismo -> te gana la paja
  // console.log({ canciones });
  // console.log("canciones", canciones);
  limpiarTabla();
  render();

  // 2) Renderizar mi tabla de canciones escuchadas
  limpiarTablaEscuchadas();
  renderizarTablaCancionesEscuchadas();
}

function render() {
  var tabla = $("#tablaCanciones");
  for (let i = 0; i < canciones.length; i++) {
    var nombre = canciones[i].nombre;
    var autor = canciones[i].autor;
    var genero = canciones[i].genero;

    var tdNombre = "<td>" + nombre + "</td>";
    var tdAutor = "<td>" + autor + "</td>";
    var tdGenero = "<td>" + genero + "</td>";

    var btnDelete = $("<button>Delete</button>");
    btnDelete.on("click", function() {
      borrarCancion(canciones[i]);
    });

    var btnEscuchada = $("<button>Ya la escuche!</button>");
    btnEscuchada.on("click", function() {
      marcarComoEscuchada(canciones[i]);
    });

    // si no tengo el nodo en mi html
    // 1) o no estoy haciendo el append (me lo morfe)
    // 2) o estoy haciendo append a cualquier frula (la estas cagando en el selector)
    var fila = $('<tr class="fila"></tr>');

    fila.append(tdNombre);
    fila.append(tdAutor);
    fila.append(tdGenero);
    fila.append(btnDelete);
    fila.append(btnEscuchada);

    tabla.append(fila);
  }
}

function renderizarTablaCancionesEscuchadas() {
  // 1) agarrar mi tabla de canciones escuchadas
  var tablaCancionesEscuchadas = $("#tablaCancionesEscuchadas");
  // 2) recorrer mis canciones escuchadas
  for (let i = 0; i < cancionesEscuchadas.length; i++) {
    // 2.1) definir una fila
    var fila = $('<tr class="filaEscuchadas"></tr>');
    // 2.2) armar los td con la data de la cancion escuchada
    var nombre = cancionesEscuchadas[i].nombre;
    var autor = cancionesEscuchadas[i].autor;
    var genero = cancionesEscuchadas[i].genero;

    var tdNombre = "<td>" + nombre + "</td>";
    var tdAutor = "<td>" + autor + "</td>";
    var tdGenero = "<td>" + genero + "</td>";

    // 2.3) Hacer append de los td a la fila
    fila.append(tdNombre);
    fila.append(tdAutor);
    fila.append(tdGenero);

    // 2.4) Hacer append de la fila a la tabla
    tablaCancionesEscuchadas.append(fila);
  }
}

crearTabla();
crearTablaCancionesEscuchadas();

// subir ejercicio por partes
// subir ejercicio completo