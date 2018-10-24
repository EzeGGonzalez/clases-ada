// // 1) Crear un objeto que represente un Auto
// // 	•	Debera tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad maxima, peso
// // 	•	Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
// // 	•	Por lo tanto mediante el metodo acelerar tendra que ir aumentando la propiedad velocidad hasta llegar a la velocidad maxima.

var auto = {
  color: 'fucsia',
  modelo: 'focus',
  patente: 'ab0001',
  marca: 'ford',
  prendido: false,
  // km/hr
  velocidad: 0,
  velocidadMaxima: 200,
  // kg
  peso: 1500,

  encender: function () {
    // opcion 1
    // if (this.prendido === false) {
    //   this.prendido = true;
    // }

    // opcion 2
    // if (this.prendido !== true) {
    //   this.prendido = true;
    // }

    // opcion 3
    if (!this.prendido) {
      this.prendido = true;
    }
  },

  apagar: function () {
    if (this.prendido) {
      this.prendido = false;
    }
  },

  acelerar: function () {
    if (this.prendido) {
      // mientras no alcance la velocidad max, incremento mi velocidad
      while (this.velocidad < this.velocidadMaxima) {
        this.velocidad++;
        console.log('Acelerando -> ' + this.velocidad + ' Km/Hr');
      }

      // opcion 2
      // for (var i = this.velocidad; i < this.velocidadMaxima; i++) {
      //   this.velocidad++;
      //   console.log('Acelerando -> ' + this.velocidad + ' Km/Hr');
      // }
    }
  },

  frenar: function () {
    // mientras mi velocidad sea mayor a 0, voy decrementando
    while (this.velocidad > 0) {
      this.velocidad--;
      console.log('Frenando -> ' + this.velocidad + ' Km/Hr');
    }
    // for (var i = this.velocidad; i > 0; i = i - 20) {
    //   this.velocidad = this.velocidad - 20;
    //   console.log('Frenando -> ' + this.velocidad + ' Km/Hr');
    // }
  },

  mostrarVelocidadActual: function () {
    console.log('La velocidad del auto es ' + this.velocidad + ' Km/Hr')
  }
}