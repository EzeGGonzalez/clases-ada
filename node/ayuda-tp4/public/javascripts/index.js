const $tableUsers = $("#table-users");
$.ajax("/api/users").done(function(data) {
    buildTableUsers(data);
});

function buildTableUsers(users) {
    for (let i = 0; i < users.length; i++) {
        $tableUsers.append(`
        <tr data-id=${users[i].id}>
            <td>${users[i].nombre}</td>
            <td>${users[i].apellido}</td>
            <td>${users[i].telefono}</td>
            <td>${users[i].email}</td>
            <td><button class="btn edit">Editar</button></td>
            <td><button class="btn delete" >Borrar</button></td>
        </tr>
    `);
    }
}

$(document).on("click", ".btn.edit", function() {
    // Recupero el id que tiene la row
    // Tengo que hacer .parent().parent() porque el button esta dentro de un span
    // Su primer parent es el span
    // Su segundo parent es la row
    const id = $(this)
        .parent()
        .parent()
        .data("id");

    location.href = `/users/edit?id=${id}`;
});

$(document).on("click", ".btn.delete", function() {
    const id = $(this)
        .parent()
        .parent()
        .data("id");

    $(this)
        .parent()
        .parent()
        .remove();

    $.ajax(`/api/users/${id}`, {
        method: "delete"
    });
});