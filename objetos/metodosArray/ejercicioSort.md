
Partiendo del siguiente array de objetos

```js
var peli1 = {
  id: 1,
  titulo: "matrix 1",
  anio: 1999,
  rating: 7.9,
  duracion: 131,
  actores: ['Keanu Reeves', 'Carrie‑Anne Moss', 'Laurence Fishburne', 'Hugo Weaving']
};
var peli2 = {
  id: 2,
  titulo: "matrix 2",
  anio: 2003,
  rating: 6.5,
  duracion: 138,
  actores: ['Keanu Reeves', 'Carrie‑Anne Moss', 'Laurence Fishburne', 'Hugo Weaving', 'Monica Bellucci']
};
var peli3 = {
  id: 3,
  titulo: "aladin",
  anio: 1992,
  rating: 7.4,
  duracion: 87,
  actores: ['Jasmín', 'Aladdin', 'El Genio', 'Jafar', 'Abu']
};
var peli4 = {
  id: 4,
  titulo: "aladin: el regreso de jafar",
  anio: 1994,
  rating: 4.9,
  duracion: 66,
  actores: ['Jasmín', 'Aladdin', 'El Genio', 'Jafar']
};
var peli5 = {
  id: 5,
  titulo: "aladin y el rey de los ladrones",
  anio: 1995,
  rating: 5.9,
  duracion: 80,
  actores: ['Jasmín', 'Aladdin', 'El Genio', 'Jafar', 'Cassim']
};
var peli6 = {
  id: 6,
  titulo: "los locos adams",
  anio: 1991,
  rating: 5.9,
  duracion: 101,
  actores: ['Anjelica Huston', 'Raul Julia', 'Christopher Lloyd', 'Christina Ricci', 'Elizabeth Wilson', 'Dan Hedaya', 'Jimmy Workman', 'Judith Malina']
};
var peli7 = {
  id: 7,
  titulo: "loco por mery",
  anio: 1998,
  rating: 6.2,
  duracion: 119,
  actores: ['Cameron Diaz',  'Ben Stiller',  'Matt Dillon',  'Chris Elliott',  'Lee Evans',  'Lin Shaye', 'W. Earl Brown',  'Keith David',  'Markie Post',  'Brett Favre',  'Harland Williams', 'Jeffrey Tambor',  'Richard Jenkins',  'Sarah Silverman',  'Jonathan Richman']
};

var misPeliculas = [];

misPeliculas.push(peli1);
misPeliculas.push(peli2);
misPeliculas.push(peli3);
misPeliculas.push(peli4);
misPeliculas.push(peli5);
misPeliculas.push(peli6);
misPeliculas.push(peli7);
```

Resolver los siguientes puntos:

0. Mostrar la pelicula más vieja
1. Mostrar todas las peliculas ordenadas por titulo
2. Mostrar la película con mejor rating
3. Mostrar la película con mayor cantidad de actores
4. Mostrar la película más nueva
5. Mostrar la película más larga
6. Eliminar la pelicula con peor rating
7. Eliminar la película más larga
8. Eliminar `peli3` y `peli5`