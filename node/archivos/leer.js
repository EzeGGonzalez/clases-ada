// importamos el modulo fs
// no tenemos que instalar nada, ya viene con node!
const fs = require('fs');

// leo el contenido del archivo, que me devuelve algo diabolico llamado buffer
// la funcion readFileSync recibe como parametro el nombre del archivo que quiero leer
let contenidoDelArchivo = fs.readFileSync('datos.txt', 'utf8');

console.log(contenidoDelArchivo);


let contenidoDelArchivoJson = fs.readFileSync('users.json');
contenidoDelArchivoJson = JSON.parse(contenidoDelArchivoJson);

for (var i = 0; i < contenidoDelArchivoJson.length; i++) {
  console.log(contenidoDelArchivoJson[i].name);
}