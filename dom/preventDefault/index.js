function validar (evt) {
  var numero = 15;
  if (numero > 10) {
    evt.preventDefault();
  }

  var select = document.querySelector('select');
  var selected = select.selectedIndex;
  var options = select.options;
  console.log(options[selected].innerHTML)
  // console.log(select.options[select.selectedIndex].innerHTML)


  console.log('estoy en la funcion del submit');
}

document
  .getElementById('contacto')
  .addEventListener('submit', validar);