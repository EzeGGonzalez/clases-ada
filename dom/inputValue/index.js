function alertarElValorDelInput () {
  // voy a buscar el elemento input, con id 'el-texto'
  var elInput = document.getElementById('el-texto');
  // con el elemento input que seleccioné antes, puedo pedirle el valor que contiene usando la propiedad .value
  var elValorDelInput = elInput.value

  // muestro ese valor al usuario
  alert(elValorDelInput)
}