$.ajax('http://localhost:3000/api/todos')
  .done(function (data) {
    for (var i = 0; i < data.length; i++) {
      $('#todos').append(`
        <div data-id="${data[i].id}">
          <span>${data[i].text}</span>
          <i class="fas fa-trash-alt remove"></i>
          <i class="fas fa-pencil-alt edit"></i>
        </div>
      `);
    }
  })

$(document).on('click', '.remove', function () {
  //$(this) es el <i> del tachito
  const id = $(this).parent().data('id');

  $.ajax(`/api/todos/${id}`, {
    method: 'delete'
  })
  .done(function () {
    $(this).parent().remove();
  });
})

$(document).on('click', '.edit', function () {
  const id = $(this).parent().data('id');
  location.href = `/todos/edit?id=${id}`;
})

$('#filtrar button').click(function () {
  const palabraDeBusqueda = $('#filtrar input').val();

  $('#todos div').remove();

  // vuelvo a hacer la busqueda a la api
  $.ajax('http://localhost:3000/api/todos?search=' + palabraDeBusqueda)
    .done(function (data) {
      for (var i = 0; i < data.length; i++) {
        $('#todos').append(`
          <div data-id="${data[i].id}">
            <span>${data[i].text}</span>
            <i class="fas fa-trash-alt remove"></i>
            <i class="fas fa-pencil-alt edit"></i>
          </div>
        `);
      }
    })
});