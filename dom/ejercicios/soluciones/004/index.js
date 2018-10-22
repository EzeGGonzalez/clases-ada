// var color = ingreso;
var colorA = document.querySelector('a');

var ingreso =  prompt('ingrese un color(verde, rojo o azul)');

//dice color incorrecto
if (ingreso === 'rojo') {
//  colorA.setAttribute('class', 'menu rojo')
colorA.classList.add('rojo')
} else if (ingreso === 'azul') {
//  colorA.setAttribute('class', 'menu azul')
colorA.classList.add('azul')
} else if (ingreso === 'verde') {
//  colorA.setAttribute('class', 'menu verde')
colorA.classList.add('verde')
} else {
 alert('el color ingresado no es correcto')
}