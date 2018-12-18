const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

$.ajax(`/api/todos/${id}`).done(function (todo) {
  $('input[name="text"]').val(todo.text);
})

$('form button').click(function () {
  $.ajax(`/api/todos/${id}`, {
    method: "PUT",
    data: {
      text: $('input[name="text"]').val()
    },
    success: function () {
      alert('todo editado');
      location.href = "/todos";
    }
  })
});