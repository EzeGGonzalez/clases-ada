// incluimos el modulo de express
const express = require('express');

// creamos la aplicacion de express
const app = express();

// creamos las rutas
// creamos el router de express
const router = express.Router();

// creamos una ruta
router.get('/favoritos', function (req, res, next) {
  res.send('<h1>hola</h1>');
});

router.post('/favoritos', function (req, res) {
  // y aca hacemos algo
});

app.use(router);

app.listen(3000, function () {
  console.log('server listening...')
});