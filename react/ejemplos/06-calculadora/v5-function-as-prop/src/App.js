import React, { Component } from 'react';
import Botonera from './Botonera'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      first: '',
      second: '',
      result: ''
    }

    this.handleOnchangeInputA = this.handleOnchangeInputA.bind(this)
    this.handleOnchangeInputB = this.handleOnchangeInputB.bind(this)
    this.handleUpdateResult = this.handleUpdateResult.bind(this)
  }

  handleOnchangeInputA (e) {
    this.setState({
      first: e.target.value.length === 0 ? '' : Number(e.target.value)
    })
  }

  handleOnchangeInputB (e) {
    this.setState({
      second: e.target.value.length === 0 ? '' : Number(e.target.value)
    })
  }

  handleUpdateResult (theResult) {
    this.setState({
      result: theResult
    })
  }

  render() {
    return (
      <div className="App">
        <input type="number" value={this.state.first}
          onChange={this.handleOnchangeInputA} />
        <input type="number" value={this.state.second}
          onChange={this.handleOnchangeInputB} />

        <br/>

        <Botonera first={this.state.first} second={this.state.second} updateResult={this.handleUpdateResult} />

        <br/>

        <h3>{this.state.result}</h3>
      </div>
    );
  }
}

export default App;
