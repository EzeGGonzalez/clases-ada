const express = require('express');
const path = require('path');
const axios = require('axios');
const router = express.Router();

const IMG_DEFAULT = 'http://s3-eu-west-1.amazonaws.com/cinemania-cdn/wp-content/uploads/2019/01/06124759/Batman_Largo_Halloween.png';

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

router.get('/listado', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'listado.html'))
})

// direccion de la API para devolver todos los libros segun un parametro de busqueda
router.get('/api/books', function (req, res) {
  const palabraDeBusqueda = req.query.search

  // https://www.googleapis.com/books/v1/volumes?q=javascript
  axios
    .get('https://www.googleapis.com/books/v1/volumes?q=' + palabraDeBusqueda)
    .then(function (result) {
      // la funcion map es para convertir un array de datos en otro array de datos, segun la funcion que pasamos como parametro
      // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
      // https://www.w3schools.com/jsref/jsref_map.asp
      // https://medium.com/@xadrijo/explorando-la-funci%C3%B3n-map-en-javascript-c04c42773fb6
      const books = result.data.items.map(function (book) {
        return {
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          authors: book.volumeInfo.authors,
          // agrego un operador ternario para preguntar si viene con imageLinks... sino, pongo foto de batman!
          cover: book.volumeInfo.imageLinks ?
                  book.volumeInfo.imageLinks.thumbnail : IMG_DEFAULT,
        }
      })

      res.json(books);
    })
})

module.exports = router;
