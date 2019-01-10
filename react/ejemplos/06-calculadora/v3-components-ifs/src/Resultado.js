import React, { Component } from 'react'

class Resultado extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <h3>{this.props.valor}</h3>
    )
  }
}

export default Resultado;


