import React, { Component } from 'react'

class Users extends Component {
  constructor (props) {
    super(props);

    // dentro de la propiedad `this.props.match.params` tenemos todos los parametros
    this.state = {
      id: this.props.match.params.userid
    }
  }

  componentDidMount () {
    // acá podría ir a pedirle a una api los datos del usuario que estoy queriendo mostrar
    /*
    fetch ('https://superapi.com/users/' + this.state.id)
      .then(res => res.json())
      .then(userData => {
        this.setState({
          user: userData
        })
      })
    */
  }

  render () {
    return (
      <div>
        <h1>user {this.props.match.params.userid}!</h1>
      </div>
    )
  }
}

export default Users;