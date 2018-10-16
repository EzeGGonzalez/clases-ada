// obtengo TODOS los elementos p y los guardo en la variable elementos
// me devuelve un ARRAY
var elementos = document.getElementsByTagName('p');

// como me devuelve un ARRAY, itero por cada elemento y piso su contenido
for (var i = 0; i < elementos.length; i++) {
  elementos[i].innerHTML = "Hola mundo " + i + "!";
}