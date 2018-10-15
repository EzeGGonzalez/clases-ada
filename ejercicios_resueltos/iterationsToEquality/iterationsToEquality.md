```
array = [1, 3, 3]
vuelta = 0

// los elementos del array sean distintos
iguales = true // son iguales

por cada elemento del array
  si array[0] != array[i]
    // si hay uno distinto es que son distintos
    iguales = false

mientras !iguales
  // el mayor, por ahora, creo que es el primero
  mayor = 0

  por cada elemento del array
    si array[mayor] < array[i]
      mayor = i

  por cada elemento del array
    si i != mayor
      array[i]++

  // los elementos del array sean distintos
  iguales = true // son iguales

  por cada elemento del array
    si array[0] != array[i]
      // si hay uno distinto es que son distintos
      iguales = false

  vuelta++

mostrar vuelta
```