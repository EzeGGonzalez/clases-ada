// 1) Recuperar el parametro id de la url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
// 2) Recuperar los nodos con jQuery de mi HTML
const $nombre = $('input[name="nombre"]');
const $apellido = $('input[name="apellido"]');
const $telefono = $('input[name="telefono"]');
const $email = $('input[name="email"]');
// 3) Le pido al servidor la info del usuario con ese id
$.ajax(`/api/users/${id}`).done(function(user) {
    $nombre.val(user.nombre);
    $apellido.val(user.apellido);
    $telefono.val(user.telefono);
    $email.val(user.email);
});