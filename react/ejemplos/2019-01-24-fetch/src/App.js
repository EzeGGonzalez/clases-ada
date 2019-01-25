// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

// class y el nombre del componente (en mayúscula)
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props);

    this.state = {
      repos: [],
      loading: true
    }

    // fetch('https://api.github.com/users/ezeggonzalez/repos?sort=updated&client_id=998f64b60aadaf8a3567&client_secret=196f59566e14e65037b21fe501d1e1e87ffa6de6')
    //   .then((res) => {
    //     return res.json() // le decimos que interprete el resultado como JSON
    //   })
    // axios.get('https://api.github.com/users/ezeggonzalez/repos?sort=updated&client_id=998f64b60aadaf8a3567&client_secret=196f59566e14e65037b21fe501d1e1e87ffa6de6')
    //   .then((result) => {
    //     this.setState({
    //       repos: result.data
    //     })
    //   })
  }

  // hooks
  componentDidMount () {
    axios.get('https://api.github.com/users/ezeggonzalez/repos?sort=updated&client_id=998f64b60aadaf8a3567&client_secret=196f59566e14e65037b21fe501d1e1e87ffa6de6')
      .then((result) => {
        this.setState({
          repos: result.data,
          loading: false
        })
      })
  }

  render() {
    let contenido = ''

    if (this.state.loading) {
      contenido = <p>cargando...</p>
    } else {
      contenido = this.state.repos.map((r, i) => (
        <li key={i}>
          {r.name}
          <a href={r.url}>ver</a>
        </li>
      ))
    }

    return (
      <div>
        { contenido }
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
