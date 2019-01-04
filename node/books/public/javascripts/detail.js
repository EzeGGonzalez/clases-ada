// que tenemos que hacer!!!?
const urlParams = new URLSearchParams(window.location.search);
const isbn = urlParams.get("isbn");

// http://localhost:3000/books/1234567890
$.ajax('http://localhost:3000/books/' + isbn)
  .done(function (data) {
    // el data es el objeto que me mando el servidor, nuestra api
    $('#book').append(`
      <img src="${data.cover}">
      <h1>${data.title}</h1>
      <p>${data.subtitle || ''}</p>
      <p>${data.description}</p>
      <p>${data.authors}</p>
    `)
  })