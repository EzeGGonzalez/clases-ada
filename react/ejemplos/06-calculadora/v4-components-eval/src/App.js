import React, { Component } from 'react';
import logo from './logo.svg';
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

  op (type) {
    this.setState({
      result: eval('this.state.first' + type + 'this.state.second')
    })
  }

  render() {
    return (
      <div className="App">
        <input type="number" value={this.state.first} onChange={(e) => this.handleInputOnchange(e)} />
        <input type="number" value={this.state.second} onChange={(e) => this.handleInputSecondOnchange(e)} />

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
