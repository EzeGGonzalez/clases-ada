var numeros = [4, 3, 7, 10, 2, 1];

numeros.sort()
// esto devolveria:
// [1, 10, 2, 3, 4, 7]
// porque compara cada numero como string, y los ordena alfabeticamente

// Si no se provee una función de comparación
// los elementos son ordenados convirtiéndolos a strings
// y comparando la posición del valor Unicode de dichos strings.
// Por ejemplo, "Cherry" viene antes que "banana"  (por ir las mayúsculas antes que las minúsculas en la codificación Unicode)
// En un ordenamiento numérico, 2 está antes que 10
// pero dado que los números son convertidos a strings y ordenados según el valor Unicode
// el resultado será "10" antes que "2".

// para que compare bien los numeros, le tengo que pasar una funcion con el criterio que quiero que compare
const ordenarNumeros = function (numeroUno, numeroDos) {
  // si numeroUno es menor que numeroDos, retorno -1 para indicarselo a JS
  if (numeroUno < numeroDos) return -1;
  // si numeroUno es mayor que numeroDos, retorno +1 para indicarselo a JS
  if (numeroUno > numeroDos) return 1;
  // si ambos son iguales, tengo que retornar 0
  return 0;
}

numeros.sort(ordenarNumeros)
// esto devolveria:
// [1, 2, 3, 4, 7, 10]

// Si se provee una funcion de comparacion,
// los elementos del array son ordenados de acuerdo al valor que retorna dicha función de comparación.
// Siendo numeroUno y numeroDos (en el ejemplo de arriba) los dos elementos comparados, entonces:
//   * Si funcionComparacion(numeroUno, numeroDos) es menor que 0, se sitúa numeroUno en un indice menor que numeroDos. Es decir, numeroUno viene primero.
//   * Si funcionComparacion(numeroUno, numeroDos) retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores (p.ej.  Mozilla en versiones que datan hasta el 2003) respetan esto.
//   * Si funcionComparacion(numeroUno, numeroDos) es mayor que 0, se sitúa numeroDos en un indice menor que numeroUno.