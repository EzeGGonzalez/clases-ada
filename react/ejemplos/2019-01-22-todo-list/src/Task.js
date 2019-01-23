import React, { Component } from 'react';

class Task extends Component {
  render () {
    return (
      <li className={this.props.task.done ? 'checked' : ''}>
        <span className="todo-text">{this.props.task.text}</span>
        <button onClick={() => this.props.toggleDone(this.props.task.id)}><i className="fas fa-check"></i></button>
        <button onClick={() => this.props.removeTask(this.props.task.id)}><i className="fas fa-trash"></i></button>
      </li>
    )
  }
}

export default Task;