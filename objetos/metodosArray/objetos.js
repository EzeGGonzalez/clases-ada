// objeto literal, directamente lo creo con sus valores
var dino = {
  nombre: 'FaraDino',
  motricidad: false,

  saludar: function () {
    console.log("Soy el dino " + this.nombre + "... SKEREEE");
  }
}
dino.saludar()


// ****************************************************

// aca estoy definiendo una clase, el molde desde el que vamos a crear los objetos
class Dino {
  constructor (nombre) {
    this.nombre = nombre;
    this.motricidad = false;
  }

  saludar () {
    console.log("Soy el dino " + this.nombre + "... SKEREEE");
  }
 }

 // en este momento, creo un objeto a partir de la clase Dino, y le paso al constructor el nombre
 var dino1 = new Dino('FaraDino1');
 var dino2 = new Dino('FaraDino2');
 var dino3 = new Dino('FaraDino3');
 var dino4 = new Dino('FaraDino4');
 dino1.saludar();
 dino2.saludar();
 dino3.saludar();
 dino4.saludar();
