// objeto literales
// declaro una variable, donde voy a guardar el nuevo objeto
var persona = {
  // agrego las propiedades nombre y dni,
  nombre: 'ada',
  dni: '12345678',

  // creo un método saludar, que hace un console.log con la frase `hola, mi nombre es ` y el nombre que esta en la variable nombre
  // dentro de la funcion estamos usando `this`... ¿¿y eso que es??
  // THIS Hace referencia al objeto en sí mismo, al "dueño" de esas propiedades y esos métodos que podemos invocar.
  // THIS habla de ESE objeto PUNTUAL y no de otro
  saludar: function () {
    console.log('hola, mi nombre es ' + this.nombre)
  },

  // creo un metodo dameLaInfo() que retorna un string con informacion del objeto
  dameLaInfo: function () {
    return 'mi nombre es ' + this.nombre + ' y mi dni es ' + this.dni;
  },

  // creo un metodo donde ejecuto 10 veces la funcion saludar()
  saludarDiezVeces: function () {
    for (var i = 0; i < 10; i++) {
      this.saludar();
    }
  },
}

// sobre el objeto persona ejecuto la función `dameLaInfo`, que retorna un string con los datos del objeto
var laInfo = persona.dameLaInfo();
// finalmente muestro esa información por consola
console.log(laInfo);

// ejecuto la funcion saludarDiezVeces
persona.saludarDiezVeces();