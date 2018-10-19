# DOM - 4

* Crear un documento index.html, con el siguiente contenido
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Ejercicio 3</title>
  </head>
  <body>
    <button id="generar">Agregar lineas</button>

    <ul id="lineas"></ul>

    <script src="index.js"></script>
  </body>
  </html>
  ```
  * Crear el documento index.js
  * Seleccionar el elemento `<ul>` con ID `lineas`
  * Crear 5 elementos `<li>`
  * El contenido de cada `<li>` tiene que ser el texto `linea nro {posicion de la linea}`
  * Si ya hay elementos `<li>` dentro del contenedor `<ul>`, el número de la posición tiene que retomar desde el último número alcanzado
  * Agregar todos los elementos `<li>` al elemento padre `<ul>`