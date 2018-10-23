// obtengo el formulario sobre el que quiero ejecutar una funcion al hacer submit
var form = document.querySelector('form');

// creo el nuevo elemento div
var div = document.createElement('div');
// al elemento <div> le asigno un id 'mensaje'
div.id = 'mensaje';
// div.setAttribute('id', 'mensaje');

// agrego ese nuevo <div> como elemento hijo del <form>
form.appendChild(div);

// obtengo el input donde se tipea el username
var userInput = document.querySelector('#username');
// obtengo el input donde se tipea las password
var passInput = document.querySelector('#pass');

function validar (e) {
  // como no quiero que el formulario ejecuta su accion por default, cancelo el evento en este punto
  e.preventDefault();

  // obtengo el valor de lo que se escribio en el input #username
  var user = userInput.value;
  // obtengo el valor de lo que se escribio en el input #pass
  var pass = passInput.value;

  // opcion 1
  // if (user !== '' && pass !== '') {
  //   div.innerHTML = 'Login correcto!';
  // } else {
  //   div.innerHTML = 'Login incorrecto!';
  // }

  // opcion 2
  // si la variable user esta vacia, o la variable pass esta vacia, muestro el mensaje de error
  if (user === '' || pass === '') {
    div.innerHTML = 'Login incorrecto!';
  } else {
    div.innerHTML = 'Login correcto!';
  }
}

// agrego el listener sobre el evento submit del formulario
form.addEventListener('submit', validar);