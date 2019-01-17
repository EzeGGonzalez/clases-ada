import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // creo una constante con el valor Ada
    const nombre = 'Ada'

    return (
      <div>
        {/* en el mensaje, muestro la constante que creamos mas arriba */}
        <h1>¡Hola, {nombre}!</h1>
      </div>
    );
  }
}

export default App;
