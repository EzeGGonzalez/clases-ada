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
        <li>
          <img src="${data[i].cover}" />
          <p>${data[i].title}</p>
        </li>
      `)
    }
  })