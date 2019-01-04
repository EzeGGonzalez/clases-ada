var express = require('express');
var router = express.Router();
const path = require('path');
// incluir axios
const axios = require('axios');

const isbns = [];

// https://www.googleapis.com/books/v1/volumes?q=isbn:8478290761

router.get('/nuevo-libro', function (req, res) {
  res.sendFile(
    path.join(__dirname, '..', 'public', 'new.html')
  );
});
router.get('/listado', function (req, res) {
  res.sendFile(
    path.join(__dirname, '..', 'public', 'index.html')
  );
});
router.get('/detalle', function (req, res) {
  res.sendFile(
    path.join(__dirname, '..', 'public', 'detail.html')
  );
});


// API!!!

// POST /books
router.post('/books', function (req, res) {
  const book = req.body;
  console.log(book.isbn)
  // obtener el titulo
  axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + book.isbn)
    .then(function (result) {
      book.title = result.data.items[0].volumeInfo.title
      isbns.push(book);
      res.json(isbns);
    })
});

// GET /books
router.get('/books', function (req, res) {
  res.json(isbns);
})

// GET /books/:isbn
// http://localhost:3000/books/8478290761
router.get('/books/:isbn', function(req, res, next) {
  const isbn = req.params.isbn;
  axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
  .then(function (elResultado) {
    console.log(elResultado.data);
    const data = elResultado.data;

    const book = {
      title: data.items[0].volumeInfo.title,
      subtitle: data.items[0].volumeInfo.subtitle,
      description: data.items[0].volumeInfo.description,
      authors: data.items[0].volumeInfo.authors,
      cover: data.items[0].volumeInfo.imageLinks.thumbnail,
      isbn: isbn
    }

    res.json(book);
  })
});

module.exports = router;
