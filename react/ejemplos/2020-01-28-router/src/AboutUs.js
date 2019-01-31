import React, { Component } from 'react'
import { Link } from "react-router-dom";

class AboutUs extends Component {
  render () {
    return (
      <div>
        <h1>about us!</h1>
        <Link to="/home">volver</Link>
      </div>
    )
  }
}

export default AboutUs;