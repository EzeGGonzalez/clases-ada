// importamos el modulo fs
// no tenemos que instalar nada, ya viene con node!
const fs = require('fs');

// leo el contenido del archivo, que me devuelve algo diabolico llamado buffer
// la funcion readFileSync recibe como parametro el nombre del archivo que quiero leer
let contenidoDelArchivo = fs.readFileSync('users.json');
// transformamos lo que me devolvio en un json (porque lo guardamos con JSON.stringify en el ejemplo escribir.js)
let contenidoDelArchivoEnJson = JSON.parse(contenidoDelArchivo);

// finalmente tengo el array de users, y puedo hacer lo que necesite con el
// itero simplemente para mostrar que funciono!
for (var i = 0; i < contenidoDelArchivoEnJson.length; i++) {
  console.log(contenidoDelArchivoEnJson[i]);
}

// agrego un nuevo objeto al array
contenidoDelArchivoEnJson.push({ user: 3, puntos: 1000 })
// y puedo volver a escribir los datos en el archivo, para actualizarlo
fs.writeFileSync('users.json', JSON.stringify(contenidoDelArchivoEnJson));


/////////

// tambien podemos leer archivos que solo contengan texto, como datos.txt
// para eso usamos la misma funcion de antes
let contenidoDelArchivoTexto = fs.readFileSync('datos.txt');
// si mostramos esto por consola, nos devuelvo algo diabolico por ahora
console.log('Diabolico ->', contenidoDelArchivoTexto) // <Buffer 48 6f 6c 61 20 6d 75 6e 64 6f 21>

// para poder ver realmente el contenido que tenemos, le tengo que indicar a la funcion de lectura que estoy leyendo
// para eso la usamos de la siguiente forma
let contenidoDelArchivoTextoNoDiabolico = fs.readFileSync('datos.txt', 'utf8');
// ahora si... hacemos un console.log y aparece el mensaje!
console.log('No diabolico ->', contenidoDelArchivoTextoNoDiabolico);