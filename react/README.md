# React

## ¿Qué es React?

React es una librería (**no** un framework) que falicita el desarrollo de intarfaces de usuario. Permite la crear interfaces complejas utilizando piezas chicas de código, reutilizables, que llamaremos `componentes`.

## Creación de un proyecto con "create-react-app"

Cuando vamos a comenzar un nuevo proyecto con React, generalmente tenemos que lidiar con una gran cantidad de herramientas como gestores de paquetes, transpiladores, etc. Por esto, el equipo de facebook creo **![Create React App](https://github.com/facebook/create-react-app)**, una herramienta que realizará la configuración necesaria y nos permitirá comenzar a desarrollar con React de una forma rápida y sencilla.

* Lo primero que tenemos que hacer es instalar la herramienta con NPM
    ```bash
    npm i -g create-react-app
    ```
* Una vez instalada, dentro de la carpeta donde queremos crear un proyecto nuevo, podemos ejecutar:
    ```bash
    create-react-app first-app
    ```
* Este último comando creará una carpeta `first-app` (esta tarea puede demorar unos cuantos minutos), y dentro todo el contenido necesario para ejecutar nuestra primer app con React.
* Una vez que finalizó el proceso anterior, podemos ingresar a la carpeta
    ```bash
    cd first-app
    ```
* Dentro de la carpeta, vamos a tener el siguiente contenido (que puede variar un poco dependiendo de la versión de `create-react-app`):
    ```bash
    first-app/
        .gitignore
        package-lock.json
        package.json
        README.md
        node_modules/
        public/
            favicon.ico
            index.html
            manifest.json
        src/
            App.css
            App.js
            App.test.js
            index.css
            index.js
            logo.svg
            serviceWorker.js
    ```

    * node_modules: es la carpeta donde se guardan las dependencias del proyecto
    * public: es la carpeta raíz del proyecto donde se encuentra el index.html
    * src: es el directorio donde vamos a colocar los archivos de nuestros componentes

* Para ejecutar la app de ejemplo que configura por defecto `create-react-app`, solo tenemos que ejecutar `npm start`. Una vez que termine, vamos a poder acceder desde un navegador a la dirección `localhost:3000` y ver algo similar (ya que depende de la versión) a lo siguiente:
![App Ejemplo Create React App](https://file-ztpprazfpx.now.sh/)

### Componente principal

* El punto de entrada a la aplicación es el archivo `scr/index.js`. Acá se inicializa el componente principal App.js, a través del método ReactDOM.Render. Dicho método recibe como primer parámetro el componente a renderizar y como segundo el elemento del DOM donde el componente va ser renderizado:

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import * as serviceWorker from './serviceWorker';

    // recibe como primer parametro el componente App, y como segundo en que elemento del DOM quiero que sea vea
    ReactDOM.render(<App />, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
    ```

* Y el componente App, nuestro componente principal y donde vamos a comenzar el desarrollo, tiene el siguiente código:
    ```js
    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';

    class App extends Component {
        render() {
            return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                </header>
            </div>
            );
        }
    }

    export default App;
    ```

* Para seguir con la teoría, vamos a limpiar un poco el código, dejándolo lo más limpio posible:
    ```js
    import React, { Component } from 'react';

    class App extends Component {
        render() {
            return (
                <div>
                    <h1>¡Hola Mundo!</h1>
                </div>
            );
        }
    }

    export default App;
    ```

* _El código del ejemplo desarrollado hasta ahora se encuentra dentro de la carpeta ejemplos/01-first-app_

## JSX

* La sintáxis de HTML que vemos en el componente App, no es realmente HTML, sino JSX. Es una sintáxis extendida de Javascript que nos permite escribir código JS con etiquetas del estilo HTML.
* Al igual que en HTML, las etiquetas que usamos en JSX pueden tener atributos y elementos hijos. Si un atributo está escrito entre llaves `{}`, entonces el valor es una expresión de Javascript.
* Aclaración: JSX no usa comillas para encerrar a las etiquetas de HTML

**Ejemplo:**
```js
    class App extends Component {
        render() {
            return (
                <div>
                    <h1>¡Hola Mundo!</h1>
                </div>
            );
        }
    }
```
* Como JSX es más cercano a Javascript que HTML, React usa camelCase como convención para las propiedades en lugar de los atributos HTML.
* Por ejemplo, el atributo `class` se convierte es `className`, `tabindex` se convierte en `tabIndex` y `onclick` se convierte en `onClick` (entre otros).
* Vamos a modificar un poco nuestro ejemplo del `Hola Mundo`
**Ejemplo:**
```js
    class App extends Component {
        render() {
            const elementoH1 = <h1>¡Hola Mundo!</h1>
            return (
                <div>
                    {elementoH1}
                </div>
            );
        }
    }
```
* Movimos, a una variable llamada `elementoH1`, una porción del código JSX.
* Para que JSX funcione, es necesario que todos los elementos que usemos esten encerrados en una sola etiqueta padre.
* La expresiones dinámicas, o expresiones de Javascript, se engloban dentro de las llaves `{}`
**Ejemplo 1:**
```js
    class App extends Component {
        render() {
            const nombre = 'Ada'
            return (
                <div>
                    <h1>¡Hola {nombre}!</h1>
                </div>
            );
        }
    }
```
**Ejemplo 2:**
```js
    class App extends Component {
        render() {
            const persona = {
                nombre: 'Ada',
                apellido: 'Lovelace'
            }
            return (
                <div>
                    <h1>¡Hola {persona.nombre} {persona.apellido}!</h1>
                </div>
            );
        }
    }
```

## Componentes

* Los componentes permiten separar la web en piezas inependientes y reutilizables. Son los ladrillos de cualquier aplicación desarrollada con React, y una aplicación típica puede tener muchos.
* En pocas palabras, un componente es una clase o función de Javascript que puede aceptar algún input (llamados `props`) y retorna elementos de React, describiendo como una sección de la UI debería verse.

### Primer componente

* Creá un archivo llamaddo `Hola.js` dentro de la carpeta `./src`
* Copia el siguiente contenido:
```js
import React, { Component } from 'react';

class Hola extends Component {
  render() {
    return (
      <div>
        <h1>¡Hola mundo!</h1>
      </div>
    );
  }
}

export default Hola;
```
* Para poder ver el componente que creamos, vamos a cambiar el contenido de `App.js`.
* En JSX, los elementos HTML (etiquetas) también representan a los componentes definidos por el usuario.
* Debería quedar de la siguiente forma:
```js
import React, { Component } from 'react';
import Hola from './Hola'

class App extends Component {
  render() {
    return (
      <div>
        <Hola />
      </div>
    );
  }
}

export default App;

```
* En la segunda línea estamos `importando` nuestro componente.
* En la línea `<Hola />` estamos utilizando nuestra "etiqueta" propia.
* Veamos que pasó en este ejemplo:
    1. En la función `render()` de App utilizamos la etiqueta `<Hola />`.
    2. React llama/ejecuta al componente `Hola`.
    3. Nuestro componente `Hola` retorna un elemento <h1>¡Hola mundo!</h1> como resultado de la función `render()`

* **IMPORTANTE**: Los nombre de los componente siempre tienen que empezar con mayúscula.
