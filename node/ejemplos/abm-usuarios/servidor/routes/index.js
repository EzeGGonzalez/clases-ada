const express = require('express');
const router = express.Router();

// constante, variable que no cambia
const users = [
  {
    name:'Juani',
    surname:'Gallo',
    age: 25,
    id : 1
  },
  {
    name: 'Sabri',
    surname:'Alvarez',
    age: 18,
    id : 2
  }
]

// ruta de la api para obtener todo el array de users
router.get('/users', function(req, res) {
  res.json(users);
});

// ruta de la api para obtener un user en particular
router.get('/users/:id', function(req, res) {
  // lee todas las partes dinamicas de la url de ese mommento, req.params nos
  const userId = req.params.id;

  //devuelve un objeto con la parte dinamica de nuestra ruta, donde la clave de ese objeto es lo que esta despues ':'
  // y el valor es lo que ponermos en nustro navegador
  for (let i = 0; i < users.length; i++) {
    // me fijo si el usuario que estoy iterando tiene el ID que me llego por parametro
    if (users[i].id == userId) {
      // respondo al cliente con el usuario especifico
      return res.json(users[i]);
    }
  }
});

// ruta de la api para crear un usuario nuevo
router.post('/user', function(req, res) {
  // lo que escribimos en el form de la web y enviamos via ajax
  const user = req.body;

  // obtengo el siguiente ID buscando el ultimo elemento que tenia
  const lastId = users[users.length-1].id
  // al ultimo ID de usuario que tenia, le sumo uno para obtener el siguiente
  user.id = lastId + 1

  // agrego el usuario en el array
  users.push(user);

  // respondo con el array de usuarios
  res.json(users);
});

// ruta de la api para editar un usuario
router.put('/users/:id', function(req, res, next){
  const userId = req.params.id;
 const body = req.body
//  {
//    name: 'eze',
//    surname: 'gonzalez',
//    age: 29
//  }

// buscando las keys/propiedades del objeto
 const bodyKeys = Object.keys(body)
 // ['name', 'surname', 'age']

 for (var i = 0; i < users.length; i++) {
   const currentUser = users[i];
   if (currentUser.id == ff) {
     // pedimos todas las propiedades/keys que tiene que el objeto usuario
     const userKeys = Object.keys(currentUser);
     // iteramos por cada clave que el cliente quiere modificar
     for (let x = 0; x < bodyKeys.length; x++) {
       const currentBodyKey = bodyKeys[x]
       if (userKeys.indexOf(currentBodyKey) > -1) {
         currentUser[currentBodyKey] = body[currentBodyKey]
       }else{
         console.log(`${currentBodyKey} no es una clave valida`);
       }
     }

     return res.json(currentUser)
   }
 }

 console.log(users);


});

router.delete('/users/:id', function(req, res, next){
 console.log(users);
 const ff = req.params.id

 for (var i = 0; i < users.length; i++) {
    if (users[i].id == ff){
     users.splice(i, 1)
   }
   console.log(users);
 }

});

module.exports = router;