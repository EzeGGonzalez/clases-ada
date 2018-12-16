// generar numero al azar
var numero = Math.floor(Math.random() * ((20 + 1) - 0) + 0);
console.log(numero);

// ejecutamos como maximo 5 veces
for (var i = 0; i < 5; i++) {

  // vamos a pedir un numero
  var elNumeroDelUsuario = prompt('decime un numero entre 1 y 20!');


  // checkeamos si es o no igual al numero que elegí
  if (elNumeroDelUsuario == numero) {
    // - si es igual -> le digo que gano y termino!
    alert('ganaste!');
    break;

  } // cierre if (elNumeroDelUsuario == numero)
  else {
    if (i === 4) {
      alert('perdiste!');
      break;
    }

    // - si no es igual -> mostrar ayuda
    if (elNumeroDelUsuario < numero) {
      alert('el numero que elegiste es más peque que el numero a adivinar');
    } // cierre if (elNumeroDelUsuario < numero)

    if (elNumeroDelUsuario > numero) {
      alert('el numero que elegiste es más grande que el numero a adivinar');
    } // cierre if (elNumeroDelUsuario > numero)

  } // cierre else del if (elNumeroDelUsuario == numero)

}
