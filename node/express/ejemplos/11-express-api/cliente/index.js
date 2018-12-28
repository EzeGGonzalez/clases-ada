$.ajax('http://localhost:3000/api/movies')
  .done(function (respuesta) {
    // el parametro respuesta es lo que nos contesta el servidor (en este caso el array de las peliculas)
    respuesta.forEach(function (pelicula) {
      $('#movies').append(`
        <div class="movie">
          <span class="title">${pelicula.title}</span>
          <span class="year">${pelicula.year}</span>

          <button onclick="verDetalle(${pelicula.id})">Ver detalle</button>
          <button onclick="editar(${pelicula.id})">Editar</button>
          <button onclick="eliminar(${pelicula.id})">Eliminar</button>
        </div>
      `)
    })
  })


// agrego el on click al botton 'ver detalle' para que navegue a la otra pagina
function verDetalle (id) {
  window.location.href = `detalle.html?id=${id}`;
}