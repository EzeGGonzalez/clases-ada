import React, { Component } from 'react'

class Botonera extends Component {
  op (type) {
    // this.setState({
      // result: eval('this.props.first' + type + 'this.props.second')
    // })
    const result = eval('this.props.first' + type + 'this.props.second')
    this.props.actualizarResultado(result)
  }

  render () {
    return (
      <div>
        <button onClick={() => this.op('+')}>+</button>
        <button onClick={() => this.op('-')}>-</button>
        <button onClick={() => this.op('*')}>x</button>
        <button onClick={() => this.op('/')}>/</button>
      </div>
    )
  }
}

export default Botonera