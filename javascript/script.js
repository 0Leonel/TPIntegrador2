estudiante.onclick = function estudiante(){
    window.open("./document/estudiante.html");
}

function trainee(){
   window.open("./document/trainee.html");
}

function junior(){
    window.open("./document/junior.html");
}

resumen.onclick = function precioTotal(){
    
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo = document.getElementById("email").value;


  let entradas=document.getElementById("cantidad").value;
  let descuento=document.getElementById("descuento").value;

  let precioFinal =(entradas*200) - ((entradas*200) *descuento/100);
  
  if(entradas && nombre && apellido && correo){
    document.getElementById("precioFinal").value= "Total a pagar: $"+precioFinal+" pesos argentinos";

    resumenNombre.hidden = false;
    resumenApellido.hidden = false;
    resumenCorreo.hidden = false;
    resumenCantidad.hidden = false;
    resumenCategoria.hidden = false;
    resumenTotal.hidden = false;

    document.getElementById("resumenNombre").innerHTML= "Nombre: "+nombre;
    document.getElementById("resumenApellido").innerHTML= "Apellido: "+apellido;
    document.getElementById("resumenCorreo").innerHTML= "Correo: "+correo;
    document.getElementById("resumenCantidad").innerHTML= "Cantidad: "+entradas;
    document.getElementById("resumenCategoria").innerHTML= "Descuento: "+descuento+"%";
    document.getElementById("resumenTotal").innerHTML= "Total a pagar: $"+precioFinal+" pesos argentinos";
  }else{
    resumenNombre.hidden = true;
    resumenApellido.hidden = true;
    resumenCorreo.hidden = true;
    resumenCantidad.hidden = true;
    resumenCategoria.hidden = true;
    resumenTotal.hidden = true;

  }

}
nombre.onkeyup = function validar() {
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;

    // El input que queremos validar
    const input = document.forms['signup']['nombre'];

    //El div con el mensaje de advertencia:
    const message = document.getElementById('message');

    input.willValidate = false;

    // El tamaño maximo para nuestro input
    const maximo = 35;

    // El pattern que vamos a comprobar
    const pattern = new RegExp('^[A-Z]+$', 'i');

    // Primera validacion, si input esta vacio entonces no es valido
    if(!input.value) {
      isValid = false;
    } else {
      // Segunda validacion, si input es mayor que 35
      if(input.value.length > maximo) {
        isValid = false;
      } else {
        // Tercera validacion, si input contiene caracteres diferentes a los permitidos
        if(!pattern.test(input.value)){ 
        // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
        // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
          isValid = false;
        } else {
          // Si pasamos todas la validaciones anteriores, entonces el input es valido
          isValid = true;
        }
      }
    }

    //Ahora coloreamos el borde de nuestro input
    if(!isValid) {
      // rojo: no es valido
      input.style.borderColor = 'salmon'; // me parece que 'salmon' es un poco menos agresivo que 'red'
      // mostramos mensaje
      message.hidden = false;
    } else {
      // verde: si es valido
      input.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
      // ocultamos mensaje;
      message.hidden = true;
    }

    // devolvemos el valor de isValid
    return isValid;
  }

apellido.onkeyup = function Apellido() {
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;

    // El input que queremos validar
    const input = document.forms['signup']['apellido'];

    //El div con el mensaje de advertencia:
    const message = document.getElementById('message2');

    input.willValidate = false;

    // El tamaño maximo para nuestro input
    const maximo = 35;

    // El pattern que vamos a comprobar
    const pattern = new RegExp('^[A-Z]+$', 'i');

    // Primera validacion, si input esta vacio entonces no es valido
    if(!input.value) {
      isValid = false;
    } else {
      // Segunda validacion, si input es mayor que 35
      if(input.value.length > maximo) {
        isValid = false;
      } else {
        // Tercera validacion, si input contiene caracteres diferentes a los permitidos
        if(!pattern.test(input.value)){ 
        // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
        // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
          isValid = false;
        } else {
          // Si pasamos todas la validaciones anteriores, entonces el input es valido
          isValid = true;
        }
      }
    }

    //Ahora coloreamos el borde de nuestro input
    if(!isValid) {
      // rojo: no es valido
      input.style.borderColor = 'salmon'; // me parece que 'salmon' es un poco menos agresivo que 'red'
      // mostramos mensaje
      message.hidden = false;
    } else {
      // verde: si es valido
      input.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
      // ocultamos mensaje;
      message.hidden = true;
    }

    // devolvemos el valor de isValid
    return isValid;
  }
  function proximamente(){
    alert("Proximamente disponible!");
}

