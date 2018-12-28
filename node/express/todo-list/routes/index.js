var express = require('express');
var path = require('path');
var router = express.Router();

const todos = [ { id: 1, text: 'tarea 1'} ];

router.get('/api/todos', function (req, res) {
  res.json(todos);
});

// le esoty dando un punto de entrada para guardar todos
router.post('/api/todos', function (req, res) {
  // 1. vamos a crear el nuevo todo
  // en req.body me llega todo lo que pusimos en el data de $.ajax
  const newTodo = req.body;
  newTodo.id = todos[todos.length - 1].id + 1;

  // 1.1 validamos que la informacion este bien
  // si la longitud del campo text es 0, esta mal
  if (newTodo.text.length === 0) {
    return res.status(400).end('el nombre de la tarea es obligatorio');
  }

  // 2. hacemos el push en el array
  todos.push(newTodo);
  // 3. lo mandamos como confirmacion de salio ok
  res.json(newTodo);
});

router.delete('/api/todos/:id', function () {
  const id = req.params.id;

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1);
    }
  }

  res.send('ok');
});

router.get('/api/todos/:id', function () {
  const id = req.params.id;

  // buscar el usuario
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      res.json(todos[i]);
    }
  }
});

router.put('/api/todos/:id', function (req, res) {
  // 1.
  //    En req.body me llega todo lo que pusimos en el data de $.ajax
  //    En req.params.id me llega el id del objeto que quiero editar
  const id = req.params.id;
  const editTodo = req.body;

  // validar!
  // 1.1 validamos que la informacion este bien
  // si la longitud del campo text es 0, esta mal
  if (editTodo.text.length === 0) {
    return res.status(400).end('el nombre de la tarea es obligatorio');
  }

  // buscar el todo
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].text = editTodo.text;
    }
  }

  res.json(todos);
});

module.exports = router;
