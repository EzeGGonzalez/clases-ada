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
      const books = result.data.items.map(function (book) {
        return {
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          authors: book.volumeInfo.authors,
          // agrego un operador ternario para preguntar si viene con imageLinks... sino, pongo foto de batman!
          // falsy
          cover: book.volumeInfo.imageLinks ?
                  book.volumeInfo.imageLinks.thumbnail : IMG_DEFAULT,
        }
      })

      res.json(books);
    })
})

module.exports = router;
