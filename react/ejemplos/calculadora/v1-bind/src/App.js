import React, { Component } from 'react';
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
    this.handleClickSum = this.handleClickSum.bind(this)
    this.handleClickSub = this.handleClickSub.bind(this)
    this.handleClickDiv = this.handleClickDiv.bind(this)
    this.handleClickMul = this.handleClickMul.bind(this)
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

  handleClickSum () {
    this.setState({
      result: this.state.first + this.state.second
    })
  }

  handleClickSub () {
    this.setState({
      result: this.state.first - this.state.second
    })
  }

  handleClickDiv () {
    this.setState({
      result: this.state.first / this.state.second
    })
  }

  handleClickMul () {
    this.setState({
      result: this.state.first * this.state.second
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

        <button onClick={this.handleClickSum}>+</button>
        <button onClick={this.handleClickSub}>-</button>
        <button onClick={this.handleClickMul}>x</button>
        <button onClick={this.handleClickDiv}>/</button>

        <br/>

        <h3>{this.state.result}</h3>
      </div>
    );
  }
}

export default App;
