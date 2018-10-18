function agregarTexto () {
  var nuevoP = document.createElement('p');
  nuevoP.innerHTML = 'hola mundo!';

  var elDiv = document.getElementById('principal');

  elDiv.appendChild(nuevoP)
}

function eliminarImagen () {
  var elDiv = document.getElementById('principal');
  var laImg = document.getElementById('killbill');

  elDiv.removeChild(laImg);
}

document
  .getElementById('add')
  .addEventListener('click', agregarTexto);
document
  .getElementById('remove')
  .addEventListener('click', eliminarImagen);