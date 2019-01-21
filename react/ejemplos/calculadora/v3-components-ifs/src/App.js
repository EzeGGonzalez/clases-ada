import React, { Component } from 'react';
import './App.css';
import Resultado from './Resultado';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      first: '',
      second: '',
      result: ''
    }
  }

  handleInputOnchange (e) {
    this.setState({
      first: e.target.value.length === 0 ? '' : Number(e.target.value)
    })
  }

  handleInputSecondOnchange (e) {
    this.setState({
      second: e.target.value.length === 0 ? '' : Number(e.target.value)
    })
  }

  op (type) {
    let result = '';

    if (type === '+') result = this.state.first + this.state.second
    else if (type === '-') result = this.state.first - this.state.second
    else if (type === '/') result = this.state.first / this.state.second
    else if (type === '*') result = this.state.first * this.state.second

    this.setState({
      result: result
    })
  }

  render() {
    return (
      <div className="App">
        <input type="number" value={this.state.first}
          onChange={(e) => this.handleInputOnchange(e)} />
        <input type="number" value={this.state.second}
          onChange={(e) => this.handleInputSecondOnchange(e)} />

        <br/>

        <button onClick={() => this.op('+')}>+</button>
        <button onClick={() => this.op('-')}>-</button>
        <button onClick={() => this.op('*')}>x</button>
        <button onClick={() => this.op('/')}>/</button>

        <br/>

        <Resultado valor={this.state.result}></Resultado>
      </div>
    );
  }
}

export default App;
