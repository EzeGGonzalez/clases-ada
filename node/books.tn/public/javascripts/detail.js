// 1) Recuperar el parametro isbn de la url
const urlParams = new URLSearchParams(window.location.search);
const isbn = urlParams.get("isbn");

$.ajax(`/api/books/${isbn}`).done(function(book) {
  $('#book-container').append(`
    <img src="${book.cover}">
    <h1>${book.title}</h1>
    <small>${book.subtitle}</small>
    <p>${book.description}</p>
    <ul>${book.authors.map(a => `<li>${a}</li>`).join('')}</ul>
  `)
});