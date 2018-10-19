function eliminarImagen () {
  // obtengo el contendor
  // esto seria el elemento PADRE, del que quiero eliminar un hijo
  var elDiv = document.getElementById('principal')

  // obtengo el elemento hijo que quiero borrar
  var laImagen = document.getElementById('imagen')

  // finalmente le digo al elemento padre que elimine al child guardado en la variable laImagen
  elDiv.removeChild(laImagen)
}