var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res) {
  // hago un get a la url de la api
  axios
    .get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
    .then(response => {
      // la info que me respondió la api está en la propiedad .data
      var users = response.data;

      // finalmente envio los usuarios al cliente
      res.json(users);
    })
});

router.get('/map', function(req, res) {
  // hago un get a la url de la api
  axios
    .get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
    .then(response => {
      // la info que me respondió la api está en la propiedad .data
      var users = response.data;

      users = users.map(u => {
        return {
          fullname: `${u.first} ${u.last}`,
          email: u.email
        }
      })

      // finalmente envio los usuarios al cliente
      res.json(users);
    })
});

module.exports = router;
