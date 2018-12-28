// obtenemos el id de la pelicula que queremos mostrar
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

// con ajax, vamos a pedirle a nuestra api que nos devuelva la info de una pelicula especifica, pasandole el id como parametro de la url
$.ajax('http://localhost:3000/api/movies/' + id)
  .done(function (data) {
    console.log(data);

    $('#movie .title').text(data.title);
    $('#movie .summary').text(data.summary);
    $('#movie .year').text(data.year);
  });