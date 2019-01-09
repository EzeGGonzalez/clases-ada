// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nombre: 'Ada'
    }
  }

  render() {
    // bind
    return (
      <div>
        <h1>hola {this.state.nombre}!</h1>
      </div>
    )
  }
}

//
// module.exports
export default App;
