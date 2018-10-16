// obtengo TODOS los elementos con class="parrafo" y los guardo en la variable elementos
// me devuelve un ARRAY
var elementos = document.getElementsByClassName('parrafo');

// como me devuelve un ARRAY, itero por cada elemento y piso su contenido
for (var i = 0; i < elementos.length; i++) {
  elementos[i].innerHTML = "hola mundo!";
}
