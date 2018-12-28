const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.send('Usamos el método GET')
});

router.post('/', function(req, res) {
  res.send('Usamos el método POST')
});

module.exports = router