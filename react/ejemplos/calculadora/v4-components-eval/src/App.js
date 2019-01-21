import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resultado from './Resultado';
import Botonera from './Botonera';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      first: '',
      second: '',
      result: ''
    }

    this.resultado = this.resultado.bind(this);
  }

  handleInputOnchange (e) {
    this.setState({
      // first: parseInt(e.target.value)
      first: e.target.value.length === 0 ? '' : Number(e.target.value)
    })
  }

  handleInputSecondOnchange (e) {
    this.setState({
      // second: parseInt(e.target.value)
      second: e.target.value.length === 0 ? '' : Number(e.target.value)
    })
  }

  resultado (elResultadoDeLaOperacion) {
    this.setState({
      result: elResultadoDeLaOperacion
    })
  }

  render() {
    return (
      <div className="App">
        <input type="number" value={this.state.first} onChange={(e) => this.handleInputOnchange(e)} />
        <input type="number" value={this.state.second} onChange={(e) => this.handleInputSecondOnchange(e)} />

        <br/>

        <Botonera
          first={this.state.first}
          second={this.state.second}
          actualizarResultado={this.resultado}
        >
        </Botonera>

        <br/>

        <Resultado valor={this.state.result}></Resultado>
      </div>
    );
  }
}

export default App;
