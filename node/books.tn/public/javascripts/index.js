$.ajax('/api/books')
  .done(function (data) {
    data.forEach(book => {
      $('#books').append(`
        <li data-isbn="${book.isbn}">
          <span>${book.isbn}</span>
          <button>Detalle</button>
        </li>
      `);
    });
  })

$(document).on('click', '#books li button', function () {
  const isbn = $(this).parent().data('isbn')

  window.location.href = '/books/detail?isbn=' + isbn
})