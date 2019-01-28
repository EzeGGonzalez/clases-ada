// el import es una funcion nativa de JS que me permite importa modulos o librerias
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Users from './Users';
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
            <ul>
              <li>
                <Link to="/home">home</Link>
              </li>
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            {/* Creo una ruta por cada pagina/seccion de mi pagina */}

            <Route path="/home" component={Home} />
            {/* ejemplo: localhost:3000/home */}

            <Route path="/about-us" component={AboutUs} />
            {/* ejemplo: localhost:3000/about-us */}

            <Route path="/contact" component={Contact} />
            {/* ejemplo: localhost:3000/contact */}

            <Route path="/users/:userid" component={Users} />
            {/* ejemplo: localhost:3000/users/13 */}
            {/* en este último ejemplo, dentro del componente Users `this.props.match.params.userid` va a tener el valor 13 */}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

// export del componente que acabamos de crear
// tiene que ser el mismo nombre que el que definimos despues del 'class'
export default App;
