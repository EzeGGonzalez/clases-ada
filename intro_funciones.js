// Crear un programa que pregunte al usuario un número, y mostrar por consola si el número es o no primo. Después, preguntarle en otro prompt si quiere ver los primeros 15 números primos. Si responde ‘si’, mostrar la lista de los primeros 15 números primos. Si respondo otra cosa, no mostrar nada.

var n = prompt("ingresá un número para saber si es primo");
var esPrimo = true;

for ( var i = 2; i < x ; i++){
  if (x  % i === 0){
    esPrimo = false;
  }
}

if (esPrimo) {
  console.log("el número es primo");
} else {
  console.log("el número no es primo")
}

var quiereVerLosPrimos = prompt("querés ver los 15 primeros números primos?")

if (quiereVerLosPrimos === "si") {
  var primos = [];

  for (var x = 2; x < 100; x++){
    esPrimo = true;

    for ( var i = 2; i < x && esPrimo ; i++){
        if (x  % i === 0){
            esPrimo = false;
        }
    }

    if(esPrimo){
      primos.push(x)
    }
 }

 console.log(primos)
}
