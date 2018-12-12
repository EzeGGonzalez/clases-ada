//PUT USERS - EDITAR USUARIOS

// leo todos los query params de la url
const urlParams = new URLSearchParams(window.location.search);
// leo el parametro que le estoy pasando
const usuarioAEditar = urlParams.get('id');
//le pego a mi api de usuarios y concateno la variable que tiene el id
$.ajax('http://localhost:3000/users/' + usuarioAEditar)
    .done(function(data){
        $('#name').val(data.name);
        $('#surname').val(data.surname);
        $('#age').val(data.age);
        // $('#tab').append(`
        //     <tr>
        //         <td><input type="text" id="name" value="${data.name}"></td>
        //         <td><input type="text" id="surname" value="${data.surname}"></td>
        //         <td><input type="text" id="age" value="${data.age}"></td>
        //     </tr>
        // `)
    })

$('#put').on('click', function(){
    $.ajax('http://localhost:3000/users/' + usuarioAEditar, {
        method: "PUT",
        data: {
            name: $('#name').val(),
            surname: $('#surname').val(),
            age: $('#age').val()
        },
        success: function () {
            alert('usuario editado');
            location.href = 'index.html';
        }
    })
})


// //Lee la URL del browser
// var url = window.location.href

// //Genera una nueva instancia del objeto URL
// url = new URL(url)

// //Agarra los query params en base al objeto URL ejemplo: ?id=test
// var search = url.search

// //Sacamos el ? de nuestro string ejemplo id=test
// search = search.slice(1, search.length)

// //Partimos nuestro string en base al caracter '&' ejemplo ['id=test']
// search = search.split('&')

// //Recorremos nuestra lista de parametros
// for (var i = 0; i < search.length; i++){
//   //Partimos id=test a ['id', 'test']
//   search[i] = search[i].split('=')
//   //Si el primer elemento del array es id (clave)
//   if (search[i][0] == 'id') {
//     //Mostramos el segundo elemento del array (valor)
//     console.log(search[i][1])
//   }
// }
