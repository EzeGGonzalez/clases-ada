# DOM - 4

* Crear un documento index.html, con el siguiente contenido
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Ejercicio 5</title>
  </head>
  <body>
    <input type="text" id="q-lineas">
    <button id="generar">Agregar lineas</button>

    <ul id="lineas"></ul>

    <script src="index.js"></script>
  </body>
  </html>
  ```
  * Crear el documento index.js
  * Seleccionar el elemento `<ul>` con ID `lineas`
  * Cuando se hace click en el botón de id `generar`:
    * Obtener el número que el usuario ingresó en el input `q-lineas`
    * Crear la cantidad de elementos `<li>` que el usuario ingresó en el input que obtuvimos en el punto anterior
    * El contenido de cada `<li>` tiene que ser el texto `linea nro {posicion de la linea}`
    * Si ya hay elementos `<li>` dentro del contenedor `<ul>`, el número de la posición tiene que retomar desde el último número alcanzado
    * Agregar todos los elementos `<li>` creados al elemento padre `<ul>`