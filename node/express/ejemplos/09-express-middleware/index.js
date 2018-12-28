const express = require('express')
const app = express()
const path = require('path')

const miMiddleware = function(req, res, next) {
  console.log('paso por un middlaware, que se ejecuta siempre!')
  next()
}

app.use(miMiddleware)

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});