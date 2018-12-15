console.log('NUMEROS')

let regexSoloNumeros = /^[0-9]+$/;

console.log( regexSoloNumeros.test("123456789") ) // true
console.log( regexSoloNumeros.test("Hola") ) // false
console.log( regexSoloNumeros.test("12345678.90") ) // false
console.log( regexSoloNumeros.test("12345678,90") ) // false


console.log('ALFANUMERICO')
const regexAlfanumerica = /^[a-z0-9]+$/i;

console.log( regexAlfanumerica.test("MLA1234567890") )
console.log( regexAlfanumerica.test("1234567890") )
console.log( regexAlfanumerica.test("123456A7890") )
console.log( regexAlfanumerica.test("12345 67890") )
console.log( regexAlfanumerica.test("") )

console.log('EMAILS')
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
console.log( regexMail.test('egonzalez01@gmail.com') ) // true
console.log( regexMail.test('otro@hotmail.com') ) // true
console.log( regexMail.test('otro@hotmail.com.ar') ) // true
console.log( regexMail.test('otro@hotmail.com,ar') ) // true
console.log( regexMail.test('@hotmail.com.ar') ) // true
