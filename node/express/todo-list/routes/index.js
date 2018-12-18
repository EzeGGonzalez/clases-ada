var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/todos', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.get('/todos/new', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'new.html'));
});

router.get('/todos/edit', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'edit.html'));
});

module.exports = router;
