var express = require('express');
var router = express.Router();
// incluir axios
const axios = require('axios');
const path = require('path');

const isbns = [];

router.get('/books', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

router.get('/books/new', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'new.html'));
})

router.get('/books/detail', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'detail.html'));
})

// https://www.googleapis.com/books/v1/volumes?q=isbn:8478290761

// POST /books
router.post('/api/books', function (req, res) {
  const isbn = req.body;
  isbns.push(isbn);
  res.json(isbns);
});

// GET /books
router.get('/api/books', function (req, res) {
  res.json(isbns);
})

// GET /books/:isbn
// http://localhost:3000/books/8478290761
router.get('/api/books/:isbn', function(req, res, next) {
  const isbn = req.params.isbn;
  axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
  .then(function (elResultado) {
    const data = elResultado.data;

    const book = {
      title: data.items[i].volumeInfo.title,
      subtitle: data.items[i].volumeInfo.subtitle,
      description: data.items[i].volumeInfo.description,
      authors: data.items[i].volumeInfo.authors,
      cover: data.items[i].volumeInfo.imageLinks.thumbnail,
      isbn: isbn
    }

    res.json(book);
  })
});

module.exports = router;
