// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';

// class y el nombre del componente (en mayúscula)
class App extends Component {
  render() {
    // podemos definir una
    const nombre = 'Ada'

    // bind
    return (
      <div>
        <h1>¡Hola, {nombre}!</h1>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
