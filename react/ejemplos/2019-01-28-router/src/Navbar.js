import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [
        { id: 1, nombre: 'Dolore.' },
        { id: 2, nombre: 'Ipsum.' },
        { id: 3, nombre: 'Sit.' },
        { id: 4, nombre: 'Sed.' },
        { id: 5, nombre: 'Erat.' }
      ]
    }
  }
  render () {
    const usersLis = this.state.users.map(u => <li><Link to={`/users/${u.id}`}>Ir a {u.nombre}</Link></li>)
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <li>
          <ul>
            { usersLis }
          </ul>
        </li>
      </ul>
    )
  }
}

export default Navbar;