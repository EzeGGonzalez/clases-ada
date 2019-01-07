const filas = 8;
const columnas = 12;

// \n
let cadenaDeTexto = "";

for (let j = 0; j < filas; j++) {
  for (let i = 0; i < columnas; i++) {
    // si es par
    if ((j % 2 === 0 && i % 2 === 0) || (j % 2 !== 0 && i % 2 !== 0)  ) {
      cadenaDeTexto += " ";
    } else {
      cadenaDeTexto += "#";
    }
  }
  cadenaDeTexto += "\n";
}
console.log(cadenaDeTexto);