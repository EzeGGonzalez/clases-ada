function piramideCentrada (lineas) {
  for (var fila = 0, otraVariable = 1; fila < lineas; fila++, otraVariable += 2) {
    var linea = "";

    // llenar la linea de asteriscos
    for (var x = 0; x < otraVariable; x++) {
      linea = linea + "*";
    }

    console.log(linea);
  }
}

function piramideInvertida (lineas) {
  for (var fila = 0, otraVariable = (lineas * 2 - 1); fila < lineas; fila++, otraVariable -= 2) {
    var linea = "";

    // llenar la linea de asteriscos
    for (var x = 0; x < otraVariable; x++) {
      linea = linea + "*";
    }

    console.log(linea);
  }
}

var lineas = 9
var superior = Math.round(lineas / 2)
var inferior = Math.round(lineas / 2)

if (lineas % 2 !== 0) {
  inferior--
}

piramideCentrada(superior)
piramideInvertida(inferior)