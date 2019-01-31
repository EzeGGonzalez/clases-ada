import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Products extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props);

    this.state = {
      cosa: {},
      loading: true
    }
  }

  traerCosas () {
    this.setState({
      loading: true
    })

    this.setState({
      cosa: { title: 'The Dark Knight' },
      loading: false
    })
  }

  componentDidMount () {
    this.traerCosas();
  }

  render () {
    // si tengo la variable loading en true, es porque la api todavia no me respondio
    if (this.state.loading) {
      // retorno una imagen que tiene un gif
      // con el return hago que esta funcion no siga, y no se "ejecute" el código que hay abajo
      return <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/583b6136197347.571361641da25.gif" />
    }

    return (
      <h1>{this.state.cosa.title}</h1>
    )
  }
}

export default Products;