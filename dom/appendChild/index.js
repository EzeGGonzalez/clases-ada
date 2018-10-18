function agregarImg () {
  // creo un nuevo elemento IMG
  var img = document.createElement('img');
  // obtengo el elemento DIV donde voy a agregar la imagen
  var elDiv = document.getElementById('principal');
  // asigno un src a la imagen
  img.src = 'https://cdn1.altiria.com/wp-content/uploads/2017/03/node-logo.jpg'
  // al DIV donde voy a agregar la imagen le digo que agregue un nuevo elemento
  elDiv.appendChild(img)

  // para agregar un elemento en el body
  // document.body.appendChild(img)
  // document.body.insertBefore(img, elDiv)
}