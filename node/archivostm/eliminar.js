const fs = require('fs');
// primero leemos todos los ToDos
let todos = fs.readFileSync('todos.json');
todos = JSON.parse(todos);

// hacemos la operacion necesario.. en este caso eliminar
const idDeLaTareaAEliminar = "2";
// buscamos el todo a eliminar
for (let i = 0; i < todos.length; i++) {
  if (todos[i].id == idDeLaTareaAEliminar) {
    // lo volamos!
    todos.splice(i, 1);
  }
}
// y volvemos a guardar el archivo, para persistir los cambios
fs.writeFileSync('todos.json', JSON.stringify(todos));