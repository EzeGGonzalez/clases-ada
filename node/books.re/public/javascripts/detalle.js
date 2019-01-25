const urlParams = new URLSearchParams(window.location.search);
const isbn = urlParams.get("isbn");

// /api/books/9788495733184
// /api/books/:isbn
$.ajax('/api/books/' + isbn)
  .done(function (data) {
    $('#book').append(`
      <img src="${data.cover}"/>
      <h1>${data.title}</h1>
      <p>${data.subtitle}</p>
      <p>${data.description}</p>
      <p>${data.authors}</p>
    `)
  })
