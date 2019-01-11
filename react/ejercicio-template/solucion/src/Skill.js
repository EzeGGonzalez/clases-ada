import React, { Component } from 'react'

class Skill extends Component {
  render () {
    return (
      <div>
        <p>{this.props.title}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={ { width: this.props.perc } }>{this.props.perc}</div>
        </div>
      </div>
    )
  }
}

export default Skill