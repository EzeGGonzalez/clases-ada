import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      inputVal: 'batman'
    }
  }
  render () {
    return (
      <div>
        <input value={this.state.inputVal} />
        <Link to={'/items?search=' + this.state.inputVal}>
          Lupa
        </Link>
      </div>
    )
  }
}

export default Navbar;