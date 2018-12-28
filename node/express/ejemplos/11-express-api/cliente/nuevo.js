$('form#new-movie button').click(function () {
  // obtenemos todos los datos de los inputs en el html
  const title = $('input[name="title"]').val()
  const summary = $('textarea[name="summary"]').val()
  const year = $('input[name="year"]').val()

  // creamos el objeto que estamos creando y le vamos a mandar al servidor para que guarde
  const newMovie = {
    title: title,
    summary: summary,
    year: parseInt(year)
  }

  // finalmente, con ajax, le enviamos un HTTP POST al servidor para que guarde el objeto
  // y le pasamos como data el nuevo objeto
  $.ajax('http://localhost:3000/api/movies', {
    method: 'post',
    data: newMovie
  })
    .done(function () {
      // si salió todo bien, volvemos a la pantalla de inicio
      window.location.href = 'index.html'
    })
})