let canciones = [
    {titulo: 'moscas en la casa', autor: 'Shakira', genero: 'pop' },
    {titulo: 'Edge of Glory', autor: 'Lady Gaga', genero: 'pop' },
    {titulo: 'Back in Black', autor: 'AC/DC', genero: 'rock' },
    {titulo: 'No se tu', autor: 'Luismi', genero: 'Latin'},
    {titulo: 'ponerte en 4', autor: 'Los amigos invisibles', genero: 'latin pop' },
    {titulo: 'Bodak Yellow', autor: 'Carbi B', genero: 'HipHop'},
];

let cancionesEscuchadas = [];
console.log(cancionesEscuchadas);

function crearTabla() {
    let table = $('<table id="tablaCanciones"></tabla>');
    let encabezado = '<th>Cancion</th><th>Autor</th><th>Genero</th>';
    table.append(encabezado);


    let containerTabla = $('div.table-canciones');
    containerTabla.append(table);
    render();
}


function crearTablaCancionesEscuchadas() {
  let TablaDeCancionesEscuchadas = $('<table id="tablaCancionesEscuchadas"></tabla>');
  let cabecera = '<th>Cancion</th><th>Autor</th><th>Genero</th>';
  TablaDeCancionesEscuchadas.append(cabecera);

  let containerTablaEscuchadas = $('div.canciones-escuchadas');
  containerTablaEscuchadas.append(TablaDeCancionesEscuchadas);
  //render();

}


function borrarCancion(cancion) {
    // jQuery no es reactivo, tengo que volver a renderizar mi tabla
    const indice = canciones.findIndex(p => p.titulo === cancion.titulo);
    console.log(indice);
    canciones.splice(indice, 1);
    limpiarTabla();
    render(canciones);
  }

  function limpiarTabla() {
    $(".fila").remove();
  }

function render(cancion = canciones) {
    var tablaCanciones1 = $("#tablaCanciones");
    // Dentro del for agrego la data de la tabla recorriendo mis productos
    for (let i = 0; i < cancion.length; i++) {

        var titulo = "<td>" + cancion[i].titulo +"</td>";
        var categoria = "<td>" + cancion[i].autor +"</td>";
        var genero = "<td>" + cancion[i].genero +"</td>";

        var btnDelete = $("<button>Delete</button>");
        btnDelete.on("click", function() {
         borrarCancion(cancion[i]);

        });

        var btnEscuchadas = $("<button>Listened</button>");
        btnEscuchadas.on("click", function() {
          listaEscuchadas(cancion[i]);


        })

      var fila = $('<tr class="fila"></tr>');
      fila.append(titulo);
      fila.append(categoria);
      fila.append(genero);
      fila.append(btnDelete);
      fila.append(btnEscuchadas);
      tablaCanciones1.append(fila);
    }
  }

  function listaEscuchadas (cancionAgrega) {
    cancionesEscuchadas.push(cancionAgrega);
    console.log(cancionesEscuchadas);
    const indice2 = canciones.findIndex(pepe => pepe.titulo === cancionAgrega.titulo);
    canciones.splice(indice2, 1);
    console.log(canciones);
    limpiarTabla();
    render();

  }

  crearTabla();
  crearTablaCancionesEscuchadas()