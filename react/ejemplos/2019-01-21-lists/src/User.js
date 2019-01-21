import React, { Component } from 'react'

class User extends Component {
  render () {
    return (
      <li>
        <span>{this.props.user.id}</span>
        <span>{this.props.user.nombre}</span>
      </li>
    )
  }
}

export default User;