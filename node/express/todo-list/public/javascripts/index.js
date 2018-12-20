$.ajax('/api/todos')
  .done(function (data) {
    for (var i = 0; i < data.length; i++){
      $('#todos').append(`
        <li data-id="${data[i].id}">
          <span>${data[i].text}</span>
          <i class="fas fa-trash-alt remove"></i>
          <i class="fas fa-pencil-alt edit"></i>
        </li>
      `);
    }
  })

$(document).on('click', '.edit', function () {
  const id = $(this).parent().data('id');
  location.href = `/todos/edit?id=${id}`;
})

$(document).on('click', '.remove', function () {
  const id = $(this).parent().data('id');
  $(this).parent().remove();
  $.ajax(`/api/todos/${id}`, { method: 'delete' });
})

$('#filtrar button').click(function () {
  const palabraDeBusqueda = $('#filtrar input').val();

  // despues del signo de pregunta, es un query param
  $.ajax('/api/todos?search=' + palabraDeBusqueda)
  .done(function (data) {
    $('#todos li').remove();
    for (var i = 0; i < data.length; i++){
      $('#todos').append(`
        <li data-id="${data[i].id}">
          <span>${data[i].text}</span>
          <i class="fas fa-trash-alt remove"></i>
          <i class="fas fa-pencil-alt edit"></i>
        </li>
      `);
    }
  })
});