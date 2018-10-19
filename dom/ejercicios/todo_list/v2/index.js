var list = document.getElementById('task-list');

function addTask () {
  var taskName = document.getElementById('task').value;
  if (taskName.length > 0) {
    // <div>
    //   <span></span>
    //   <button></button>
    // </div>
    var item = document.createElement('li');
    var text = document.createTextNode(taskName);

    // creo el button de eliminar
    var remove = document.createElement('button');
    remove.innerHTML = 'X';
    remove.addEventListener('click', function () {
      list.removeChild(item);
    });

    // item.innerHTML = taskName;
    item.appendChild(text);
    item.appendChild(remove);
    // <li>el texto <button>X</button></li>

    list.appendChild(item);

    document.getElementById('task').value = '';
  }
}

document.getElementById('add').addEventListener('click', addTask);
document
  .getElementById('task')
  .addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      addTask();
    }
})