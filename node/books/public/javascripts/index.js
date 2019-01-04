// vamos a buscar los ISBNs que guardamos
$.ajax('/books')
  .done(function (data) {
    for (var i = 0; i < data.length; i++) {
      $('#isbns').append(`
        <li data-isbn="${data[i].isbn}">
          ${data[i].isbn} - ${data[i].title}
          <button>Detalle</button>
        </li>
      `)
    }
  })

// esto no funciona, porque los button son dinamicos
$('button').on('click', function () {

})
// esto si
$(document).on('click', 'button', function () {
  // http://localhost:3000/detalle?isbn=8478290761
  location.href = "/detalle?isbn=" + $(this).parent().data('isbn')
})