// // Importo las dotenv variables
// // En env variables guardo cosas sensibles como tokens, passwords, etc.
// // dotenv toma los archivos .env y nos permite accederlos mediante process.env.nombreVariable
// // NUNCA lo manejamos como un .txt porque cambia según el ambiente en el que estamos.
// // Los .env NUNCA JAMAS se suben a git
require("dotenv").config({
    path: "variables.env"
});

// Arranquemos nuestra app!
const app = require("./app");
// Si no tengo un port en mis variables de entorno defaulteo a 7777
// y se lo seteo en la variable port a mi aplicacion
app.set("port", process.env.PORT || 7777);

// Le digo a mi aplicacion que escuche en el puerto que acabo de definir
const server = app.listen(app.get("port"), () => {
    // Muestro en un console.log el puerto en el que estoy corriendo
    console.log(`Express running → PORT ${server.address().port}`);
});