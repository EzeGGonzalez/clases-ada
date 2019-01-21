// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';
import User from './User'
import Task from './Task'
import './App.css'

// const users = [
//   { nombre: 'Ada', id: 1 },
//   { nombre: 'Grace', id: 2 }
// ]

// class y el nombre del componente (en mayúscula)
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props);

    this.state = {
      nombre:123,
      apellido:321,
      showList: false,
      users: [
        { nombre: 'Ada', id: 1 },
        { nombre: 'Grace', id: 2 }
      ],
      tasks: [
        { text: 'Invidunt kasd dolor.', done: false, id: 1 },
        { text: 'Est kasd nonumy.', done: true, id: 2 }
      ]
      // <li>Invidunt kasd dolor. (Pendiente)</li>
      // <li>Est kasd nonumy. (Hecha)</li>
    }

    this.toggleList = this.toggleList.bind(this)
  }

  // TUGUEL
  toggleList () {
    this.setState({
      showList: !this.state.showList
    })
  }

  render() {
    const lis = this.state.users.map(function (u) {
      return <User user={u} />
    })

    const tasks = this.state.tasks.map(function (t) {
      return <Task theTask={t} />
    })

    let claseDeLaLista = "";
    if (this.state.showList) {
      claseDeLaLista = 'show'
    } else {
      claseDeLaLista = 'hide'
    }

    return (
      <div>
        <ul>
          { lis }
        </ul>

        <button onClick={this.toggleList}>mostrar lista de tareas</button>

        <ul className={claseDeLaLista}>
          {tasks}
        </ul>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
