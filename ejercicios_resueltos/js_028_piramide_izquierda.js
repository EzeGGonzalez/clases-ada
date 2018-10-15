function piramideIzquierda (lineas) {
  for (var fila = 0, otraVariable = 1; fila < lineas; fila++, otraVariable += 1) {
    var linea = "";

    // llenar la linea de asteriscos
    for (var x = 0; x < otraVariable; x++) {
      linea = linea + "*";
    }

    console.log(linea);
  }
}

piramideIzquierda(5)