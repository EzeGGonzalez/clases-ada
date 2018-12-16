$('.boton').on('click', function () {
  let elBotonDondeHicimosClick = $(this);
  // $(this) es el elemento con la clase 'boton' que se clickeo
  console.log(elBotonDondeHicimosClick)
})

document.getElementById('otroboton').onclick = function () {
  let yEstoQueSera = $(this);
  // en este caso, con el this, SI podemos saber en que boton se hizo click
  console.log(yEstoQueSera)
}

function otroboton () {
  let yEstoOtroQueSera = $(this);
  // en este caso, con el this, que agregamos la funcion con el onclick en html NO podemos saber en que boton se hizo click
  console.log(yEstoOtroQueSera)
}