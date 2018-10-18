function saludar () {
  console.log('hola mundo!')
}

function haceClick () {
  alert('hiciste click!')
}

document.getElementById('p-boton')
  .addEventListener('click', haceClick)

// var estado = 'perrito';
function onImg () {
  var estaOff = true;

  // if (estado === 'perrito') {
  if (estaOff) {
    // estado = 'casita';
    estaOff = false;
    document.getElementById('boton').innerHTML = "Off";
    document
      .getElementById('myImg')
      .src = 'http://www.clker.com/cliparts/b/M/J/u/l/a/on-button-hi.png';
  } else {
    // estado = 'perrito';
    estaOff = true;
    document.getElementById('boton').innerHTML = "On";
    document
      .getElementById('myImg')
      .src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqtPwz11sKXlUGP4yRwJHEUF9fdjfil-yngXK16CAxZfcnakW';
  }
}
