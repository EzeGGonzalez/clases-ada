// busco todos los elementos <li> que tengo en el documento
var todosLosLi = $('li');
// obtengo el elemento <span> con id #cantidad
var spanCuenta = $('#cantidad');
// al elemento span#cantidad le asigno la longitud del array devuelto por querySelectorAll
spanCuenta.text(todosLosLi.length);