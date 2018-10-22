// obtengo el conjunto de todos los elementos <li> que tengo en mi documento
var lista = document.querySelector("li");

// itero como un array normal por cada elemento <li>
for (var i = 0; i < lista.length; i++) {
  // como los indices para arrays comienzan desde 0
  // pero en realidad en la web comienzan desde el 1
  // a la variable i le sumo 1 para saber realmente en que posición estoy
  var numeroDeLinea = i + 1;

  // primero verifico las condiciones más específicas, y después las menos
  if (numeroDeLinea % 3 == 0 && numeroDeLinea % 5 == 0) {
    lista[i].style.color = "green";
  } else if (numeroDeLinea % 5 == 0) {
    lista[i].style.color = "blue";
  } else if (numeroDeLinea % 3 == 0) {
    lista[i].style.color = "red";
  }
}