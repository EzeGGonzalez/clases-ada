$('#add').on('click', function(){
    $.ajax('http://localhost:3000/user', { //
        method: "POST",
        data: {
            name: 'Alan',
            surname: 'Merchan',
            age: 30
        }
    })
    .done(function(){
    })
})

// GET/USERS 
$.ajax('http://localhost:3000/users')
    .done(function(data){
        for(let i= 0; i < data.length; i++){
            $('#tab').append(`
            <tr data-id=${data[i].id}>
                <td>${data[i].name}</td>
                <td>${data[i].surname}</td>
                <td>${data[i].age}</td>
                <td><button class="btn" id="put"><a href="put.html?id=${data[i].id}">Editar</a></button></td>
                <td><button class="btn" id="borrar">Borrar</button></td>
            </tr>
            `)
        }  
    })


