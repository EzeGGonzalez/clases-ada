// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';
// en este punto importamos BrowserRouter y Route
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Users from './Users';
import Navbar from './Navbar';
import './App.css'

// class y el nombre del componente (en mayúscula)
class App extends Component {
  // creamos la funcion constructor con el parametro props
  constructor (props) {
    // llamamos a la funcion super pasandole las props
    super(props);
  }

  render() {
    return (
      <div>
        <p>probando el router</p>

        <BrowserRouter>
          <div>

            <Navbar />

            {/* con el atributo exact le decimos que solo lo muestre si la URL es exactamente lo que pusimos en path */}
            <Route exact path="/"component={Home}></Route>
            <Route path="/about-us" component={AboutUs}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/users/:userid" component={Users}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
