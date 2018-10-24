// objeto literales
// declaro una variable, donde voy a guardar el nuevo objeto
var gata = {
  // propiedades
  // clave: valor
  nombre: 'rufina',
  patas: 4,
  ojos: 2,
  tieneHambre: true,

  // metodos
  // los metodos de un objeto también se guardan en la forma clave: valor, solo que el valor en este caso es una función
  saludar: function () {
    console.log('hola humano');
  }
}

// ejecuto la funcion saludar, que muestra un console.log
gata.saludar();

// tambien puedo acceder y ver los valores de las propiedades de la siguiente forma
gata.nombre;
// de esta forma podria, por ejemplo, mostrarlo en un console.log
console.log('el nombre de mi gata es ' + gata.nombre);