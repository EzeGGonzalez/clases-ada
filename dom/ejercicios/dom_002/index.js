var imagen = document.getElementById('la-imagen');
var imagenes = [
  'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
  'https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif',
  'https://www.vrc.crim.cam.ac.uk/VRCconferences/conference/cplenaries/pelnspeakers/person-placeholder.jpg/image'
];

function botones (posicionDeLaImagen) {
  imagen.src = imagenes[posicionDeLaImagen];
}

// function  botones1 () {
//   imagen.src = 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image';
// }

// function  botones2 () {
//   imagen.src = 'https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif';
// }

// function  botones3 () {
//   imagen.src = 'https://www.vrc.crim.cam.ac.uk/VRCconferences/conference/cplenaries/pelnspeakers/person-placeholder.jpg/image';
// }