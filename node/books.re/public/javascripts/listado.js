const urlParams = new URLSearchParams(window.location.search);
const elSearch = urlParams.get("palabraDeBusqueda");

// WEB - > API PROPIA -> API GOOGLE
$.ajax('/api/books?search=' + elSearch)
  .done(function (data) {
    // data son todos los libros que me respondio la api
    // data es un array
    // itero por cada libro que viene en data
    for (var i = 0; i < data.length; i++) {
      $('#libros').append(`
        <li id="${data[i].isbn}">
          <img src="${data[i].cover}" />
          <p>${data[i].title}</p>
          <small>${data[i].subtitle}</small>
          <p>${data[i].authors}</p>
        </li>
      `)
    }
  })

$(document).on('click', 'li', function () {
  const isbn = $(this).attr('id');
  location.href = '/detalle?isbn=' + isbn;
  // http://localhost:3000/detalle?isbn=9788495733184
})