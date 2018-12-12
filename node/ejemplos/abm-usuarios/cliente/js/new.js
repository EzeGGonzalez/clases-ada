$('#new').on('click', function () {
  const nombre = $('#nombre').val();
  const apellido = $('#apellido').val();
  const edad = $('#edad').val();

  var newUser = {
    name: nombre,
    surname: apellido,
    age: edad
  }

  $.ajax('http://localhost:3000/user', {
    method: 'POST',
    data: newUser,
    success: function () {
      // este alert deberia ser un modal :D
      alert('usuario creado');
      location.href = 'index.html';
    }
  })
});