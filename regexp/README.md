# RegExp

* En JS las expresiones regulares son un tipo de dato
* Nos permite encontrar patrones de texto en un string
* Por lo general se pueden utilizar para validar los campos de textos
* Las expresiones regulares o regex tienen un método test() que nos permiten validar si un string para saber si cumple con la expresión regular

**Ejemplo: validar que un texto sean solo números:**
```js
// vamos a validar que un string sean SOLO numeros (no signos, no letras... solo numeros)

// el primer paso es crear la regular expression
// esta regex valida que sean solo numeros, al menos 1
let regexSoloNumeros = /^[0-9]+$/;
// el metodo test recibe como parametro un string y retorna verdadero o falso cuando
console.log(regexSoloNumeros.test('123456789')) // -> esto retorna true

console.log(regexSoloNumeros.test('A123456789')) // -> esto retorna false

console.log(regexSoloNumeros.test('AAAA')) // -> esto retorna false

console.log(regexSoloNumeros.test('')) // -> esto retorna false

```

**Ejemplo: validar que un texto solo contenga números y/o letras:**
```js
// vamos a validar que un string sean SOLO numeros y letras (no signos ni espacios)

// el primer paso es crear la regular expression
// esta regex valida que alfanumerica, y al menos 1 caracter
const regexAlfanumerica = /^[a-z0-9]+$/i;
// el metodo test recibe como parametro un string y retorna verdadero o falso cuando
console.log(regexAlfanumerica.test('123456789')) // -> esto retorna true

console.log(regexAlfanumerica.test('A1B3B4B6')) // -> esto retorna true

console.log(regexAlfanumerica.test('Hola mundo')) // -> esto retorna false por el espacio (la regex solo permite numeros y letras)

console.log(regexAlfanumerica.test('HolaMundo')) // -> esto retorna true

console.log(regexAlfanumerica.test('hola mundo!')) // -> esto retorna false por el signo y el espacio

console.log(regexAlfanumerica.test('')) // -> esto retorna false

```

**Ejemplo: validar que el campo sea un email**
```js
// de este tipo de regex vamos a encontrar MUCHAS versiones
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

console.log(regexMail.test('a@b.com')) // true

console.log(regexMail.test('name.1989@hotmail.com.ar')) // true

console.log(regexMail.test('name_1989@hotmail.com.ar')) // true

console.log(regexMail.test('name!1989@hotmail.com.ar')) // false, por el signo de admiracion

console.log(regexMail.test('name1989_hotmail.com.ar')) // false, no tiene el @

console.log(regexMail.test('name1989@')) // false,  tiene el @ pero nada mas

console.log(regexMail.test('name1989@hotmail')) // false,  tiene el @ y servidor, pero falta el .com / .net / .org / etc
```

### Info extra
* Para buscar distintas regex -> http://www.regexlib.com
* Para ver más de regex en general -> http://www.robertoballester.com/pequeno-manual-sobre-expresiones-regulares-regex/
