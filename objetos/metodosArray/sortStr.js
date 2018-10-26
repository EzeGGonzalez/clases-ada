var strings = ['Ada', 'abba', 'Grace', 'gancho'];

strings.sort()
// esto devolveria:
// ["Ada", "Grace", "abba", "gancho"]
// pero....... no deberia ser: ["abba", "Ada", "gancho", "Grace"] ?
// esto es porque cuando JS compara strings, utiliza su valor UNICODE (que es un numero asociado a cada caracter)
// por ejemplo:
// la A mayuscula es 65
// la a minuscula es 97
// la G mayuscula es 71
// la g minuscula es 103
// entonces los valores UNICODE en orden serian 65 (A), 71 (G), 97 (a) y 103 (g)

// para que compare bien estos strings, tenemos que indicarle que criterio usar
var ordenarStrings = function (stringUno, stringDos) {
  // lo primero que vamos a hacer es llevar ambos strings a minusculas
  // de esta forma, nos aseguramos que siempre compare el mismo caracter alfabeticamente, mas alla de si es en mayusculas o minusculas
  stringUno = stringUno.toLowerCase();
  stringDos = stringDos.toLowerCase();

  // y despues podemos comparar igual que con los numeros
  // si stringUno es menor que stringDos, retorno -1 para indicarle a JS que primero tiene que estar stringUno y despues stringDos
  if (stringUno < stringDos) return -1;
  // si stringUno es mayor que stringDos, retorno 1 para indicarle a JS que primero tiene que estar stringDos por ser menor y despues stringUno
  if (stringUno > stringDos) return 1;
  // si ambos son iguales, tengo que retornar 0
  return 0;
}

// entonces, ahora cuando ordeno mi array con este criterio
strings.sort(ordenarStrings)
// lo que me va a devolver es:
// ["abba", "Ada", "gancho", "Grace"]
// que es con orden alfabetico, sin importarme que este en mayusculas o minusculas