$('#save').click(function () {
  const newIsbn = $('input[name="isbn"]').val()

  $.ajax('/api/books', {
    method: 'post',
    data: {
      isbn: newIsbn
    }
  }).done(function () {
    window.location.href = '/books'
  })
})