# Node.js

Cuando empezamos con el desarrollo web, es común comenzar con la parte html, css y javascript. Una vez dentro de este mundo comenzamos a descubrir que existen otros términos como pueden ser backend y fullstack, entre muchos otros, los cuales no son nada más que una forma general de llamar a las diferentes áreas necesarias para poder crear una aplicación web.

El **backend** hace referencia al código que corre del lado del servidor y, a diferencia del frontend, este suele presentarse en una serie de diferentes colores y sabores de lenguajes, algunos ejemplos: Java, Python, Ruby, **Javascript**, Go, Rust, etc. Cada uno de estos lenguajes tienen sus respectivos interpretes/compiladores y sus propias herramientas y frameworks. En esta ocasión nos enfocaremos únicamente en **Node.js** y cómo nos permite desarrollar backend usando el conocimiento en Javascript que ya poseemos.

## ¿Qué es backend?
El backend generalmente consiste de tres partes: un servidor, una aplicación (un programa) y una base de datos.
Ejemplo: Si compramos una entrada para un recital, normalmente abrimos la página web e interactúamos con su interfaz. Una vez que ingresamos toda la información necesaria, la aplicación la guarda en una base de datos que se creó en el servidor.

Para mayor facilidad, imaginemos que esa base de datos es como una hoja de Excel gigante, guardada en una computadora (servidor) que se encuentra en algún lugar lejano del mundo.

Toda esa información permanece en el servidor, de modo que cuando volvamos a iniciar sesión en la página web para imprimir las entradas, todos los datos van a estar ahí en nuestra cuenta.

## ¿Qué es Node.js?
En términos simples, se trata de una plataforma de código abierto y libre de JavaScript para la programación del lado del servidor, que nos va a permitir crear aplicaciones rápidamente.

* Node.js nos permite ejecutar Javascript en distintos ambientes y con esto realizar distintas tareas
* Dentro de las tareas que podemos realizar se destacan las siguientes:
  * Correr un simple script
  * Correr el build de nuestro frontend: Gracias a varios módulos que hay disponibles podemos utilizar Node.js como entorno para generar los archivos finales que vamos a deployar en nuestro hosting
  * Correr un servidor web
  * Conectarnos a motores de bases de datos
* En esta parte del curso nos vamos a enfocar en utilizar Node.js para crear un servidor web y poder crear páginas dinámicas en lugar de estáticas como hicimos hasta ahora (con HTML y CSS)
* Al instalar Node.js también se instala otro programa llamado **NPM**

#### Ejemplo 1
Creamos un archivo `index.js` y copiamos el siguiente contenido.
```js
console.log('¡Hola Mundo desde Node.js!')
```
Abrimos una terminal, nos movemos de directorio hasta la carpeta donde guardamos el archivos y ejecutamos: `node index.js`. Vas a ver en la consola impreso el mensaje del console.log().

El código de ejemplo se encuentra en: `./ejemplos/01-helloWorld`

### NPM
* NPM Significa Node Package Manager
* Utilizando NPM podemos instalar un montón de módulos de Node y utilizarlos en nuestros programas
* NPM es uno de los repositorios más grande que existen
* Para saber más sobre NPM puden ingresar a [su sitio](https://www.npmjs.com)

![Wombat](https://cdn-images-1.medium.com/max/1600/0*5OiLgiw2SYi1LXEt.)

#### Iniciar un proyecto
* Para iniciar un proyecto en node vamos crear una carpeta con el nombre que quieras y dentro de ella correr el siguiente comando de NPM
* Este comando hace un montón de preguntas pero por ahora podemos ignorarlo y aceptar con enter todos los valores por default

```bash
npm init
```

* Al finalizar este script crea un archivo con el nombre de package.json que no es más que un archivo de configuración en formato JSON

```js
{
  "name": "02-primerEjemploNode",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

* Como podemos ver utiliza las preguntas anteriores para crear y configurar nuestro proyecto y lo escribe en este archivo
* Es decir que podemos modificar estos valores cuando lo necesitemos

#### Configurar scripts de inicio
* Una de las secciones importantes dentro del **package.json** es `scripts` que nos permite crear tareas que podemos correr desde la consola
* Vamos a crear un nuevo script agregando la tarea **start** en la sección `scripts`

```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
  "start": "node index.js"
},
```

* Para poder correr esta tarea ejecutamos el siguiente comando desde nuestra consola:

```bash
npm start
```

```bash
Error: Cannot find module 'index.js'
```

* Obtenemos un error similar al ejemplo ya que no existe el archivo **index.js** por lo cual vamos a crearlo
* El archivo index.js tiene que estar al mismo nivel que el archivo package.json para que funcione
* Caso contrario hay que modificar el path del script para que concuerde con la arquitectura de carpetas y archivos que creamos
* Agregamos el siguiente código y volvemos a correr la tarea **start** de NPM

**index.js**
```js
console.log('¡Hola Mundo desde Node.js!');
```

```bash
npm start
> 02-primer-ejemplo-node@1.0.0 start /02-primer-ejemplo-node
> node index.js

¡Hola Mundo desde Node.js!
```

* Podemos ver que de esta forma creamos, configuramos y corremos un script desde NPM

### Módulos
* Un módulo es una forma de encapsular código en una sola unidad de código
* Es decir que vamos a agrupar nuestro código por funcionalidad y lo vamos a poner en un archivo que luego podemos utilizar como módulo
* Node.js tiene un sistema de carga de módulos que es muy fácil de utilizar
* Un archivo puede ser utilizado como un módulo dentro del proyecto y se lo trata de forma individual
* La función `require` acepta un string con el nombre del módulo que queremos utilizar
* Node.js al ejecutar `require` busca si existe el nombre del módulo solicitado dentro de la carpeta node_modules

```js
const modulo = require('nombredelmodulo')
```

* Otra forma de cargar un módulo es utilizando rutas relativas
* Por ejemplo si tengo el archivo index.js y el archivo mi-modulo.js puedo cargar mi-modulo desde el index de la siguiente manera

```js
const modulo = require('./mi-modulo')
```

* Algo a destacar es que al utilizar `require` para cargar un módulo no tenemos la necesidad de establecer que la extensión del archivo es **.js**

### Instalar un módulo
* Utilizando NPM podemos instalar módulos y utilizarlos en nuestros proyectos
* Para lograrlo tenemos que correr desde la consola el comando `install` y el nombre del módulo que queremos instalar
* Por ejemplo vamos a instalar un módulo muy conocido de Node.js que se llama `Express`
* Pueden aprender mucho más sobre `Express` en la [documentaciónd de su sitio](http://expressjs.com)

```bash
npm install express
```

* Al correr la instalación NPM crea una carpeta llamada `node_modules` donde va a guardar todos los módulos que necesitamos instalar para que funcione nuestro proyecto
* La carpeta `node_modules` tiende a crecer mucho y puede ser muy pesada es por eso que vamos a ignorar esta carpeta dentro de la configuración de nuestro repo de GIT
* Esto significa que si alguien más necesita instalar este proyecto tiene que saber la lista de módulos que usa
* Para evitar que esto sea un problema NPM nos permite establecer un parámetro en la instalación de nuestros módulos y guardar una referencia en el archivo package.json
* Borramos la carpeta de `node_modules`
* Volvemos a instalar el módulo de Express pero ahora agregamos el parámetro --save

```bash
npm install express --save
```

**package.json**
```js
"dependencies": {
  "express": "^4.15.4"
}
```

* Podemos ver que en el archivo `package.json` ahora tenemos una sección dependencies donde NPM agrega todas las dependencias que necesita un proyecto
* Volvamos a borrar la carpeta `node_modules` y corramos el siguiente script

```bash
npm install
```

* Al estar configurado `Express` como una dependencia de nuestro proyecto al correr la tarea `npm install` NPM lee las dependencias que tiene en la sección `dependencies` e instala todo por nosotros
* De esta forma otra persona que quiera instalar este proyecto sólo tiene que correr `npm install` para obtener todo funcionando


* Para desinstalar un módulo utilizamos la tarea `npm uninstall` y el nombre del módulo
```bash
npm uninstall express
```
* Hasta ahora todos estos módulos fueron instalados de forma local dentro de un proyecto
* NPM también permite instalar módulos de forma global para poder ser utilizados como programas de nuestro sistema en general
* Es decir que al instalar un módulo de manejar global vamos a poder acceder a él y utilizarlo desde cualquier lado
* Utilizamos la tarea npm install y el parámetro -g para instalar un módulo de manera global
* Instalemos el módulo Express Generator de manera global

```bash
npm install express-generator -g
```

* Por las dudas cerramos y volvemos a abrir nuestra consola y corremos el siguiente comando:

```bash
express --help
```

* Si todo funcionó bien vemos el siguiente listado:

```bash
Usage: express [options] [dir]

Options:

  -h, --help           output usage information
      --version        output the version number
  -e, --ejs            add ejs engine support
      --pug            add pug engine support
      --hbs            add handlebars engine support
  -H, --hogan          add hogan.js engine support
  -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
  -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
      --git            add .gitignore
  -f, --force          force on non-empty directory
```

* Más entrados en esta sección del curso vamos a utilizar este módulo para crear la arquitectura de nuestro proyecto

#### Creando un módulo
* Para entender como funciona un módulo vamos a crear uno primero
* Crear un archivo con el nombre de calcula.js
* Dentro de este archivo vamos a escribir el siguiente código:

**calcular.js**
```js
// guardamos en una constante el % de IVA
const IVA = 0.21;

const calcularPrecio = function(precio) {
  // la función recibe por parámetro un precio y le sumamos el IVA
  return precio + (precio * IVA);
}
// finalmente, exportamos la función
module.exports = calcularPrecio;
```

**index.js**
```js
// importamos nuestro modulo y lo guardamos en una variable
const obtenerPrecio = require('./calcular');
// lo que importamos es la funcion que exportamos en el anterior archivo
// la ejecutamos y obtenemos el precio final con IVA
const precio = obtenerPrecio(200);
// finalmente mostramos en la consola el precio
console.log(precio);
```

* En este ejemplo vemos que creamos un módulo que se llama `calcular`
* Dentro del módulo calcular tenemos una función con el nombre de `calcularPrecio` que nos permite obtener el precio final de un producto sumándole el IVA
* Utilizando el objeto `module.exports` podemos exportar código desde nuestro módulo para que sea utilizado desde cualquier lado
* En el archivo `index.js` utilizamos `require` para incluir el módulo `calculo` dentro de nuestro proyecto
* Al no ser un módulo que instalamos utilizando npm install podemos acceder a él por medio de la ruta relativa `'./calcular'`
* Creamos el nombre obtenerPrecio y le asignamos lo que esta exportando el módulo, en este caso es tan solo una función pero podría ser un objeto o cualquier otro valor
* Luego en el archivo `index.js` utilizamos la función exportada como hicimos hasta ahora con nuestras funciones
* De esta forma toda la lógica de negocio de como obtener un precio final con el IVA incluído queda dentro de nuestro módulo `calcula` y nadie puede modificarlo
* Si alguien más necesitara utilizar este módulo podríamos crearlo como un paquete de NPM

El código del ejemplo se encuentra en `./ejemplos/04-creando-modulo-propio`

### Cómo funcionan los módulos
* Node.js utiliza un patrón llamado módulo para exportar código y utilizarlo desde lo necesitemos
* Al exportar nuestro código Node.js lo mete dentro de una función y de esta forma hace que el scope sea local al módulo y no  a todo el resto del proyecto (las variables son privadas dentro de este módulo y sólo se pueden acceder desde ahí a no ser que nosotros lo exportemos)
* Utilizamos `module.exports` para exportar el código
* Podemos utilizar tan sólo `exports` si queremos de la siguiente manera:

```js
module.exports = calcularPrecio
```

## Servidor Web
* Uno de los usos más comunes de Node.js es para correr servidores web.
* Al crear un servidor web con Node.js vamos a interactuar con los módulos [HTTP/HTTPS](https://nodejs.org/api/http.html)

![Frontend-Backend](https://file-jvoyleouov.now.sh/)


#### Utilizando el módulo HTTP de Node.js podemos crear un servidor web

1. Creá una carpeta llamada `05-http-server-node`.
2. Abrir una terminar y moverse del directorio hasta estar parada sobre la carpeta creada en el punto 1.
3. Ejecutar el comando `npm init` para iniciar un proyecto de Node.
4. Agregar el script `start` en el package.json.
5. Crear el archivo `index.js`
6. Copiar el siguiente contenido dentro del archivo `index.js`
    ```js
    const http = require('http');
    const port = 3000;

    const requestHandler = function (request, response) {
      console.log(request.url);
      response.end('Hola mundo desde un servidor de Node.js!');
    }

    const server = http.createServer(requestHandler);

    server.listen(port, function (err) {
      console.log(`server is listening on ${port}`);
    });
    ```
    * En la primera línea importamos el módulo http, que es propio de Node por lo que no tenemos que instalarlo. Declaramos una variable llamada `http` y guardamos el módulo. Esta variable contiene una función llamada `createServer`, que nos va a permitir crear el servidor web.
    * Para poder crear una instancia de servidor utilizamos el método `createServer`
    * Este método acepta como parámetro una función para manejar los pedidos (request) y respuestas(response) al server
    * Es decir que le vamos a pasar al método `createServer` un callback que se ejecuta en cada request/response
    * Por medio de la función `requestHandler` obtenemos los parámetros `request` para saber datos sobre el pedido y `request` para poder manejar la respuesta
    * La función `requestHandler` se va a ejecutar en cada pedido que le hagamos al server
    * `response.end` envía la respuesta `'Hola mundo desde un servidor de Node.js!'` al cliente que realizó el llamado HTTP
    * Lo único que nos queda por hacer es decirle al servidor que queremos que `escuche (listen)` en un determinado puerto por si llega algún pedido y que meneje la respuesta

    * El método listen acepta 2 parámetros
    * El primero es el puerto a donde tiene que escuchar
    * El segundo es un callback que se va a ejecutar al terminar de levantar el servidor
    * Este método le pasa al callback un parámetro con la descripción de error en caso de que exista uno (por ejemplo si ya hay algún programa corriendo en el puerto indicado)

    * Corremos en la consola el siguiente comando

      ```bash
      npm start
      ```

    * Si todo está bien vemos un mensaje de que el servidor está corriendo en el puerto 3000

      ```bash
      server is listening on 3000
      ```

    * Abrimos el browser y navegamos a la siguiente dirección: localhost:3000
    * Vemos el mensaje `Hola mundo desde un servidor de Node.js!` en pantalla
    * Podemos ver que utilizamos localhost ya que el servidor esta corriendo en nuestro ambiente
    * Utiliza el puerto 3000 ya que nosotros se lo indicamos
    * Si cortamos la ejecución del programa server.js se baja el servidor y ya no vamos a ver la respuesta en localhost:3000
    * El módulo HTTP es de muy bajo nivel y por ende es complejo de utilizar para una aplicación real
    * Es por esto que existen diferentes módulos que corren sobre HTTP para crear proyectos de manera más fácil
    * Los módulos más conocidos son:
      * [Express](http://expressjs.com/)
      * [Hapi](http://hapijs.com/)
      * [Koa](http://koajs.com/)
      * [Restify](http://restify.com/)
    * En esta sección del curso vamos a utilizar Express ya que es el más conocidoy base de todos

## Express
* Express es un framework web que nos permite hacer las siguientes tareas:
  * Nos permite manejar cualquier tipo de pedido HTTP (hasta ahora solo usamos GET)
  * Podemos crear rutas específicas
  * Integrar motores de render para crear vistas dinámicas (html creado con datos)
  * Crear `middleware` para procesar los pedidos a nuestro gusto **(feature más importante)**
  * Mucho más
* Express es un framework minimalista por lo cual nos da la base para poder tener un server y vamos a utilizar otros módulos para casos específicos como manejar una session, cookies y hasta manejar los datos que nos lleguen por POST
* Algunos [módulos son mantenidos por el equipo de Express](http://expressjs.com/en/resources/middleware.html)
* Express nos da la oportunidad de configurar todo a nuestro modo y eso nos da mucha flexibilidad a la hora de crear un proyecto
* Si bien esto es un beneficio también tenemos que aprender que módulos queremos usar y cómo vamos a crear la arquitectura del servidor
* No existe una receta única para resolver un problema con Express

### Crear un servidor
* En general un servidor web es una aplicación que escucha en un puerto por pedidos HTTP
* Al recibir un pedido tiene configurado que tiene que hacer para generar una respuesta
* Estos request pueden tener datos como pueden ser el id de un producto, un criterio de busqueda o el username y password de un usuario
* Con estos datos el servidor puede interactuar con una base de datos o no según el caso
* Si el servidor tiene que mandar un response con un documento HTML lo puede hacer de manera estática (como venimos haciendo hasta ahora)
* También puede leer datos de una base de datos, crear un documento HTML de forma dinámica (utilizando los datos) y mandar ese documento como respuesta al cliente
* Para crear los documentos HTML dinámico se pueden utilizar motores de template
* Express nos permite manejar las rutas para cada request y configurar como tiene que ser la respuesta
  * Configurar donde estan los archivos
  * Qué template se tiene que usar en cada oportunidad
  * Qué motor de template vamos a utilizar
  * Dónde van a estar guardados los archivos estáticos que queremos utilizar
* Para el resto de las tareas vamos a agregar módulos específicos

**Ejemplo:**
```js
const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
```

* En este ejemplo vemos como crear un server con Express
* Requerimos el módulo Express que nos exporta una función y la asignamos a una variable
* Por medio de la función express() creamos una nueva instancia de nuestro servidor
* Con el método `get` configuramos una ruta en la raíz de nuestro sitio `/`
* Utilizamos el método listen para configurar el puerto donde queremos levantar el server y un callback que se ejecuta al terminar de levantar el servidro
* Al correr este script podemos ver nuestro sitio en `localhost:3000`

### Crear rutas - GET
* Con Express podemos crear rutas de forma muy fácil
* Utilizamos el método `get` para obtener requests por `GET`
* Este método recibe un string como primer parámetro especificando la ruta que queremos manejar (Ejemplo la raíz de nuestro sitio '/')
* Como segundo parámetro le pasamos un callback con la función que tiene que ejecutar cuando se llame a la ruta configurada
* Este callback recibe los objetos `request` y `response` como parámetro
* El objeto `response` tiene un método `send` para enviar una respuesta

**Ejemplo:**
```js
app.get('/', function(req, res) {
  res.send('Hello World!');
});
```

* El objeto de Express tiene múltiples métodos para manejar `requests` para todos los verbos de HTTP

**Ejemplo:**
```js
app.post('/', function(req, res) {
  res.send('Utilizamos el método post para manejar un request por POST');
});

app.put('/', function(req, res) {
  res.send('Utilizamos el método put para manejar un request por PUT');
});

app.delete('/', function(req, res) {
  res.send('Utilizamos el método delete para manejar un request por DELETE');
});
```

* También nos provee un método `all` para manejar todos los verbos juntos
* Este método es muy útil para configurar `middleware` para todos los tipos de requests

**Ejemplo:**
```js
app.all('/', function(req, res) {
  res.send('Utilizamos el método all para manejar todos los tipos de requests');
});
```

* De esta forma podemos crear las rutas que necesitamos para nuestro proyecto

**Ejemplo:**
```js
app.get('/productos', function(req, res) {
  res.send('Mostramos una lista de productos');
});

app.post('/productos', function(req, res) {
  res.send('Creamos un Producto');
});

app.put('/productos', function(req, res) {
  res.send('Actualizamos un Producto');
});

app.delete('/productos', function(req, res) {
  res.send('Borramos un Producto');
});
```

* Utilizando el browser sólo podemos hace llamados por GET
* Existe una herramienta llamada [Postman](https://www.getpostman.com/) que nos permite hacer cualquier tipo de llamado y ver la respuesta
* Configuramos la url que queremos utilizar
* Usamos el botón de send para hacer un `request`
* Vemos la respuesta en la parte inferior
![Postman](../assets/node/postman1.png)

* Postman también nos da información sobre el status de nuestro `request` (ejemplo: 200)
* Podemos ver los encabezados enviados y recibidos
* También podemos realizar distintos tipos de llamados como pueden ser POST, PUT, DELETE, etc
![Postman](../assets/node/postman2.png)

### Manejar la respuesta
* Por medio del objeto `response` podemos acceder a distintos métodos para enviar una respuesta al cliente
* Podemos configurar desde retornar un JSON para un llamado de API hasta enviar un documento HTML estático o dinámico
* En el [sitio de Express](https://expressjs.com/en/guide/routing.html#response-methods) podemos ver todos los tipos de respuesta que podemos utilizar

**JSON**
* El método `json` nos permite enviar una respuesta del tipo JSON
* Acepta un objeto y lo transforma a formato JSON
* También envía todos los `headers` correctos para decirle al cliente que la respuesta está en formato JSON

**Ejemplo:**
```js
app.get('/', function(req, res) {
  res.json({ nombre: 'Marta', edad: '40'});
});
```

**sendFile**
* Podemos retornar cualquier tipo de archivo utilizando el método `sendFile`
* Este método nos permite retornar por ejemplo un archivo HTML específico

**Ejemplo:**
```js
const express = require('express')
const app = express()
const path = require('path')

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
```

* Para poder enviar un archivo tenemos que especificar la ruta absoluta del documento
* Usamos el módulo `path` de node para crear la ruta
* Existe una variable especial `__dirname` que nos permite obtener la ruta absoluta al directorio donde se esta ejecutando un script
* Por medio del método `join` podemos concatener la ruta del directorio (`__dirname`) y el nombre de nuestro archivo HTML

### Router
* Por medio del concepto de `router` podemos configurar nuestras rutas de mejor forma
* Si nuestro sitio crece mucho puede ser complejo leer y mantener las rutas de todo el sitio

**Router de nuestra Home**
```js
// archivo home.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Usamos el método GET');
});

router.post('/', function(req, res) {
  res.send('Usamos el método POST');
});

module.exports = router;
```

**Montamos el router**
```js
const express = require('express')
const app = express()
var wiki = require('./home.js');

app.use('/', wiki);
```

* En este ejemplo vemos que podemos utilizar el concepto de `Router` para crear nuevas rutas de nuestro sitio
* En un módulo creado por nosotros podemos agrupar todas las rutas que queremos según nuestro criterio
* Luego importamos los distintos módulos de ruta que armamos y los montamos en la dirección que queremos

### Manejo de status y errores
* El objeto response tiene el método status que nos permite establecer el código de HTTP que queremos mandar como respuesta
* Si no establecemos ninguno por default es 200
* Acepta un number como parámetro
* Podemos encadenar otros llamados

**Ejemplo:**
```js
app.get('/', function(request, response) {
  res.status(200).json({ nombre: 'Pepe', apellido: 'Martin'});
});

app.get('/error', function(request, response) {
  res.status(500).send('Server error');
});
```

* En este ejemplo vemos que podemos establecer el código de HTTP para el status de la respuesta
* Para manejar el status 404 podemos crear el siguiente manejador de rutas

**Ejemplo:**
```js
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
```

* De esta forma establecemos que Express intente manejar las rutas y en caso de no encontrar el documento significa que no existe
* Por eso podemos establecer el código de status en 404 y mandar la respuesta que necesitemos con el mensaje de error
* Por otro lado Express tiene una manera de manejar los errores
* Para esto tenemos que agregar la siguiente configuración:

**Ejemplo:**
```js
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

* Podemos ver que es bastante similar pero le agrega un par de parámetros más
  * El primer parámetro es el error, de esta forma podemos saber que pasóß
  * El segundo parámetro es el objeto `request` que es el mismo que vamos a utilizar dentro de las rutas
  * El tercer parámetro es el objeto `response` que también es el mismo que vamos a utilizar dentro de las rutas
  * Finalmente obtenemos un callback llamado next que nos permite seguir el flujo de filtros que aplica express
* Con esta configuración si hay algún error lo vamos a poder atrapar y responderle al usuario correctamente
* Es una buena práctica agregar estas dos configuración (404 y 500) a nuestro servidor de Express
* Ambos callbacks que le pasamos al método `use` se llaman `middleware` y nos dan muchas opciones a la hora de configurar nuestro servidor

### Middleware
* El concepto de middleware en Express no es más que un callback que se puede configurar para que se ejecute en algún momento
* Estos middlaware nos dejan modificar el objeto `request` y `response`
* Gracias a esta arquitectura podemos agregarle funcionalidad a nuestro servidor de express ya sea creando nuestros propios middlawares o usando algunos ya existentes
* Express tiene una gran cantidad de middlawares que se pueden configurar
* Para entender mejor este concepto vamos a ver un ejemplo

**Ejemplo:**
```js
const express = require('express');
const app = express();

const miMiddleware = function(req, res, next) {
  console.log('paso por un middlaware')
  next()
}

app.use(miMiddleware);

app.use('/someroute', miMiddleware);

app.get('/', miMiddleware);

app.listen(3000);
```

* En este ejemplo creamos una nueva función que acepta 3 parámetros y la asignamos a la variable miMiddleware
* En la firma de esta función encontramos los siguientes parámetros:
  * req: es el objeto `request`
  * res: es el objeto `response`
  * next: es un callback que nos permite llamar al próximo middleware
* Dentro de la función `miMiddleware` vemos que mostramos un mensaje en consola y luego llamamos a `next()`
* De esta forma podemos crear como una cadena de filtros de middlewares que se llaman los unos a los otros en el orden que nosotros los fuimos configurando
* Por medio del método `use` podemos configurar un middleware
* Podemos establecer que se use para todos los llamados como en el ejemplo de `app.use(miMiddleware)`
* También lo podemos configurar para que se aplique tan solo en una ruta como vemos en el ejemplo `app.get('/', miMiddleware)`
* Y hasta lo podemos configurar para usarlo tan solo en una ruta y en un sólo verbo de HTTP como es el caso de `app.get('/', miMiddleware)`
* También podemos configurar y utilizar un middleware desde un módulo de la siguiente forma

**Ejemplo:**
```js
const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
```

* En este ejemplo estamos configurando un módulo llamado [morgan](https://github.com/expressjs/morgan) como middleware de nuestro servidor
* Este middleware logea los llamados que le hacen a nuestro servidor
* Podemos ver en el sitio del módulo que es muy fácil de configurar y usar
* De esta forma podemos buscar otros módulos que le agreguen funcionalidad a nuestro servidor
* Para saber más sobre middleware pueden ingresar al [sitio de Express](https://expressjs.com/es/guide/writing-middleware.html)

### Contenido estático
* Express permite configurar carpetas para servir contenido estático sin tener que pasar por un controlador de ruta
* Es decir que si entramos a una ruta que express no maneja se va a fijar si existe como contenido estático
* Esta funcionalidad nos viene super bien para poder agregar archivos js para el cliente, css, imágenes o archivos html estáticos
* Una buena forma de ir armando la arquitectura de nuestro servidor es servir todos los archivos desde una misma carpeta
* Dado que es contenido estático y público podemos crear la carpeta `public` para este propósito

* En cuanto tenemos la carpeta creada podemos configurar Express usando el método `static`

**Ejemplo:**
```js
const express = require('express')
const app = express()
app.use(express.static('public'));
```

* En este ejemplo configuramos la carpeta public como contenedor de nuestros assets estáticos
* Es decir que podemos llamar al server de la siguiente forma y obtener una respuesta automática manejada por Express
* No tenemos que definir rutas específicas (get, post, etc) para el contenido estático ya que siempre es por get
* Si dentro de la carpeta public tenemos carpetas, img, css, js para nuestros archivos podemos llamar al server de la siguiente manera:
  * http://localhost:3000/img/logo.png
  * http://localhost:3000/js/script.js
  * http://localhost:3000/css/style.css
  * http://localhost:3000/productos.html
* Como podemos ver en los ejemplos nos crea por default un acceso al raiz del sitio
* Podemos configurar cómo se acceden a los assets de la siguiente manera:

**Ejemplo:**
```js
const express = require('express')
const app = express()
app.use('/assets', express.static('public'));
```
* En este ejemplo le decimos a express que utilice la url `/assets` para los archivos que estan dentro de la carpeta `public`
* Dada la nueva configuración accedemos a los assets de la siguiente manera:
  * http://localhost:3000/assets/img/logo.png
  * http://localhost:3000/assets/js/script.js
  * http://localhost:3000/assets/css/style.css
  * http://localhost:3000/assets/productos.html
* Como beneficio podemos utilizar cualquier carpeta para nuestro contenido estático
* No le estamos dando información al usuario sobre nuestra arquitectura
* Podemos cambiar la carpeta en cualquier momento con tan solo mantener la ruta donde montamos el contenido
* También podemos configurar más de una carpeta
* En caso de que Express no encuentre el asset requerido va a seguir buscando en las otras carpetas

**Ejemplo:**
```js
app.use(express.static('public'));
app.use(express.static('otracarpeta'));
```

* En este caso Express intenta primero buscar en la carpeta `public` y luego en la `otracarpeta`

### Usar templates
* Otro de los beneficios que tiene utilizar Express es que nos permite configurar un engine de template para crear nuestros documentos estáticos
* Existen diferentes motores de template que podemos configurar
* Vamos a utilizar y configurar [Handlebars](http://handlebarsjs.com/) como motor de template
* Para saber más sobre este template engine pueden ingresar a su sitio
* Dado qeu Handlebars es un poco complicado para configurar vamos a utilizar un módulo que nos facilita su uso
* Instalamos [express-handlebars]()

```bash
npm install express-handlebars --save
```

* Luego de instalar el módulo de `express-handlebars` tenemos que crear la siguiente arquitectura de carpetas

**Estructura de directorios:**
```
.
├── index.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars
```

* En la carpeta views vamos a poner todos nuestros templates
* La carpeta layouts guarda los archivos que van a funcionar como marco general de nuestros templates

**main.handlebars**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Example App</title>
</head>
<body>
    {{{body}}}
</body>
</html>
```

**home.handlebars**
```html
<h1>Home</h1>
<p>Sitio generado utilizando templates de <a href="http://handlebarsjs.com/">Handlebars</a></p>
```

**index.js**
```js
const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    res.render('home')
})

app.listen(3000)
```

* En este ejemplo creamos 2 partes del template:
  * main.handlebars: es el layout general de nuestro sitio. En este documento podemos poner todo lo que queremos que tengan en común todos los documentos. Es como el marco de nuestro sitio. Evita que tengamos que repetir toda la estructura en cada archivo
  * home.handlebars: En este documento ponemos el contenido específico para una sección, en este ejemplo es el Home de nuestro sitio
* Por otro lado tenemos una archivo **index.js** que contiene nuestro servidor Express
* `app.engine('handlebars', exphbs({defaultLayout: 'main'}))` configura que usamos un layout con handlebars
* `app.set('view engine', 'handlebars')` establece que queremos usar handlebars como motor de nuestros templates
* Finalmente tenemos un manejador de ruta para la home de nuestro sitio `/` y utilizamos el método `render` de Express para renderizar el template
* Es en este momento donde se compila el layout y el contenido del sitio para crear un archivo HTML que estamos mandando como respuesta en el método `render`
* Podes leer más sobre el método [render en el sitio de Express](http://expressjs.com/es/api.html#app.render)

### Armar un sitio
* Si hacemos todos los pasos hasta acá podemos tener configurado un sitio inicial
* Vamos a crear algunas secciones para armar un sitio usando templates
* Agregamos los nuevos archivos que vamos a necesitar

```
.
├── index.js
└── views
    ├── home.handlebars
    ├── contact.handlebars
    ├── products.handlebars
    └── layouts
        └── main.handlebars
```

* Agregamos el contenido a cada archivo:

**main.handlebars**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Mi primer app con templates</title>
  <link rel="stylesheet" href="/css/styles.css">
  <script src="/js/script.js"></script>
</head>
<body>
    <nav>
      <ul>
        <li>
          <a href="/">
            <img src="/img/logo.svg" alt="apple">
          </a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <section>
      {{{body}}}
    </section>
    <footer>
      <div>Copyright © 2017 Apple Inc. All rights reserved.</div>
    </footer>
</body>
</html>
```

**home.handlebars**
```html
<h1>Apple</h1>
<p>Bienvenido al sitio de apple.com!!</p>
```

**products.handlebars**
```html
<h1>Apple - Products</h1>
<p>Listado de productos</p>

<h2>MacBook</h2>
<ul>
  <li>MacBook</li>
  <li>MacBook Air</li>
  <li>MacBook Pro</li>
  <li>iMac</li>
  <li>iMac Pro</li>
  <li>Mac Pro</li>
  <li>Mac mini</li>
  <li>Accessories</li>
  <li>High Sierra</li>
</ul>

<h2>iPad</h2>
<ul>
  <li>iPad Pro</li>
  <li>iPad</li>
  <li>iPad mini 4</li>
  <li>iOS 11</li>
  <li>Accessories</li>
</ul>

<h2>Iphone</h2>
<ul>
  <li>iPhone X</li>
  <li>iPhone 8</li>
  <li>iPhone 7</li>
  <li>iPhone 6s</li>
  <li>iPhone SE</li>
  <li>iOS 11</li>
  <li>Accessories</li>
</ul>
```

**contact.handlebars**
```html
<h1>Apple - Contact</h1>
<form action="#">
  <div>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">
  </div>
  <div>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">
  </div>
  <div>
    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="argentina">Argentina</option>
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  </div>
  <div>
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder=""></textarea>
  </div>
  <input type="submit" value="Submit">
</form>
```

* En nuestro archivo index.js agregamos soporte para archivos estáticos
* De esta forma podemos crear la carpeta public y agregar las carpetas img, css y js
* También agregamos los manejadores de urls para `'/products'` y `'/contact'`
* Cada vista renderiza su propio template
* En todos los caso utilizamos el layout general

**index.js**
```js
app.use(express.static('public'))

app.get('/products', function (req, res) {
  res.render('products')
})

app.get('/contact', function (req, res) {
  res.render('contact')
})
```

**public/js/script.js**
```js
window.onload=function() {
  console.log('Cargamos el sitio usando templates!!!')
}
```

* Finalmente agregamos el css

**public/css/styles.css**
```css
body {
  background: white;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

nav {
  border-bottom: 1px solid black;
  padding-left: 20px;
  background: rgba(0,0,0,0.8);
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline-block;
}

nav ul li:first-child {
  margin-right: 10px;
}

nav ul li img {
  vertical-align: middle;
}

nav ul li a {
  text-decoration: none;
  color: white;
  display: block;
}
nav ul li a:hover{
  text-decoration: underline;
}

section {
  padding-left: 20px;
}

footer {
  padding-left: 20px;
  margin-top: 100px;
  font-size: 12px;
}

form div {
  margin-bottom: 10px;

}

form div label {
  display: inline-block;
  width: 100px;
}

form input {
  width: 200px;
  padding: 5px;
}

form select {
  width: 215px;
  height: 20px;
}

form textarea {
  width: 200px;
  padding: 5px;
}

form input[type=submit] {
  width: 100px;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0em;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  min-width: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  background: linear-gradient(#42a1ec, #0070c9);
  border-color: #07c;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
}
```

* Al unir todos estos templates, carpetas y archivos tenemos nuestro servidor listo
* Usando layouts y templates es más fácil crear y mantener sitios

### Renderizar valores
* Si bien tener layouts y secciones de html está bueno todavía no lo hace dinámico
* Podemos utilizar las expresiones de Handlebars para introducir contenido dentro de los templates
* Para renderizar un valor desde ECMAScript dentro del template de handlebars usamos `{{valor}}`

**products.handlebars**
```html
<div>{{nombre}}</div>
```
**index.js**
```js
  res.render('products', { nombre: 'Mi Producto'})
```

* En este ejemplo vemos que utilizamos `{{nombredevariable}}` para imprimir un valor dentro del template
* Desde Express podemos utilizar el método render para configuar el contenido y los valores
* Como segundo parámetro render acepta un objeto donde las propiedades van a ser los nombres de variables que vamos a utilizar en el template
* En este ejemplo el template renderiza el texto **Mi Producto** ya que le pedimos que remplace la variable `nombre` por el contenido de la propiedad `nombre` que le pasamos como segundo parámetro a `render`
* En handlebars tenemos helpers que podemos utilizar dentro de nuestros templates:
* Por ejemplo podemos utilizar `if` de la siguiente forma:

```html
<div>
  {{#if user}}
    <p>{{firstName}} {{lastName}}</p>
  {{/if}}
</div>
```

* También podemos iterar sobre colecciones de la siguiente manera:

```html
<ul>
{{#each products}}
  <li>{{this}}</li>
{{/each}}
</ul>
```

```js
  res.render('products', { nombre: 'Mi Producto', products: ['tv', 'printer', 'ps4']})
```

* En este ejemplo iteramos la colección de productos y creamos una lista de forma dinámica
* Existen varios helpers más y también podemos crear los nuestros si lo necesitamos
* Este es un gran momento para ver la [documentación de Handlebars](http://handlebarsjs.com) para aprender más sobre este template engine

### Templates parciales
* Handlebars también soporta partials que son pequeñas partes de código que puedo utilizar en distintos lados de mi proyecto
* En nuestro caso vamos a crear un partial del navbar que tenemos en el layout
* Necesitamos crear una carpeta con el nombre `partials` y dentro vamos a crear el archivo `navbar.handlebars`

```
views
└── partials
    └── navbar.handlebars
```

* Extraemos el siguiente código del documento `layout` y lo ponemos como contenido del partial `navbar`

**navbar.handlebars**
```html
<nav>
  <ul>
    <li>
      <a href="/">
        <img src="/img/logo.svg" alt="apple">
      </a>
    </li>
    <li>
      <a href="/products">Products</a>
    </li>
    <li>
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>
```

**main.handlebars**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Mi primer app con templates</title>
  <link rel="stylesheet" href="/css/styles.css">
  <script src="/js/script.js"></script>
</head>
<body>
    {{> navbar}}
    <section>
      {{{body}}}
    </section>
    <footer>
      <div>Copyright © 2017 Apple Inc. All rights reserved.</div>
    </footer>
</body>
</html>
```

* En nuestro archivo de layout agregamos `{{> navbar}}` para agregar la botonera
* Dado que el módulo de express-handlebars ya configura todo por nosotros podemos llamar al partial de esta manera
* De esta forma podemos reutilizar esta parte del código y poner la botonera donde la necesitemos
* Tener pequeños bloques de código en templates nos hace el trabajo más fácil
* Podes leer más sobre partials en el [sitio de Handlebars](http://handlebarsjs.com/partials.html) y la documentación de [express-handlebars](https://github.com/ericf/express-handlebars)

## Creando una botonera de forma dinámica
* Por medio del uso del helper `#if` y un poco de js y css vamos a mostrar el link seleccionado
* Para esto primero vamos a modificar el manejador de rutas de la siguiente manera

```js
app.get('/products', function (req, res) {
  res.render('products', { products: products, selected: { products: true }})
})

app.get('/contact', function (req, res) {
  res.render('contact', { selected: { contact: true } })
})
```

* En este ejemplo le pasamos al template un objecto que tiene un atributo `selected`
* Este objeto tiene propiedades como `products` o `contact` y le asignamos un valor boolean
* Con este cambio configuramos los datos que necesitamos pasarle al template
* Es el momento de modificar el layout para pasale el valor seleccionado al template parcial llamado `navbar`

```html
{{> navbar this}}
```

* `this` en handlebar es el contexto del template, en este caso es el objeto que le pasamos desde el manejador de la vista
* En `this.selected` tenemos los valores de las secciones seleccionados
* Ahora sólo resta modificar el template parcial de la botonera y utilizar un condicional para agregar o no una clase para el link seleccionado

```html
  <li>
    <a href="/products" class="{{#if selected.products}}selected{{/if}}">Products</a>
  </li>
  <li>
      <a href="/contact" class="{{#if selected.contact}}selected{{/if}}">Contact</a>
  </li>
```

**styles**
```css
nav ul li a.selected {
  color: gray;
}
```

* Dentro del parcial podemos acceder a la variable `selected` por su nombre
* Con `selected.contact o selected.products` obtenemos los valores establecidos en el manejador de ruta
* Al compilar el template evalúa si `selected.contact` o `selected.products` es verdadero para agregar la clase `selected`
* De esta forma hacemos que nuestro partial sea dinámico
* Existen otras formas de hacer esto, por ejemplo podemos utilizar el if para imprimir un elemento con la clase según la condicion

```html
  <li>
    {{#if selected.products}}
      <a href="/products" class="selected">Products</a>
    {{else}}
      <a href="/products">Products</a>
    {{/if}}
  </li>
  <li>
    {{#if selected.contact}}
      <a href="/contact" class="selected">Contact</a>
    {{else}}
      <a href="/contact">Contact</a>
    {{/if}}
  </li>
```

* También se puede dar el caso donde no queremos que el usuario vuelva a hacer click en la sección seleccionada

```html
  <li>
    {{#if selected.products}}
      <span>Products</span>
    {{else}}
      <a href="/products">Products</span>
    {{/if}}
  </li>
  <li>
    {{#if selected.contact}}
      <span>Contact</span>
    {{else}}
      <a href="/contact">Contact</a>
    {{/if}}
  </li>
```

## Obteniendo parametros
* Express nos permite obtener los parámetros enviados en el request de diferentes maneras
* Una de las formas más comúnes de pasar parámetros es utilizando la url
* Por ejemplo si queremos ver la descripción de un producto podemos utilizar la url `/productos/:id`
* Al establecer estar ruta estamos diciendo que si llamamos al server con una url tipo `/productos/10` obtenemos el parámetro id con el valor 10
* Vamos a crear un a pagina de detalle según el elemento del array productos

**index.js**
```js
// Tenemos configurado nuestro array de productos y secciones
const products = [
  { section: 'MacBook', items: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra'] },
  { section: 'iPad', items: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories',] },
  { section: 'iPhone', items: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories'] }
]

// Configuramos la url para que espere un id
app.get('/products/:id', function (req, res) {
  const id = req.params.id

  // Usamos el id como posición del elemento que estamos buscando
  const product = products[id]

  // agregamos un dato product a nuestro llamado de render para que le llegue este valor al template
  res.render('product', { product: product})
})
```

* Ahora que tenemos configurado la ruta podemos crear el nuevo template para mostrar el detalle del producto
* Creamos el archivo `product.handlebars` dentro de views

```
.
├── index.js
└── views
    ├── home.handlebars
    ├── contact.handlebars
    ├── products.handlebars
    ├── product.handlebars
    └── layouts
        └── main.handlebars
```

* Agregamos el siguiente código:

**product.handlebars**
```html
<h1>{{product.section}}</h1>
<ul>
{{#each product.items}}
  <li>{{this}}</li>
{{/each}}
</ul>
<a href="/products">Ir a Products</a>
```

* En este template obtenemos el nombre de la sección seleccionada de producto
* Mostramos todos los elementos de esa sección
* Si navegamos a la ruta: `http://localhost:3000/products/0` ya podemos ver la sección del primer elemento de la colección de productos
  * Podemos probar las otras url cambiando 0 por 1, 2 y ver que pasa si pasamos un parámetro donde no tenemos valores en el array
* Modificamos el template de `products.handebars` para crear un link que nos lleve al detalle de la sección

**products.handlebars**
```html
<h2>
  <a href="/products/{{@index}}">{{this.section}}</a>
</h2>
```

* Modificamos el título h2 para que tenga un hipervinculo
* Dado que cada hipervinculo nos tiene que llevar a un id distinto utilizamos el helper `@index` de handlebars
* Este helper nos retorna el índice del iterador, es decir que de esta forma obtenemos la posicion de cada elemento
* Si vemos el listado de productos ahora vemos que tenemos una forma de seleccionar cada sección y ver su detalle

## Submit de form por get - Express query
* El objeto Request de Express tiene una propiedad llamada `query` que nos permite obtener los valores pasados por `querystring`
* Si el querystring está vacío obtenemos un objeto sin propiedades

```js
// ruta: ?nombre=pepe&apellido=gutierrez

app.get('/contacto', function(req, res){
  const nombre = req.query.nombre
  const apellido = req.query.apellido
  res.send(`${nombre} ${apellido}`)
});
```

* En este ejemplo vemos que utilizando la propiedad `query` del objeto Request podemos obtener los valores pasados por query string
* Siguiendo nuestro ejemplo vamos a agregar esta funcionalidad a nuestro formulario de contacto
* En index.js agregamos una nueva ruta para manejar el request por get a la ruta `/contact/submitporget`
* Dado que el formulario manda los valores por GET vamos a utilizar `query` para obtenerlo
* Nos tenemos que acordar que del lado del servidor tenemos que esperar los datos de la forma que nos los mandan

**index.js**
```js
app.get('/contact/submitporget', function (req, res) {
  console.log(req.query) // vemos en la consola del server el objeto query con todos los datos

  const firstname = req.query.firstname
  const lastname = req.query.lastname
  const country = req.query.country
  const subject = req.query.subject

  res.send(`
    Nombre: ${firstname}
    Apellido: ${lastname}
    País: ${country}
    Mensaje: ${subject}
  `)
})
```

**contact.handlebars**
```html
<form action="/contact/submitporget">
```

* Al configurar esta nueva ruta y cambiar el action del formulario podemos enviar datos del cliente al servidor usando el método GET

## Submit de form por post - Express body y body-parse
* Para poder acceder a los valores pasados por POST tenemos que instalar un nuevo módulo llamado `body-parser`
* Este módulo funciona como middleware y agrega los valores pasados por POST a la propiedad `body` del objeto Request
* Instalamos `body-parser` de la siguiente manera

```bash
npm install body-parser --save
```

* Luego de instalarlo tenemos que configurarlo en nuestro proyecto

```js
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

* Primero requerimos el módulo y luego configuramos el middleware utilizando el método `use` de Express
* Agregamos `urlencoded` y `json` para poder configurar la forma en que body-parser parsea los datos
* Al configurar este módulo obtenemos que en cada request que llegue por POST podamos acceder a los datos utilizando la propiedad `body` del objeto Request

```js
// ruta: /contacto

app.get('/contacto', function(req, res){
  const nombre = req.body.nombre
  const apellido = req.body.apellido
  res.send(`${nombre} ${apellido}`)
});
```

* Dado que nos mandan los valores por POST podemos obtenerlos usando `body`
* Vamos a configurar body-parser en nuestro proyecto y mandar los valores del formulario por POST
* Primero vamos a cambiar el `action` y `method` de nuestro formulario

**contact.handlebars**
```html
<form action="/contact/submitporpost" method="post">
```

* Ahora necesitamos manejar el request usando una nueva ruta por POST

```js
app.post('/contact/submitporpost', function (req, res) {
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const country = req.body.country
  const subject = req.body.subject
  res.send(`
    Nombre: ${firstname}
    Apellido: ${lastname}
    País: ${country}
    Mensaje: ${subject}
  `)
})
```

* Al mandar los parámetros por GET los obteníamos usando la propiedad `query`
* Ahora al mandar los valores por POST los obtenemos utilizando `body`
* De esta forma vemos que los distintos métodos pasan los valores por distintos lados
* Pueden leer más sobre [body-parser en su sitio](https://www.npmjs.com/package/body-parser)

## Crear una API rest
* Ahora que ya sabemos enviar y recibir datos utilizando GET y POST vamos a crear un llamado de API
* Vamos a crear una ruta que al llamarla por GET retorne todos los productos que tenemos

**index.js**
```js
const productosApi = [
  'MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro',
  'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra',
  'iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories',
  'iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE'
]

app.get('/api/products', function (req, res) {
  const response = { products: productosApi}
  res.json(response)
})
```

* Creamos una nueva ruta que devuelve un listado de productos en formato JSON
* Ahora vamos a llamar desde el cliente usando AJAX al servidor y pedirle que nos mande el listado de productos
* Lo vamos a mostrar en pantalla recorriendo la respuesta y armando una lista
* Primero creamos un contenedor en el HTML de la página de productos para poder insertar los nuevos valores que traemos con un llamado de AJAX

**products.handlebars**
```html
<h2>Productos Por AJAX</h2>
<div id="productos">
  <img src="/img/loading.gif" alt="loading" width="30" />
</div>
```

* En la carpeta `public/img/` tenemos que copiar la [siguiente imagen(loading.gif)](../assets/node/loading.gif)
* Luego agregamos el siguiente código para hacer el llamado por AJAX, obtener la respuesta y crear de forma dinámica los items de productos

**public/script.js**
```js
window.onload=function() {
 const url = 'http://localhost:3000/api/products'
 const xmlhttp = new XMLHttpRequest();

 const ocultarLoader = () => {
   const loading = document.querySelector('#productos img')
   loading.style.display = 'none'
 }

 const crearListaDeProductos = (productos) => {
   const lista = document.createElement('ol')
   const contenedor = document.querySelector('#productos')

   productos.forEach((producto) => {
     const elemento = document.createElement('li')
     elemento.textContent = producto
     lista.appendChild(elemento)
   })

   contenedor.appendChild(lista)
 }

 xmlhttp.onreadystatechange = function() {
     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
       const respuesta = JSON.parse(xmlhttp.responseText);
       ocultarLoader()
       crearListaDeProductos(respuesta.products)
     }
 };

 xmlhttp.open("GET", url, true);
 xmlhttp.send();
}
```

* De esta forma estamos vinculando archivos del cliente y el servidor
* En la sección de base de datos agregamos los llamados por post para enviar datos
* Para subir archivos se puede configurar otro módulo conocido llamado [multer](https://www.npmjs.com/package/multer)
* También está bueno aprender [otros módulos que se llevan bien con Express](https://expressjs.com/en/resources/middleware.html)

* Si quieren aprender más sobre node puede mirar los [cursos de NodeSchool](https://nodeschool.io/)