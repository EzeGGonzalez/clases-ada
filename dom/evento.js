function saludar () {
  console.log('hola!');
}

function enviar () {
  var loQueIngreso = prompt('ingresá algo!')
  console.log(loQueIngreso)
}

function validar () {
  document
    .getElementById('error-message')
    .style.display = 'block';
}