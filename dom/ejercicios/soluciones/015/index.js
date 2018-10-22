// Seleccionar el elemento body

var elBody = document.querySelector("body");

// Crear un elemento ul

var elUl = document.createElement("ul");

// Repetir mientras el usuario no ingrese la palabra 'exit':
    // Mostrar al usuario un prompt con el siguiente mensaje: 'Ingrese un nombre'
    // Si el usuario no ingreso 'exit' entonces:
        // Creamos un elemento de lista li y le asignamos el valor que ingresa el usuario
    // Si el número de item es par
        // entonces le asignamos un color #ddd
    // Si el número de item es inpar
        //entonces le asignamos un color #eee
    // Insertamos el elemento li dentro de la lista ul

// var puSh = []
var i = 0;
while(ask !== "exit"){
    var ask = prompt("ingrese un nombre");
    if(ask !== "exit") {
        // for(var i = 0 ; i < ask.length ; i++){
            // puSh.push(ask);
            // console.log(puSh);

            var elLi = document.createElement("li");
            elLi.innerHTML = ask;
            elUl.appendChild(elLi);

            if(i%2===0){
                elLi.style.color = "#ddd";
            }else{
                elLi.style.color = "#eee";
            }
        // }
            i++;
    }
}

// Al finalizar insertamos la lista ul en el elemento body

elBody.appendChild(elUl);