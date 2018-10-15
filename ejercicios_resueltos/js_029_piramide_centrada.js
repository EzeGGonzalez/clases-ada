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

piramideCentrada(5)