const express = require('express');
const fs = require('fs');
// esto es un modulo que genera id alfanumericos random
const shortid = require('shortid');
const router = express.Router();

// RUTA para obtener el array de todos los todos guardados en el archivos todos.json
router.get('/todos', function(req, res, next) {
  // leo el archivo todos.json y lo parseo para obtener el array
  let todos = JSON.parse( fs.readFileSync('todos.json') );
  const search = req.query.search;

  // solo filtro si el parametro tiene algo
  if (search && search.length > 0) {
    todos = todos.filter(function (todo) {
      return todo.text.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    })
  }

  // le respondo al usuario con ese array
  res.json(todos);
});

// RUTA para obtener un todo especifico
router.get('/todos/:id', function(req, res, next) {
  // leo el archivo todos.json y lo parseo para obtener el array
  const todos = JSON.parse(fs.readFileSync('todos.json'));
  // busco el todo especifico con el id que me llega en req.params.id
  const todo = todos.find(t => t.id === req.params.id)
  // si el todo existe, se lo devuelvo al usuario
  if (todo) {
    res.json(todo)
  } else { // si no existe, le devuelvo un 404 not found
    res.status(404).end('el todo que me pediste, no existe!');
  }
});

// esta funcion va a retorna false si el objeto no pasa alguna validacion, o retorna true si es correcto
function esValido (elTodo) {
  // si el objeto no tiene la propiedad .text, no es valido
  if (!elTodo.text) {
    return false;
  }
  // si la propiedad .text está vacia, no es valido
  if (elTodo.text.length === 0) {
    return false;
  }

  // si no salio antes por las validaciones, significa que el objeto es correcto
  return true;
}

// RUTA para guardar un nuevo todo
router.post('/todos', function(req, res, next) {
  // leo el archivo todos.json y lo parseo para obtener el array
  const todos = JSON.parse(fs.readFileSync('todos.json'));
  // si los datos que me llegaron no estan bien, respondo con un 400 y un mensaje avisando que esta mal el objeto
  if (!esValido(req.body)) {
    return res.status(400).end('el todo que queres agregar, es incorrecto');
  }

  // creo el nuevo objeto todo con los datos que vienen en req.body y le agrego un id
  const newTodo = {
    id: shortid.generate(),
    text: req.body.text
  }
  // agrego el nuevo todo al array de todos
  todos.push(newTodo);
  // como modifique el array, vuelvo a guardarlo en el archivo todos.js
  fs.writeFileSync('todos.json', JSON.stringify(todos));
  // al final, respondo el request con el array de todos
  res.json(todos);
});

// RUTA para editar un todo
router.put('/todos/:id', function(req, res, next) {
  // leo el archivo todos.json y lo parseo para obtener el array
  const todos = JSON.parse( fs.readFileSync('todos.json') );
  // voy a buscar el todo especifico que quiero editar
  const todo = todos.find(t => t.id === req.params.id)
  // si el todo no existe, respondo con un 404
  if (!todo) {
    return res.status(404).end('el todo que queres editar, no existe!');
  }
  // si los datos que me llegaron no estan bien, respondo con un 400 y un mensaje avisando que esta mal el objeto
  if (!esValido(req.body)) {
    return res.status(400).end('el todo que queres agregar, es incorrecto');
  }
  // solo modifico las propiedades que quiero y puedo modificar (en este caso, solo .text)
  todo.text = req.body.text || todo.text;
  // como modifique el objeto, vuelvo a grabarlo en el archivo
  fs.writeFileSync('todos.json', JSON.stringify(todos));
  // finalmente respondo con el array de todos modificado
  res.json(todos);
});

// RUTA para eliminar un todo
router.delete('/todos/:id', function(req, res, next) {
  // leo el archivo todos.json y lo parseo para obtener el array
  const todos = JSON.parse( fs.readFileSync('todos.json') );
  // busco el indice donde esta el todo que quiero eliminar
  const todoIndex = todos.findIndex(t => t.id == req.params.id);
  // si el todo no existe, respondo con un 404
  if (todoIndex < 0) {
    return res.status(404).end('el todo que queres eliminar, no existe!');
  }
  // elimino el todo del array usando la funcion .splice()
  todos.splice(todoIndex, 1);
  // como modifique el array, vuelvo a grabarlo en el archivo
  fs.writeFileSync('todos.json', JSON.stringify(todos));
  // finalmente respondo con el array de todos modificado
  res.json(todos);
});

module.exports = router;
