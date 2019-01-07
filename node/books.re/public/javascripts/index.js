// $('button').click(function () {
//   const s = $('input').val();
//   location.href = `/listado?search=${s}`;
// })

document.getElementById('btn-search').onclick = function () {
  const s = document.getElementById('input-search').value;
  location.href = `/listado?palabraDeBusqueda=${s}`;
}