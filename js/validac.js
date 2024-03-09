const b_btnEnviar = document.querySelector("#btn-enviar")
const v_nombreCompleto = document.querySelector("#nombreCompleto")
const v_correoElectronico = document.querySelector("#correoElectronico")
const v_telefono = document.querySelector("#telefono")
const v_mensaje = document.querySelector("#mensaje")

function validarCamposVacios () {
    let error = false;
    let camposRequeridos = document.querySelectorAll("#formularioContacto [required]")
    for(let i=0; i<camposRequeridos.length; i++){
        if (camposRequeridos[i].value == "") {
            camposRequeridos[i].classList.add("error")
            error = true;
        }else{
            camposRequeridos[i].classList.remove("error")
        }
    }
    return error;
}

function validarNombreApellido(){
    let error=false;
    let input_nombre = v_nombreCompleto.value;
    let expresion = /^[a-zA-Záéíóúñü ]+/;
    if (expresion.test(input_nombre)==false){
        v_nombreCompleto.classList.add("error");
        error=true;
    }else{
        v_nombreCompleto.classList.remove("error");
    }
    return error;
}

function validarEmail (){
    let error=false;
    let input_email = v_correoElectronico.value;
    let expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    // visto en Fundamentos de Progra
    // let expresion = /^([a-zA-Z]{2,})([.]{1})([a-zA-Z]{2,})(@)([a-zA-Z0-9]{2,})([.]{1})([a-zA-Z]{2,})$/; --> visto en clase con el profe David
    if (expresion.test(input_email)==false){
        v_correoElectronico.classList.add("error");
        error=true;
    }else{
        v_correoElectronico.classList.remove("error");
    }
    return error;
}

function validarTelefono (){
    let error=false;
    let input_telefono = v_telefono.value;
    let expresion = /^[0-9]{4}-[0-9]{4}$/; 
    // |===> se ve 8782-5416
    if (expresion.test(input_telefono)==false){
        v_telefono.classList.add("error");
        error=true;
    }else{
        v_telefono.classList.remove("error");
    }
    return error;
}

function principal (){
    let errorCamposVacios = validarCamposVacios();
    let errorNombreApellido = validarNombreApellido();
    let errorEmail = validarEmail ();
    let errorTelefono = validarTelefono ();
    if (errorCamposVacios){
        Swal.fire({
            title: "Campos Vacíos",
            text: "Debe completar todos los campos con la información y el formato correcto",
            icon: "warning",
            confirmButtonText:"Entendido",
          });
    } else if(errorNombreApellido){
        Swal.fire({
            title: "Nombre incorrecto",
            text: "Por favor escribir su nombre utilizando únicamente letras del abecedario",
            icon: "warning",
            confirmButtonText:"Entendido",
          });
    } else if(errorEmail){
        Swal.fire({
            title: "Email incorrecto",
            text: "Por favor, no deje espacios vacíos en su correo",
            icon: "warning",
            confirmButtonText:"Entendido",
          });
    } else if(errorTelefono){
        Swal.fire({
            title: "Teléfono incorrecto",
            text: "El teléfono debe tener 8 dígitos y seguir el formato ####-####",
            icon: "warning",
            confirmButtonText:"Entendido",
          });
    }else{
        Swal.fire({
            title: "Información Completada",
            text: "Su solicitud se tramitó correctamente",
            icon: "success",
          });
    limpiarCampos();
    }

}

function limpiarCampos(){
    v_nombreCompleto.value ="";
    v_correoElectronico.value = "";
    v_telefono.value = "";
    v_mensaje.value= "";
    
}


b_btnEnviar.addEventListener("click", principal);
