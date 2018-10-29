class Pelicula {
  constructor (nombre, genero, actores, calificaciones, vistas) {
    this.nombre = nombre;
    this.genero = genero;
    this.actores = actores;
    this.calificaciones = calificaciones;
    this.vistas = vistas;
  }

  calificacion () {
    // inicializo el acumulador en 0
    var suma = 0;

    // itero sobre cada calificacion de la pelicula
    for (var i = 0; i < this.calificaciones.length; i++) {
      // en suma, voy acumulando el valor de cada calificacion
      suma += this.calificaciones[i];
    }
    // divido la sumatoria por la cantidad de calificaciones y obtengo el promedio de calificacion
    var calificacion = suma / this.calificaciones.length;

    // retorno la calificacion promedio
    return calificacion;
  }
}


// creo cada uno de los objetos pelicula que posteriormente voy a agregar en mi objeto netflix
var peli1 = new Pelicula('friday the 13th', 'horror', ['Betsy Palmer', 'Adrienne King', 'Jeannine Taylor'], [5, 2, 3], 9);
var peli2 = new Pelicula('aladdin', 'animada', ['Jafar', 'Aladdin', 'Jasmin', 'Genio'], [5, 2, 3], 98);
var peli3 = new Pelicula('aladdin, la peor', 'animada', ['Jafar', 'Aladdin', 'Jasmin', 'Genio'], [1,1,1,1], 8);

// creo el objeto todopoderoso NETFLIX
var netflix = {
  // el objeto va a tener una propiedad peliculas, que es un array donde vamos a guardar cada pelicula nueva que agreguemos
  peliculas: [],

  // metodo agregarPelicula: recibe por parametro un objeto pelicula y lo pushea en el array interno de peliculas
  // CONSULTA: y si agregamos la misma pelicula varias veces??
  agregarPelicula: function (pelicula) {
    this.peliculas.push(pelicula);
  },

  // metodo buscarPeliculasPorGenero: recibe por parametro el string del genero a buscar, y retorna un array con las peliculas que son de ese genero
  // si no hay peliculas de un genero especificado, retorna una array vacio
  buscarPeliculasPorGenero: function (generoABuscar) {
    // tengo un array vacio, donde voy a ir poniendo cada pelicula que encuentre del genero buscado
    var peliculasPorGenero = [];

    // itero por cada pelicula
    for (var i = 0; i < this.peliculas.length; i++) {
      // si el genero de la pelicula que tengo en la posicion i es igual al genero que me pasaron por parametro
      // entonces agrego esa pelicula al array de las peliculas filtradas
      if (this.peliculas[i].genero === generoABuscar) {
        peliculasPorGenero.push(this.peliculas[i]);
      }
    }

    // al final, retorno el array con las pelis que filtre
    return peliculasPorGenero;
  }
}

// agrego las peliculas que acabo de generar
netflix.agregarPelicula(peli1);
netflix.agregarPelicula(peli2);
netflix.agregarPelicula(peli3);

netflix.buscarPeliculasPorGenero('comedia'); // retorna un array vacio
netflix.buscarPeliculasPorGenero('animada'); // retorna un array con ambas pelis de aladdin