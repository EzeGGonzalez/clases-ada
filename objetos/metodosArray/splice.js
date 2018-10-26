// si tengo el siguiente array de numeros
var elementos = [1, 5, 2, 6, 8];

// y quiero eliminar un valor
// vamos a poder utilizar la funcion splice()
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice
// https://www.w3schools.com/jsref/jsref_splice.asp

// esta funcion elimina items de un array, y los retorna
// la forma en la que se usa es
// elementos.splice(indiceDesdeDondeQuieroEliminar, cuantosElementosQuieroEliminar)
// por ejemplo: si quiero eliminar el elemento que esta en la posicion 3, podemos hacer
elementos.splice(3, 1); // desde la posicion 3, eliminate 1 elemento
// ahora, elementos seria [1, 5, 2, 8], porque borre el 6 que estaba en la posicion 3 (siempre contamos desde 0!)

// pero pero pero, tambien podria eliminar mas elementos si quisiera
// por ejemplo, si quiero eliminar los primeros dos elementos del array, podemos hacer:
elementos.splice(0, 2); // desde la posicion 0, eliminate 2 elementos
// ahora, elementos seria [2, 8], porque borre el 1 y 5 (los primeros dos), mas el 6 que elimine en el ejemplo anterior


// no importa que elementos contenga el array, splice() siempre funciona igual!
// ejemplo:
var personas = [
  { id: 1, nombre: 'Ada Lovelace' },
  { id: 2, nombre: 'Grace Hopper' },
  { id: 3, nombre: 'John Von Neumann' },
  { id: 4, nombre: 'Hedy Lamarr' }
];

// si quiero eliminar a John Von Neumann, tengo que eliminar el elemento de la posicion 2
personas.splice(2, 1);
// ahora, personas seria
// [
//   { id: 1, nombre: 'Ada Lovelace' },
//   { id: 2, nombre: 'Grace Hopper' },
//   { id: 4, nombre: 'Hedy Lamarr' }
// ]
// porque borramos a John Von Neumann

// si queremos hacer lo mismo, pero en realidad no sabemos bien en que posicion esta John Von Neumann
// tendriamos que buscarlo con find()
// ejemplo:
var personas = [
  { id: 1, nombre: 'Ada Lovelace' },
  { id: 2, nombre: 'Grace Hopper' },
  { id: 3, nombre: 'John Von Neumann' },
  { id: 4, nombre: 'Hedy Lamarr' }
];

// busco el objeto que tiene como nombre John Von Neumann
var neumann = personas.find(p => p.nombre === 'John Von Neumann');
// una vez que encontre ese objeto, con indexOf() podemos saber en que indice/posicion esta
var posicionNeumann = personas.indexOf(neumann);
// y finalmente, sabiendo la posicion, puedo eliminarlo
personas.splice(posicionNeumann, 1);

// ¡¡¡ACLARACION!!!: en este caso anterior si o si necesitabamos hacer un find() porque estamos buscando un elemento que no es un dato primitivo tipo numero o texto, sino un objeto
// si fuesen solo numeros o texto por ejemplo:
var nombres = ['Ada Lovelace', 'Grace Hopper', 'John Von Neumann', 'Hedy Lamarr'];
// en este caso podemos usar directamente el indexOf() haciendo:
var posicionNeumann = nombres.indexOf('John Von Neumann');
// y ahora con la posicion, puedo eliminarlo
nombres.splice(posicionNeumann, 1);