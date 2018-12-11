var express = require('express');
var router = express.Router();
const arr = [ //constante, variable que no cambia
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

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.json(arr);
});

router.get('/users/:id', function(req, res, next) {
 const ff = req.params.id // lee todas las partes dinamicas de la url de ese mommento, req.params nos
 //devuelve un objeto con la parte dinamica de nuestra ruta, donde la clave de ese objeto es lo que esta despues ':'
 // y el valor es lo que ponermos en nustro navegador

 for (let i = 0; i < arr.length; i++) {
   if(arr[i].id == ff){
     return res.json(arr[i]);
   }
 }
});

router.post('/user', function(req, res, next){
  const user = req.body //lo que el usuario tipee en el form y se plasma por el body
  console.log(user);
  const lastId = arr[arr.length-1].id
  user.id = lastId + 1

  arr.push(user);
  res.json(arr);
});


router.put('/users/:id', function(req, res, next){
 const ff = req.params.id
 const body = req.body
//  {
//    name: 'eze',
//    surname: 'gonzalez',
//    age: 29
//  }

// buscando las keys/propiedades del objeto
 const bodyKeys = Object.keys(body)
 // ['name', 'surname', 'age']

 for (var i = 0; i < arr.length; i++) {
   const currentUser = arr[i];
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

 console.log(arr);


});

router.delete('/users/:id', function(req, res, next){
 console.log(arr);
 const ff = req.params.id

 for (var i = 0; i < arr.length; i++) {
    if (arr[i].id == ff){
     arr.splice(i, 1)
   }
   console.log(arr);
 }

});

module.exports = router;