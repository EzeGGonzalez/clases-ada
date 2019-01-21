import React, { Component } from 'react'

class Botonera extends Component {
  constructor (props) {
    super(props)

    this.handleClickButton = this.handleClickButton.bind(this)
  }

  handleClickButton (e) {
    const type = e.target.innerHTML.trim()
    let result = '';

    if (type === '+') result = this.props.first + this.props.second
    else if (type === '-') result = this.props.first - this.props.second
    else if (type === '/') result = this.props.first / this.props.second
    else if (type === '*') result = this.props.first * this.props.second

    this.props.updateResult(result)
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClickButton}>+</button>
        <button onClick={this.handleClickButton}>-</button>
        <button onClick={this.handleClickButton}>*</button>
        <button onClick={this.handleClickButton}>/</button>
      </div>
    )
  }
}

export default Botonera