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
    let nombre = v_nombreCompleto.value;
    let expresion = /^[a-zA-Záéíóúñü ]+/;
    if (expresion.test(nombre)==false){
        v_nombreCompleto.classList.add("error");

        error=true;
    }else{
        v_nombreCompleto.classList.remove("error");
    }
    return error;
}


function principal (){
    let errorCamposVacios = validarCamposVacios();
    if (errorCamposVacios){
        Swal.fire({
            title: "Campos Vacíos",
            text: "Debe completar todos los campos",
            icon: "warning",
            confirmButtonText:"Entendido",
          });
    }else{
        Swal.fire({
            title: "Información Completada",
            text: "Su solicitud se tramitó correctamente",
            icon: "success",
          });
    }
}



b_btnEnviar.addEventListener("click", principal);


