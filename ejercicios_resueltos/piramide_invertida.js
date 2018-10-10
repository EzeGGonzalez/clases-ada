for (var fila = 0, otraVariable = 9; fila < 5; fila++, otraVariable -= 2) {
  var linea = "";

  // llenar la linea de asteriscos
  for (var x = 0; x < otraVariable; x++) {
    linea = linea + "*";
  }

  console.log(linea);
}

