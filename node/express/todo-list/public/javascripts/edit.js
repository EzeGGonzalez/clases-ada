// http://localhost:3000/users/edit?id=1
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

$.ajax('http://localhost:3000/api/users/' + id)
  .done(function (data) {
    console.log(data);
    // {
    //   text: 'tarea 1'
    // }

    $('input[name="text"]').val(data.text);
  });

  $('form button').click(function () {
    const inputText = $('input[name="text"]').val();

    if (inputText.length === 0) {
      alert('che fijate que el texto no este vacio');
      return false;
    }

    $.ajax('http://localhost:3000/api/todos/' + id, {
      method: "PUT",
      data: {
        text: $('input[name="text"]').val()
      }
    }).done(function () {
      alert('todo editado');
      location.href = "/todos";
    })
  });