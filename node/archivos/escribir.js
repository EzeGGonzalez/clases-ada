// importamos el modulo fs
// no tenemos que instalar nada, ya viene con node!
const fs = require('fs');

// creamos un array de obetjos que vamos a guardar en el archivo
const ranking = [ { user: 1, puntos: 120 }, { user: 2, puntos: 10 } ];

// esto es para escribir en un archivo
// como solo podemos guardar strings, al igual que en el localstorage, para guardar un array tenemos que hacer el JSON.stringify
// la funcion writeFileSync la usamos con dos parametros:
//      el primero es el nombre del archivo donde queremos guardar algo
//      el segundo es lo que queremos guardar
fs.writeFileSync('users.json', JSON.stringify(ranking));

/// despues de ejecutar esto, vamos a ver en la carpeta que tenemos el archivo users.json con los datos del array
