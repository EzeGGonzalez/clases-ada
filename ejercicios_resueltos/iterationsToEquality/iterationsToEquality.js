function elementosIguales (array) {
  var iguales = true; // son iguales

  for (var i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) {
      iguales = false;
    }
  }

  return iguales;
}

function iterationsToEquality (array) {
  var vuelta = 0

  // los elementos del array sean distintos
  var iguales = elementosIguales(array);

  // !true == false
  while (!iguales) {
    // el mayor, por ahora, creo que es el primero
    var mayor = 0;

    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[mayor]) {
        mayor = i;
      }
    }

    for (var i = 0; i < array.length; i++) {
      if (i !== mayor) {
        array[i]++;
      }
    }

    iguales = elementosIguales(array);

    vuelta++;
  }

  return vuelta;
}

var cantidadDeVueltas = iterationsToEquality([1, 3, 3])
console.log(cantidadDeVueltas)

var cantidadDeVueltas = iterationsToEquality([2, 6, 8])
console.log(cantidadDeVueltas)