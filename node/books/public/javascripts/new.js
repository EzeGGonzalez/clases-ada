$('#save').click(function () {
  const codigoIsbn = $('#isbn').val()

  $.ajax('http://localhost:3000/books', {
    method: "POST",
    data: {
      isbn: codigoIsbn
    }
  })
  .done(function () {
    location.href = '/listado'
  })
})