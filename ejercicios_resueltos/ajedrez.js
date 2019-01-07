const filas = 8;
const columnas = 8;

// \n
let cadenaDeTexto = "";

for (let fila = 0; fila < filas; fila++) {
  for (let columna = 0; columna < columnas; columna++) {
    // si fila y columna son pares, o fila y columna son impares => agrego un espacio
    if ((fila % 2 === 0 && columna % 2 === 0) || (fila % 2 !== 0 && columna % 2 !== 0)  ) {
      cadenaDeTexto += " ";
    } else {
      cadenaDeTexto += "#";
    }
  }
  cadenaDeTexto += "\n";
}

console.log(cadenaDeTexto);