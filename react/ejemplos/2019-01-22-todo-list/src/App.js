import React, { Component } from 'react';
import Task from './Task';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newTask: '',
      tasks: [
        {
          id: 1,
          text: 'Sit lorem et consetetur magna.',
          done: false
        }
      ]
    }
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this)
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  handleOnChangeInput (e) {
    this.setState({
      newTask: e.target.value
    })
  }

  addTask (e) {
    e.preventDefault();

    const newTask = {
      id: Math.random(),
      text: this.state.newTask,
      done: false
    }
    // OPCION 1
    // const loQueYaTeniaEnTasks = this.state.tasks;
    // loQueYaTeniaEnTasks.push(newTask)
    // this.setState({
      // tasks: loQueYaTeniaEnTasks
    // })

    // OPCION 2
    // this.setState({
      // tasks: this.state.tasks.concat([newTask])
    // })

    // OPCION 3
    // this.setState({
      // tasks: [].concat(this.state.tasks, [newTask])
    // })

    // OPCION 4
    this.setState({
      // operador de propagación
      // spread operator
      tasks: [...this.state.tasks, newTask],
      newTask: ''
      // [ this.state.tasks[0], this.state.tasks[1], ..., this.state.tasks[i], newTask]
      // [ [{ text: ''}, { text: ''}] , { text: ''}]
    })
  }

  eliminar (id) {
    // encontrar la tarea que quiero eliminar

    // findIndex():
    // OPCION 1
    // const laPosicion = this.state.tasks.findIndex((t) => {
    //   // if (t.id === id) {
    //   //   return true;
    //   // }
    //   // return false;
    // })

    // OPCION 2
    // const laPosicion = this.state.tasks.findIndex((t) => {
    //   return t.id === id;
    // })

    // OPCION 3
    const laPosicion =
      this.state.tasks.findIndex((t) => t.id === id)

    // lo voleteo
    this.state.tasks.splice(laPosicion, 1)

    this.setState({
      tasks: this.state.tasks
    })
  }

  // OPCION 4 del eliminar
  removeTask (id) {
    this.setState({
      tasks: this.state.tasks.filter(t => t.id !== id)
    })
  }

  toggleDone (id) {
    // necesito ID: me llega por parametro
    // busco la tarea
    // for (var i = 0; i < this.state.tasks.length; i++) {
    //   if (this.state.tasks[i].id === id) {
    //     // pasa la propiedad `done` a true
    //     this.state.tasks[i].done = !this.state.tasks[i].done;
    //     console.log('encontre la tarea')
    //   }
    // }
    // LO HACEMOS CON FIND
    const editedTask = this.state.tasks.find(t => t.id === id)
    editedTask.done = !editedTask.done
    this.setState({
      tasks: this.state.tasks
    })
  }

  render() {
    const listadoDeTareas = this.state.tasks.map((t) => {
      return <Task key={t.id} task={t} removeTask={this.removeTask} toggleDone={this.toggleDone} />
    })

    return (
      <div>
        <form onSubmit={this.addTask}>
          <input onChange={this.handleOnChangeInput} value={this.state.newTask} />
          <button>Agregar</button>
        </form>

        <ul>
          { listadoDeTareas }
        </ul>
      </div>
    );
  }
}

export default App;
