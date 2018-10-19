// acepta un string con un valor de selector de css como parámetro y retorna una array de elementos que estén comprendidos en el contexto de búsqueda utilizando el query de css. Retorna una array vacío en caso de no encontrar elementos en dicho contexto.

// me devuelve TODOS los elementos
// que coinciden con el selector
var todosLosPes = document.querySelectorAll('.header p');
for (var i = 0; i < todosLosPes.length; i++) {
  todosLosPes[i].style.color = 'blue';
}