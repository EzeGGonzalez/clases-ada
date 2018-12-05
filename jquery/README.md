# **jQuery**

**¿Qué es jQuery?**

Por un lado, es simplemente una biblioteca desarrollada para hacer que la programación de JavaScript sea más "fácil y agradable". Por otro lado, se usa de manera tan ubicua en la programación web que casi no se puede hablar sobre JS sin mencionarlo.

**¿Cómo jQuery hace más fácil usar JS?**

Veamos el siguiente ejemplo, donde con JS y jQuery hacemos la misma tarea: obtenemos un conjunto de elementos con la clase `items` y les agregamos la clase `selected`.

**Javascript**
```javascript
// obtenemos todos los elementos con clase items
var elements = document.getElementsByClassName('items');

// a cada elemento encontrado le agregamos la clase selected
for (var i = 0; i < elements.length; i++) {
  elements[i].classList.add('selected');
}
```
**jQuery**
```javascript
// obtenemos todos los elementos con el selector .items y les agregamos la clase selected
$('.items').addClass('selected');
```

The jQuery library makes it easy to manipulate a page of HTML after it's displayed by the browser. It also provides tools that help you listen for a user to interact with your page, tools that help you create animations in your page, and tools that let you communicate with a server without reloading the page. We'll get to those in a bit. First, let's look at some jQuery basics, and at how we can use jQuery to perform its core functionality: getting some elements and doing something with them.

