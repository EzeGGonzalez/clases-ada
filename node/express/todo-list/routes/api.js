const express = require('express');
const fs = require('fs');
const shortid = require('shortid');
const router = express.Router();

router.get('/todos', function(req, res, next) {
  const todos = JSON.parse(fs.readFileSync('todos.json'));
  res.json(todos);
});

router.get('/todos/:id', function(req, res, next) {
  const todos = JSON.parse(fs.readFileSync('todos.json'));
  res.json(todos.find(t => t.id === req.params.id));
});

router.post('/todos', function(req, res, next) {
  const todos = JSON.parse(fs.readFileSync('todos.json'));
  todos.push({
    id: shortid.generate(),
    ...req.body
  });
  fs.writeFileSync('todos.json', JSON.stringify(todos));
  res.json(todos);
});

router.put('/todos/:id', function(req, res, next) {
  const todos = JSON.parse(fs.readFileSync('todos.json'));
  const todo = todos.find(t => t.id === req.params.id)
  todo.text = req.body.text || todo.text;
  fs.writeFileSync('todos.json', JSON.stringify(todos));
  res.json(todos);
});

router.delete('/todos/:id', function(req, res, next) {
  const todos = JSON.parse(fs.readFileSync('todos.json'));
  todos.splice(todos.findIndex(t => t.id == req.params.id), 1);
  fs.writeFileSync('todos.json', JSON.stringify(todos));
  res.json(todos);
});

module.exports = router;
