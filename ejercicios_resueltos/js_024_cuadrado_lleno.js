function cuadradoLleno (filas, columnas) {
  // itero por cada fila que voy a mostrar con asteríscos
  for (var fila = 0; fila < filas; fila++) {
    // primero, creo la línea vacía
    var linea = "";

    // llenar la linea de asteriscos
    for (var x = 0; x < columnas; x++) {
      linea = linea + "*";
    }

    // al final, muestro la línea llena con los asteríscos
    console.log(linea);
  }
}

cuadradoLleno(5, 5)