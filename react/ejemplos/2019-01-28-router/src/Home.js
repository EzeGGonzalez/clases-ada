import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [
        { id: 1, nombre: 'users 1' },
        { id: 2, nombre: 'users 2' },
        { id: 3, nombre: 'users 3' },
        { id: 4, nombre: 'users 4' }
      ]
    }
  }
  render () {
    const users = this.state.users.map(u => (
      <div>
        <Link to={'/users/' + u.id}>user {u.nombre}</Link>
      </div>
    ));
    return (
      <div>
        <h1>hola mundo!</h1>

        {users}

        <Link to="/contact">contact</Link>
        <Link to="/about-us">about us</Link>
      </div>
    )
  }
}

export default Home;