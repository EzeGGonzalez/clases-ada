var cantidadDeFilas = 5;
var cantidadDeColumnas = 5;

// itero por cada fila que voy a mostrar con asteríscos
for (var fila = 0; fila < cantidadDeFilas; fila++) {
  // primero, creo la línea vacía
  var linea = "";

  // llenar la linea de asteriscos
  for (var x = 0; x < cantidadDeColumnas; x++) {
    linea = linea + "*";
  }

  // al final, muestro la línea llena con los asteríscos
  console.log(linea);
}

