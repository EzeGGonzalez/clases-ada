$.ajax('/api/todos')
  .done(function (data) {
    data.forEach(todo => {
      $('#todos').append(`
        <li data-id="${todo.id}">
          <span>${todo.text}</span>
          <i class="fas fa-trash-alt remove"></i>
          <i class="fas fa-pencil-alt edit"></i>
        </li>
      `);
    });
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