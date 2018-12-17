const fs = require('fs');

let todos = fs.readFileSync('todos.json');
todos = JSON.parse(todos);

console.log(todos.length);

// DE DONDE SACAMOS EL ID
// usamos operadores ternarios!
const newId = todos.length === 0 ? (1) : (todos[todos.length - 1].id + 1);
const nuevaTarea = {
  tarea: "nueva tarea",
  id: newId
};

todos.push(nuevaTarea);

fs.writeFileSync('todos', JSON.stringify(todos));