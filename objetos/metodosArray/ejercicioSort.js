// partiendo del siguiente array de objetos

var peli1 = {
  id: 1,
  titulo: "matrix 1",
  anio: 1999,
  rating: 7.9,
  duracion: 131,
  actores: ['Keanu Reeves', 'Carrie‑Anne Moss', 'Laurence Fishburne', 'Hugo Weaving']
};
var peli2 = {
  id: 2,
  titulo: "matrix 2",
  anio: 2003,
  rating: 6.5,
  duracion: 138,
  actores: ['Keanu Reeves', 'Carrie‑Anne Moss', 'Laurence Fishburne', 'Hugo Weaving', 'Monica Bellucci']
};
var peli3 = {
  id: 3,
  titulo: "aladin",
  anio: 1992,
  rating: 7.4,
  duracion: 87,
  actores: ['Jasmín', 'Aladdin', 'El Genio', 'Jafar', 'Abu']
};
var peli4 = {
  id: 4,
  titulo: "aladin: el regreso de jafar",
  anio: 1994,
  rating: 4.9,
  duracion: 66,
  actores: ['Jasmín', 'Aladdin', 'El Genio', 'Jafar']
};
var peli5 = {
  id: 5,
  titulo: "aladin y el rey de los ladrones",
  anio: 1995,
  rating: 5.9,
  duracion: 80,
  actores: ['Jasmín', 'Aladdin', 'El Genio', 'Jafar', 'Cassim']
};
var peli6 = {
  id: 6,
  titulo: "los locos adams",
  anio: 1991,
  rating: 5.9,
  duracion: 101,
  actores: ['Anjelica Huston', 'Raul Julia', 'Christopher Lloyd', 'Christina Ricci', 'Elizabeth Wilson', 'Dan Hedaya', 'Jimmy Workman', 'Judith Malina']
};
var peli7 = {
  id: 7,
  titulo: "loco por mery",
  anio: 1998,
  rating: 6.2,
  duracion: 119,
  actores: ['Cameron Diaz',  'Ben Stiller',  'Matt Dillon',  'Chris Elliott',  'Lee Evans',  'Lin Shaye', 'W. Earl Brown',  'Keith David',  'Markie Post',  'Brett Favre',  'Harland Williams', 'Jeffrey Tambor',  'Richard Jenkins',  'Sarah Silverman',  'Jonathan Richman']
};

var misPeliculas = [];

misPeliculas.push(peli1);
misPeliculas.push(peli2);
misPeliculas.push(peli3);
misPeliculas.push(peli4);
misPeliculas.push(peli5);
misPeliculas.push(peli6);
misPeliculas.push(peli7);

// ********************************
// 0. Mostrar la pelicula más vieja
// ********************************

// Vamos a ordenar los objetos del array por anio
// Primero me creo la funcion de comparacion que le voy a pasar a .sort()
var ordenarPorAnio = function (peliA, peliB) {
  // si el anio de la peliA es menor al de peliB, entonces retorno -1 para decirle a JS que peliA tiene que estar antes que peliB
  if (peliA.anio < peliB.anio) return -1;
  // si el anio de la peliB es menor al de peliA, entonces retorno 1 para decirle a JS que peliB tiene que estar antes que peliA
  if (peliA.anio > peliB.anio) return 1;
  // si ambas pelis tienen el mismo anio, retorno 0 para decirle a JS que no las tiene que mover
  return 0;
}
// Sobre el array ejecuto el metodo .sort() pasando como parametro la funcion de comparacion que creamos antes
misPeliculas.sort(ordenarPorAnio);
// Como los objetos del array fueron ordenados de menor a mayor según el anio, puedo asegurarme que en la primer posicion quedo la peli mas vieja
var peliMasVieja = misPeliculas[0];
// finalmente hago un console logo mostrando el titulo y anio de la peli
console.log('la peli más vieja es ' + peliMasVieja.titulo + ', que es del año ' + peliMasVieja.anio);






// ***************************************************
// 1. Mostrar todas las peliculas ordenadas por titulo
// ***************************************************

// Vamos a ordenar los objetos del array por titulo
// Primero me creo la funcion de comparacion que le voy a pasar a .sort()
var ordenarPorTitulo = function (peliA, peliB) {
  // para asegurarme que la comparacion la haga de forma alfabetica, sin importar mayusculas o minusculas,
  // me guardo ambos titulos en variables pasados a minusculas
  var tituloPeliA = peliA.titulo.toLowerCase();
  var tituloPeliB = peliB.titulo.toLowerCase();

  // si el titulo de la peliA es menor al de peliB, entonces retorno -1 para decirle a JS que peliA tiene que estar antes que peliB
  if (tituloPeliA < tituloPeliB) return -1;
  // si el titulo de la peliB es menor al de peliA, entonces retorno 1 para decirle a JS que peliB tiene que estar antes que peliA
  if (tituloPeliA > tituloPeliB) return 1;
  // si ambas pelis tienen el mismo titulo, retorno 0 para decirle a JS que no las tiene que mover
  return 0;
}
// Sobre el array ejecuto el metodo .sort() pasando como parametro la funcion de comparacion que creamos antes
misPeliculas.sort(ordenarPorTitulo);
// Muestro todas las pelis con un for()
console.log('peliculas ordenadas por titulo: ')
for (let i = 0; i < misPeliculas.length; i++) {
  const unaPeli = misPeliculas[i];
  console.log('  titulo: ' + unaPeli.titulo)
}






// ***************************************
// 2. Mostrar la película con mejor rating
// ***************************************

// Vamos a ordenar los objetos del array por rating
// Primero me creo la funcion de comparacion que le voy a pasar a .sort()
// ATENCION ACA: a diferencia de los puntos anteriores, vamos a ordenar DE MAYOR A MENOR
// de esta forma vamos a estar seguros que la peli en la posicion 0 es la que rating mas alto tiene
var ordenarPorRating = function (peliA, peliB) {
  // si el rating de la peliA es menor al de peliB, entonces retorno 1 para decirle a JS que peliB tiene que estar antes que peliA, por tener B mejor rating que A
  if (peliA.rating < peliB.rating) return 1;
  // si el rating de la peliB es menor al de peliA, entonces retorno -1 para decirle a JS que peliA tiene que estar antes que peliB, por tener A mejor rating que B
  if (peliA.rating > peliB.rating) return -1;
  // si ambas pelis tienen el mismo rating, retorno 0 para decirle a JS que no las tiene que mover
  return 0;
}
// Sobre el array ejecuto el metodo .sort() pasando como parametro la funcion de comparacion que creamos antes
misPeliculas.sort(ordenarPorRating);
// Como en este caso ordenamos de MAYOR A MENOR, me aseguro que en la primer posicion 0 tenemos la peli con MAYOR rating
var peliMejorRating = misPeliculas[0];
console.log('la peli con más rating es ' + peliMejorRating.titulo + ', que tiene rating ' + peliMejorRating.rating);







// ****************************************************
// 3. Mostrar la película con mayor cantidad de actores
// ****************************************************

// Vamos a ordenar los objetos del array por la cantidad de actores
// Para saber la cantidad de actores, puede usar la propiedad `length` del array `actores`
// Creamos la funcion de comparacion que le voy a pasar a .sort()
// ATENCION ACA: vamos a ordenar DE MAYOR A MENOR
// de esta forma vamos a estar seguros que la peli en la posicion 0 es la que mayor length del array de actores tiene
var ordenarPorCantidadDeActores = function (peliA, peliB) {
  // si la cantidad de actores de peliA es menor al de peliB, entonces retorno 1 para decirle a JS que peliB tiene que estar antes que peliA, por tener B mas actores que A
  if (peliA.actores.length < peliB.actores.length) return 1;
  // si la cantidad de actores de peliA es mayor al de peliB, entonces retorno -1 para decirle a JS que peliA tiene que estar antes que peliB, por tener A mas actores que B
  if (peliA.actores.length > peliB.actores.length) return -1;
  // si ambas pelis tienen misma cantidad de actores, retorno 0 para decirle a JS que no las tiene que mover
  return 0;
}
// Sobre el array ejecuto el metodo .sort() pasando como parametro la funcion de comparacion que creamos antes
misPeliculas.sort(ordenarPorCantidadDeActores);
// Como en este caso ordenamos de MAYOR A MENOR, me aseguro que en la primer posicion 0 tenemos la peli con MAYOR cantidad de actores
var peliConMasActores = misPeliculas[0];
console.log('la peli con más actores es ' + peliConMasActores.titulo + ', que tiene ' + peliConMasActores.actores.length + ' actores: ' + peliConMasActores.actores);







// ********************************
// 4. Mostrar la película más nueva
// ********************************

// Vamos a ordenar los objetos del array por anio
// Primero me creo la funcion de comparacion que le voy a pasar a .sort()
// ATENCION ACA: vamos a ordenar DE MAYOR A MENOR
// de esta forma vamos a estar seguros que la peli en la posicion 0 es la que tiene el MAYOR anio
var ordenarPorAnio = function (peliA, peliB) {
  // si el anio de la peliB es mayor al de peliA, entonces retorno 1 para decirle a JS que peliB tiene que estar antes que peliA, por tener B mayor anio que A
  if (peliA.anio < peliB.anio) return 1;
  // si el anio de la peliA es mayor al de peliB, entonces retorno -1 para decirle a JS que peliA tiene que estar antes que peliB, por tener A mayor anio que B
  if (peliA.anio > peliB.anio) return -1;
  // si ambas pelis tienen el mismo anio, retorno 0 para decirle a JS que no las tiene que mover
  return 0;
}
// Sobre el array ejecuto el metodo .sort() pasando como parametro la funcion de comparacion que creamos antes
misPeliculas.sort(ordenarPorAnio);
// Como los objetos del array fueron ordenados de mayor a menor según el anio, puedo asegurarme que en la primer posicion quedo la peli mas nueva
var peliMasNueva = misPeliculas[0];
// finalmente hago un console logo mostrando el titulo y anio de la peli
console.log('la peli más nueva es ' + peliMasNueva.titulo + ', que es del año ' + peliMasNueva.anio);








// ********************************
// 5. Mostrar la película más larga
// ********************************

// Vamos a ordenar los objetos del array por duracion
// Primero me creo la funcion de comparacion que le voy a pasar a .sort()
// ATENCION ACA: vamos a ordenar DE MAYOR A MENOR
// de esta forma vamos a estar seguros que la peli en la posicion 0 es la que tiene el MAYOR duracion
var ordenarPorDuracion = function (peliA, peliB) {
  // si duracion de la peliB es mayor al de peliA, entonces retorno 1 para decirle a JS que peliB tiene que estar antes que peliA, por tener B mayor duracion que A
  if (peliA.duracion < peliB.duracion) return 1;
  // si duracion de la peliA es mayor al de peliB, entonces retorno -1 para decirle a JS que peliA tiene que estar antes que peliB, por tener A mayor duracion que B
  if (peliA.duracion > peliB.duracion) return -1;
  // si ambas pelis tienen misma duracion, retorno 0 para decirle a JS que no las tiene que mover
  return 0;
}
// Sobre el array ejecuto el metodo .sort() pasando como parametro la funcion de comparacion que creamos antes
misPeliculas.sort(ordenarPorDuracion);
// Como los objetos del array fueron ordenados de mayor a menor según la duracion, puedo asegurarme que en la primer posicion quedo la peli mas larga
var peliMasLarga = misPeliculas[0];
console.log('la peli más larga es ' + peliMasLarga.titulo + ', con una duracion de ' + peliMasLarga.duracion + ' minutos');








// ***************************************
// 6. Eliminar la pelicula con peor rating
// ***************************************

// Vamos a ordenar los objetos del array por rating
// Primero me creo la funcion de comparacion que le voy a pasar a .sort()
var ordenarPorRating = function (peliA, peliB) {
  // si el rating de la peliA es menor al de peliB, entonces retorno -1 para decirle a JS que peliA tiene que estar antes que peliB, por tener A peor rating que B
  if (peliA.rating < peliB.rating) return -1;
  // si el rating de la peliB es menor al de peliA, entonces retorno 1 para decirle a JS que peliB tiene que estar antes que peliA, por tener B peor rating que A
  if (peliA.rating > peliB.rating) return 1;
  // si ambas pelis tienen el mismo rating, retorno 0 para decirle a JS que no las tiene que mover
  return 0;
}
// Sobre el array ejecuto el metodo .sort() pasando como parametro la funcion de comparacion que creamos antes
misPeliculas.sort(ordenarPorRating);
// Como en este caso ordenamos de MENOR A MAYOR por rating, me aseguro que en la primer posicion 0 tenemos la peli con MENOR/PEOR rating
// Usando el metodo shift() de array, podemos eliminar el elemento que se encuentra en la primer posicion... en este caso, la peor peli
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/shift
// https://www.w3schools.com/jsref/jsref_shift.asp
console.log('eliminé la peli con peor rating', misPeliculas.shift());








// *********************************
// 7. Eliminar la película más larga
// *********************************

// Vamos a ordenar los objetos del array por duracion
// Primero me creo la funcion de comparacion que le voy a pasar a .sort()
var ordenarPorDuracion = function (peliA, peliB) {
  // si duracion de la peliA es menor al de peliB, entonces retorno -1 para decirle a JS que peliA tiene que estar antes que peliB, por tener A menor duracion que B
  if (peliA.duracion < peliB.duracion) return -1;
  // si duracion de la peliB es menor al de peliA, entonces retorno 1 para decirle a JS que peliB tiene que estar antes que peliA, por tener B menor duracion que A
  if (peliA.duracion > peliB.duracion) return 1;
  // si ambas pelis tienen misma duracion, retorno 0 para decirle a JS que no las tiene que mover
  return 0;
}
// Sobre el array ejecuto el metodo .sort() pasando como parametro la funcion de comparacion que creamos antes
misPeliculas.sort(ordenarPorDuracion);
// Como los objetos del array fueron ordenados de MENOR A MAYOR según la duracion,
// puedo asegurarme que en la primer posicion quedo la peli mas corta y en la ultima la peli mas larga
// Usando el metodo pop() de array, podemos eliminar el elemento que se encuentra en la ultima posicion... en este caso, la peli mas larga
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/pop
// https://www.w3schools.com/jsref/jsref_pop.asp
console.log('eliminé la peli más larga', misPeliculas.pop());








// *****************************
// 8. Eliminar `peli3` y `peli5`
// *****************************

// como las variables peli3 y peli5 las tengo, pero no se donde estan, puedo ir a buscar su posicion con indexOf()
// var posicionPeli3 = misPeliculas.indexOf(peli3);
// var posicionPeli5 = misPeliculas.indexOf(peli5);
// // una vez que tengo las posiciones de ambas pelis, las puedo eliminar con splice()
// if (posicionPeli3 >= 0) misPeliculas.splice(posicionPeli3, 1);
// if (posicionPeli5 >= 0) misPeliculas.splice(posicionPeli5, 1);

// 8.bis Eliminar `peli3` y `peli5`
// Si no tuviera las variables peli3 y peli5 para hacer un indexOf(),
// la unica forma para ir a buscarlas es primero hacer un find()
var peli3 = misPeliculas.find(p => p.id === 3); // tambien puedo buscar por otra propiedad, por ejemplo: misPeliculas.find(p => p.titulo === 'aladin');
var peli5 = misPeliculas.find(p => p.id === 5); // tambien puedo buscar por otra propiedad, por ejemplo: misPeliculas.find(p => p.titulo === 'aladin y el rey de los ladrones');
if (peli3 != null) {
  var posicionPeli3 = misPeliculas.indexOf(peli3);
  if (posicionPeli3 >= 0) {
    misPeliculas.splice(posicionPeli3, 1);
  }
}

if (peli5 != null) {
  var posicionPeli5 = misPeliculas.indexOf(peli5);
  if (posicionPeli5 >= 0) {
    misPeliculas.splice(posicionPeli5, 1);
  }
}

// pobre aladdin, tiene la peor pelicula y encima eliminamos las otras dos que mas o menos zafaban