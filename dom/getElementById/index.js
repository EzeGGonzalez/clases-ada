// piso el valor del primero elemento p
document.getElementById('msj').innerHTML = "Hola Mundo!";

// actualizo el valor del segundo elemento p cada 1 segundo
// inicializo la variable incremental
var i = 0;
// guardo el elemento p al que voy a pisar en cada vuelta
var el = document.getElementById('msj-inc');

// cada 1 segundo, ejecuto una funcion
setInterval(function () {
  // piso el contenido del elemento p
  el.innerHTML = "Hola Mundo " + (i++) + "!";
}, 1000)