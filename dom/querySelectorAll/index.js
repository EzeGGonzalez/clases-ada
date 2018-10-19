// me devuelve TODOS los elementos
// que coinciden con el selector
var todosLosPes = document.querySelectorAll('.header p');
for (var i = 0; i < todosLosPes.length; i++) {
  todosLosPes[i].style.color = 'blue';
}