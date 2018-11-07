var array = [{ imagen: 'ima1'}, { imagen: 'ima2'}, { imagen: 'ima3'}];

for (var i = array.length - 1; i >= 0; i--) {
  array.push(array[i]);
}

console.log(array);

// si devolvemos un valor negativo -> A esta antes que B en el orden
// si devolvemos un valor positivo -> B esta antes que A en el orden
// si devolvemos un valor 0 -> A y B son iguales
array.sort(function (a, b) {
  // me devuelve entre -0.5 y 0.5
  return Math.random() - 0.5;
});
