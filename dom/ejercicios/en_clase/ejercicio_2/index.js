// busco todos los elementos <li> que tengo en el documento
var todosLosLi = document.querySelectorAll('li');
// obtengo el elemento <span> con id #cantidad
var spanCuenta = document.getElementById('cantidad');
// al elemento span#cantidad le asigno la longitud del array devuelto por querySelectorAll
spanCuenta.innerHTML = todosLosLi.length;