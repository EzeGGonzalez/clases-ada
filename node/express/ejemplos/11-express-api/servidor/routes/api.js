const express = require('express')
const router = express.Router()

// creo un array, donde voy a ir almacenando los emails
// de esta forma la informacion no esta escrita en la web, sino que la guardamos en un servidor, en un lugar central
// y cada vez que entremos a nuestra app web, vamos a poder consultar esa info mediante la API
const movies = [
  { id: 1, title: 'Batman Begins', summary: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.', year: 2005 },
  { id: 2, title: 'The Dark Knight', summary: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.', year: 2008 },
  { id: 3, title: 'The Dark Knight Rises', summary: 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.', year: 2012 }
]

// creo una ruta que devuelve el array de emails
router.get('/api/movies', function (req, res) {
  res.json(movies)
})

// Configuramos la url para que espere un id
// la agregamos antes del module.exports
router.get('/api/movies/:id', function (req, res) {
  const id = req.params.id

  // Usamos el id para buscar en el array el objeto que tenga ese mismo id
  const movie = movies.find(function (pelicula) {
    return pelicula.id == id
  })

  // si no encontré ninguna pelicula, le devolvemos un estado 404 not found y un mensaje
  if (!movie) {
    return res.status(404).send(`La pelicula con id ${id} no existe.`)
  }

  // respondemos a quien nos pidio la pelicula con el objeto json que encontramos
  res.json(movie)
})

// creamos una ruta para esperar que nos pidan guardar una nueva pelicula mediante HTTP POST
router.post('/api/movies', function(req, res) {
  // gracias al modulo body-parser, podemos obtener los datos que nos enviaron en req.body
  const title = req.body.title
  const summary = req.body.summary
  const year = req.body.year

  // creo el nuevo objeto a guardar
  // como los objetos de peliculas tambien tienen la propiedad id, es importante crearla
  // y es una propiedad que siempre creamos en el servidor
  const movieToPush = {
    // si tengo alguna pelicula, tomo el ultimo ID y obtengo el siguiente... sino empiezo desde 1
    id: movies.length > 0 ? (movies[movies.length - 1].id + 1) : 1,
    title: title,
    summary: summary,
    year: year
  }

  // finalmente guardo el objeto en mi array de peliculas
  movies.push(movieToPush)

  // y para indicar que todo salio bien, le respondemos al cliente con el array de peliculas actualizado
  res.send(movies)
})

module.exports = router