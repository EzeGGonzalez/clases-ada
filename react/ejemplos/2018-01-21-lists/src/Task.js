import React, { Component } from 'react'

class Task extends Component {
  render () {
    let estadoDeLaTarea = ''

    if (this.props.theTask.done === true) {
      estadoDeLaTarea = <span>Finalizada</span>
    } else {
      estadoDeLaTarea = <span>Pendiente</span>
    }
      // <span>
      //   {this.props.theTask.done === true ? "Finalizada" : "Pendiente"}
      // </span>

    return (
      <li>
        <span>{this.props.theTask.text}</span>
        -
        {/* { estadoDeLaTarea } */}
        {/* <span>{this.props.theTask.done === true ? "Finalizada" : "Pendiente"}</span> */}
        { this.props.theTask.done === true &&
          <span>Finalizada</span> }
        { this.props.theTask.done === false &&
          <span>Pendiente</span> }

      </li>
    )
  }
}

export default Task;