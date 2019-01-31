import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Contact extends Component {
  render () {
    return (
      <div>
        <h1>contact!</h1>
        <Link to="/home">volver</Link>
        <Link to="/about-us">about us</Link>
      </div>
    )
  }
}

export default Contact;