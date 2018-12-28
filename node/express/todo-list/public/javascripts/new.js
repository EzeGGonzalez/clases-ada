
$('form button').click(function () {
  const inputText = $('input[name="text"]').val();

  if (inputText.length === 0) {
    alert('che fijate que el texto no este vacio');
    return false;
  }

  $.ajax('http://localhost:3000/api/todos', {
    method: "POST",
    data: {
      text: $('input[name="text"]').val()
    }
  }).done(function () {
    alert('todo creado');
    location.href = "/todos";
  })
});