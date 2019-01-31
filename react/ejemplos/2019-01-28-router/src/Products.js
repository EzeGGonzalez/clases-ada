import React, { Component } from 'react';

class Products extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props);

    this.state = {
      cosas: [],
      loading: true
    }

    // guardo una variable en donde voy a ir guardando la ultima busqueda que realizo el usuario
    this.busquedaAnterior = null;
  }

  // es una funcion que me devuelvo el parametro search que agregamos en la URL
  // por ejemplo si la url es /items?search=batman
  // esta funcion retornaria el string "batman"
  obtenerParametroDeBusqueda () {
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get("search");
  }

  traerCosas () {
    this.setState({
      loading: true
    })

    const s = this.obtenerParametroDeBusqueda();

    fetch('https://server-rcyitoaztx.now.sh/api/items?q=' + s)
      .then(res => res.json())
      .then(cosas => {
        this.setState({
          cosas: cosas,
          loading: false
        })
      })
  }

  componentDidUpdate () {
    // solo voy a buscar datos a la api si la busqueda es distinta a la anterior
    if (this.busquedaAnterior !== this.obtenerParametroDeBusqueda()) {
      this.traerCosas();
    }
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
      <ul>
        {this.cosas.map(c => <li>{c.title}</li>)}
      </ul>
    )
  }
}

export default Products;