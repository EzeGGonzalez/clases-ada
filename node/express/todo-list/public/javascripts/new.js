$('form button').click(function () {
  $.ajax('/api/todos', {
    method: "POST",
    data: {
      text: $('input[name="text"]').val()
    },
    success: function () {
      alert('todo creado');
      location.href = "/todos";
    }
  })
});