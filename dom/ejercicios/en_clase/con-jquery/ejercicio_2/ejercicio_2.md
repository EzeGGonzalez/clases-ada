# DOM - FizzBuzz

* Crear un documento index.html, con el siguiente contenido
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Ejercicio 2</title>
  </head>
  <body>
    <ul>
      <li>Justo ipsum sed dolor no aliquyam et diam. Kasd dolor.</li>
      <li>Et sadipscing ipsum sit sit ipsum sea erat rebum justo.</li>
      <li>Eirmod ea est voluptua ipsum erat invidunt, sit voluptua duo.</li>
      <li>Dolor et elitr voluptua et sed ipsum, takimata gubergren eirmod.</li>
      <li>Ipsum vero no lorem aliquyam aliquyam et. Ut accusam clita.</li>
      <li>Justo ipsum sed dolor no aliquyam et diam. Kasd dolor.</li>
      <li>Et sadipscing ipsum sit sit ipsum sea erat rebum justo.</li>
    </ul>

    <div>Cantidad de lineas: <span id="cantidad"></span></div>

    <script src="index.js"></script>
  </body>
  </html>
  ```
  * Crear el documento index.js
  * Seleccionar todos los `li` existentes en el documento
  * Contar la cantidad de elementos seleccionados del punto anterior
  * Seleccionar el elemento con ID `cantidad`
  * Al elemento del punto anterior, agregarlo como contenido mediante `innerHTML` el número de elementos contados anteriormente