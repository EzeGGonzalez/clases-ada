let userName = "";
const productos = [];
let contador = 1;

const RECARGO_EFECTIVO = 1;
const RECARGO_DEBITO = 1.05;
const RECARGO_CREDITO = 1.10;
const RECARGO_CHEQUE = 1.20;

const RECARGO_1_CUOTA = 1;
const RECARGO_12_CUOTA = 1.20;
const RECARGO_24_CUOTA = 1.45;
const RECARGO_36_CUOTA = 1.70;

$('#form-user button').click(function () {
  $('#contenedor-principal').show();
  $('#form-user').hide();

  userName = $('#form-user input').val()
})

function boton (botonPresionado) {
  switch (botonPresionado) {
    case 1:
      empezarCompra();
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      console.log('boton ' + botonPresionado);
      break;
    default:
      console.log('presionaste cualquier cosa');
  }
}

function empezarCompra () {
  $('#contenedor-principal').append('<p class="cartelito-espera">Será atendido en instantes</p>')

  setTimeout(function () {
    $('#nuevo-producto').show();
    $('.cartelito-espera').remove();
  }, 1000);
}

// vamos a dar de alta un producto
function agregarProducto () {
  let nombreProducto = $('#nombre-producto').val();
  let precioProducto = $('#precio-producto').val();

  // si esta vacio, no hacemos nada
  if (nombreProducto.length === 0 || precioProducto.length === 0) {
    return;
  }

  let newId = contador++;

  productos.push({
    id: newId,
    nombre: nombreProducto,
    precio: parseFloat(precioProducto)
  });

  $('#lista-productos').append(`
    <li data-index="${newId}">
      ${nombreProducto} $${precioProducto}
      <button class="volar-producto">x</button>
    </li>
  `);

  // calcular el subtotal
  let subtotal = obtenerSubtotal();
  $('#subtotal').text(`$${subtotal}`);
}

$(document).on('click', '.volar-producto', function () {
  // $(this).parent() es el <li>
  var idABorrar = $(this).parent().data('index');
  $(this).parent().remove();
  // buscamos al producto por el id
  let index = productos.findIndex(p => p.id == idABorrar);
  // eliminar el producto de la posicion index
  productos.splice(index, 1);

  // calcular el subtotal
  let subtotal = obtenerSubtotal();
  $('#subtotal').text(`ARS ${subtotal}`);
})

function obtenerSubtotal () {
  let subtotal = 0;
  for (let i = 0; i < productos.length; i++) {
    subtotal += productos[i].precio;
  }
  return subtotal;
}

$('#mp').on('change', function () {
  // es el select
  // me devuelve la opcion seleccionada
  if ($(this).val() === 'credito') {
    $('#cuotas').show();
  } else {
    $('#cuotas').hide();
  }
});
// funcion para calcular el total total
$('#total').click(function () {
  // obtenemos las 3 cosas para poder calcular el total
  let subtotal = obtenerSubtotal();
  let mp = $('#mp').val();
  let cuotas = $('#cuotas').val();

  let recargoMp = 1;
  let recargoCuotas = 1;

  if (mp === 'efectivo') recargoMp = RECARGO_EFECTIVO;
  if (mp === 'debito') recargoMp = RECARGO_DEBITO;
  if (mp === 'cheque') recargoMp = RECARGO_CHEQUE;
  if (mp === 'credito') recargoMp = RECARGO_CREDITO;

  if (cuotas === '1') recargoCuotas = RECARGO_1_CUOTA;
  if (cuotas === '12') recargoCuotas = RECARGO_12_CUOTA;
  if (cuotas === '24') recargoCuotas = RECARGO_24_CUOTA;
  if (cuotas === '36') recargoCuotas = RECARGO_36_CUOTA;

  let total = subtotal * recargoMp * recargoCuotas;

  // $("#gran-total").html(total.toFixed(2));
  $("#gran-total").html(Math.round(total))
  // Math.floor
  // Math.ceil
});





// if (mp === 'efectivo') {
//   subtotal = subtotal * RECARGO_EFECTIVO
// }
// if (mp === 'debito') {
//   subtotal = subtotal * RECARGO_DEBITO
// }
// if (mp === 'cheque') {
//   subtotal = subtotal * RECARGO_CHEQUE
// }
// if (mp === 'credito') {
//   subtotal = subtotal * RECARGO_CREDITO

//   if (cuotas === '1') {
//     subtotal = subtotal * RECARGO_1_CUOTA
//   }
//   if (cuotas === '12') {
//     subtotal = subtotal * RECARGO_12_CUOTA
//   }
//   if (cuotas === '24') {
//     subtotal = subtotal * RECARGO_24_CUOTA
//   }
//   if (cuotas === '36') {
//     subtotal = subtotal * RECARGO_36_CUOTA
//   }
// }



// CON SWITCH


// switch (mp) {
//   case 'efectivo':
//     subtotal = subtotal * RECARGO_EFECTIVO
//     break
//   case 'debito':
//     subtotal = subtotal * RECARGO_DEBITO
//     break
//   case 'cheque':
//     subtotal = subtotal * RECARGO_CHEQUE
//     break
//   case 'credito':
//     subtotal = subtotal * RECARGO_CREDITO
//     break
// }

// switch (cuotas) {
//   case '1':
//     subtotal = subtotal * RECARGO_1_CUOTA
//     break
//   case '12':
//     subtotal = subtotal * RECARGO_12_CUOTA
//     break
//   case '24':
//     subtotal = subtotal * RECARGO_24_CUOTA
//     break
//   case '36':
//     subtotal = subtotal * RECARGO_36_CUOTA
//     break
// }