// primero creo una funcion para obtener la calificacion promedio de una pelicula
var calificacionFn = function () {
  var suma = 0;
  for (var i = 0; i < this.calificaciones.length; i++) {
    suma += this.calificaciones[i];
  }
  var calificacion = suma / this.calificaciones.length;
  return calificacion;
}

// creo cada uno de los objetos pelicula que posteriormente voy a agregar en mi objeto netflix
var peli1 = {
  nombre: 'friday the 13th',
  genero: 'horror',
  actores: ['Betsy Palmer', 'Adrienne King', 'Jeannine Taylor'],
  calificaciones: [5, 2, 3],
  vistas: 9,
  // la pelicula tiene un metodo para obtener la calificacion promedio
  // esta funcion, fue la que creamos arriba, y la asigno en este punto en lugar de declararla todo el tiempo igual
  calificacion: calificacionFn
}


var peli2 = {
  nombre: 'aladdin',
  genero: 'animada',
  actores: ['Jafar', 'Aladdin', 'Jasmin', 'Genio'],
  calificaciones: [5, 2, 3],
  vistas: 98,
  // la pelicula tiene un metodo para obtener la calificacion promedio
  // esta funcion, fue la que creamos arriba, y la asigno en este punto en lugar de declararla todo el tiempo igual
  calificacion: calificacionFn
}

var peli3 = {
  nombre: 'aladdin, la peor',
  genero: 'animada',
  actores: ['Jafar', 'Aladdin', 'Jasmin', 'Genio'],
  calificaciones: [1,1,1,1],
  vistas: 98,
  // la pelicula tiene un metodo para obtener la calificacion promedio
  // esta funcion, fue la que creamos arriba, y la asigno en este punto en lugar de declararla todo el tiempo igual
  calificacion: calificacionFn
}

// creo el objeto todopoderoso NETFLIX
var netflix = {
  // el objeto va a tener una propiedad peliculas, que es un array donde vamos a guardar cada pelicula nueva que agreguemos
  peliculas: [],

  // metodo agregarPelicula: recibe por parametro un objeto pelicula y lo pushea en el array interno de peliculas
  // CONSULTA: y si agregamos la misma pelicula varias veces??
  agregarPelicula: function (pelicula) {
    this.peliculas.push(pelicula);
  },

  // // metodo buscarPeliculasPorGenero: recibe por parametro el string del genero a buscar, y retorna un array con las peliculas que son de ese genero
  // // si no hay peliculas de un genero especificado, retorna una array vacio
  // buscarPeliculasPorGenero: function (generoABuscar) {
  //   // tengo un array vacio, donde voy a ir poniendo cada pelicula que encuentre del genero buscado
  //   var peliculasPorGenero = [];

  //   // itero por cada pelicula
  //   for (var i = 0; i < this.peliculas.length; i++) {
  //     // si el genero de la pelicula que tengo en la posicion i es igual al genero que me pasaron por parametro
  //     // entonces agrego esa pelicula al array de las peliculas filtradas
  //     if (this.peliculas[i].genero === generoABuscar) {
  //       peliculasPorGenero.push(this.peliculas[i]);
  //     }
  //   }

  //   // al final, retorno el array con las pelis que filtre
  //   return peliculasPorGenero;
  // },

  // metodo buscarPeliculasPorGenero: recibe por parametro el string del genero a buscar, y retorna un array con las peliculas que son de ese genero
  // si no hay peliculas de un genero especificado, retorna una array vacio
  // OTRA SOLUCION... y si, mucho mejor
  // usando la función filter()
  // es similar al find(), donde también le pasamos una funcion con el filtro, pero en lugar de buscar un solo elemento que cumpla, devuelve un array con todos los elementos que pasan esa condicion
  buscarPeliculasPorGenero: function (generoABuscar) {
    return this.peliculas.filter(p => p.genero === generoABuscar)
  }
}

// agrego las peliculas que acabo de generar
netflix.agregarPelicula(peli1);
netflix.agregarPelicula(peli2);
netflix.agregarPelicula(peli3);

netflix.buscarPeliculasPorGenero('comedia'); // retorna un array vacio
netflix.buscarPeliculasPorGenero('animada'); // retorna un array con ambas pelis de aladdin