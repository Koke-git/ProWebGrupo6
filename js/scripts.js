
function CreaUser() {



    var resp = validaNombre();
    if (resp == false) {
        return false;
    }

    var resp = validaApellido();
    if (resp == false) {
        return false;
    }


    var resp = validarRut();
    if (resp == false) {
        return false;
    }

    var resp = validapassword();
    if (resp == false) {
        return false;
    }
    
    return true;

}

function validapassword() {
    var nombre = document.getElementById('txtPass1').value;
    var largo = nombre.trim().length;
    if (largo == 0) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Password',
                text: 'la clave esta vacia'
            });
        return false;
    }
    if (largo < 3) {

        Swal.fire({
            icon: 'error',
            title: 'Nombre',
            text: 'El nombre tiene un largo menor a 3 caracteres'
        });
        return false;
    }
    return true;
}



function validaOrdenTrabajo() {




    var resp = validaNombre();
    if (resp == false) {
        return false;
    }

    var resp = validaApellido();
    if (resp == false) {
        return false;
    }


    var resp = validarRut();
    if (resp == false) {
        return false;
    }

    var resp = validaMarcaOrderTrabajo();
    if (resp == false) {
        return false;
    }

    var resp = validaTipoMotor();
    if (resp == false) {
        return false;
    }

   
    var resp = validaMensaje();
    if (resp == false) {
        return false;
    }

    var resp = validamodelo();
    if (resp == false) {
        return false;
    }

    return true;
}

function validaagendamiento() {

    var resp = validaMecanico();
    if (resp == false) {
        return false;
    }


    var resp = validaServicio();
    if (resp == false) {
        return false;
    }



    var resp = validaNombre();
    if (resp == false) {
        return false;
    }

    var resp = validaApellido();
    if (resp == false) {
        return false;
    }
    var resp = validamodelo();
    if (resp == false) {
        return false;
    }
    var resp = validaMensaje();
    if (resp == false) {
        return false;
    }

    var resp = validamarca();
    if (resp == false) {
        return false;
    }

    var resp = validarFecha();
    if (resp == false) {
        return false;
    }


    return true;


}
function validaFomrIndex() {
    var resp = validaNombre();
    if (resp == false) {
        return false;
    }



    var resp = validaApellido();
    if (resp == false) {
        return false;
    }

    var resp = validaMensaje();
    if (resp == false) {
        return false;
    }






    return true;



}
function validaNombre() {
    var nombre = document.getElementById('txtNombre').value;
    var largo = nombre.trim().length;
    if (largo == 0) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Nombre',
                text: 'El nombre esta vacio'
            });
        return false;
    }
    if (largo < 3) {

        Swal.fire({
            icon: 'error',
            title: 'Nombre',
            text: 'El nombre tiene un largo menor a 3 caracteres'
        });
        return false;
    }
    return true;
}
function validaApellido() {
    var nombre = document.getElementById('txtApellido').value;
    var largo = nombre.trim().length;
    if (largo == 0) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Apellido',
                text: 'El apellido, debe de tener un largo minimo de 3 caracteres'
            });
        return false;
    }
    if (largo < 3) {

        Swal.fire({
            icon: 'error',
            title: 'Apellido',
            text: 'El apellido, debe de tener un largo minimo de 3 caracteres'
        });
        return false;
    }
    return true;
}
function validaMensaje() {
    var nombre = document.getElementById('txtMensaje').value;
    var largo = nombre.trim().length;
    if (largo == 0) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Mensaje',
                text: 'Debe dejar un mensaje'
            });
        return false;
    }
    if (largo < 3) {

        Swal.fire({
            icon: 'error',
            title: 'Mensaje',
            text: 'El nombre tiene un largo menor a 3 caracteres'
        });
        return false;
    }
    return true;
}
function validamarca() {
    var nombre = document.getElementById('txtMarca').value;
    var largo = nombre.trim().length;
    if (largo == 0) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Marca',
                text: 'Debe indicar la marca del vehiculo'
            });
        return false;
    }
    if (largo < 3) {

        Swal.fire({
            icon: 'error',
            title: 'Marca',
            text: 'La marca tiene un largo menor a 3 caracteres'
        });
        return false;
    }
    return true;
}
function validamodelo() {
    var nombre = document.getElementById('txtModelo').value;
    var largo = nombre.trim().length;
    if (largo == 0) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Modelo',
                text: 'Debe indicar el modelo del vehiculo'
            });
        return false;
    }
    if (largo < 3) {

        Swal.fire({
            icon: 'error',
            title: 'Modelo',
            text: 'El modelo tiene un largo menor a 3 caracteres'
        });
        return false;
    }
    return true;
}
function validaMecanico() {
    var nombre = document.getElementById('cmbMecanico').value;
    if (nombre == "Seleccione un Mecanico...") {

        Swal.fire(
            {
                icon: 'error',
                title: 'Mecanico',
                text: 'Debe seleccionar un mecanico'
            });
        return false;
    }

    return true;
}
function validaServicio() {
    var nombre = document.getElementById('cmbServicio').value;
    if (nombre == "Seleccione Servicio...") {

        Swal.fire(
            {
                icon: 'error',
                title: 'Servicio',
                text: 'Debe seleccionar un servicio'
            });
        return false;
    }

    return true;
}

function validarRut() {
    var rut = document.getElementById('txtRut').value;
    //alert(rut);
    var num = 3;
    var suma = 0;
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index, index + 1);
        //alert(caracter + ' x ' + num);
        suma = suma + (caracter * num);
        num = num - 1;
        if (num == 1) {
            num = 7;
        }
    }
    //alert('Suma:'+suma);
    var resto = suma % 11;
    var dv = 11 - resto;
    if (dv > 9) {
        if (dv == 10) {
            dv = 'K';
        } else {
            dv = 0;
        }
    }
    //alert('DV:'+dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if (dv != dv_usuario) {
        //alert('rut incorrecto');
        //Swal.fire('el rut es incorrecto');
        Swal.fire({
            icon: 'error',
            title: 'digito verificador rut',
            text: 'el digito de su rut es incorrecto'
        });
        return false;
    }
    return true;
}

function validarFecha() {
    var fechaUsuario = document.getElementById('txtFechaAgendamiento').value;
    var fechaSistema = new Date();
    console.log('Fecha Usuario:' + fechaUsuario);
    console.log('Fecha Sistema:' + fechaSistema);
    ////////////////////////////////////////// 2021-04-01
    var ano = fechaUsuario.slice(0, 4);
    var mes = fechaUsuario.slice(5, 7);
    var dia = fechaUsuario.slice(8, 10);
    console.log('A:' + ano + ' M:' + mes + ' D:' + dia);
    var fechaNuevaUsuario = new Date(ano, (mes - 1), dia);
    console.log('Nueva Fecha:' + fechaNuevaUsuario);
    //////////////////////////////////////////////////
    if (fechaNuevaUsuario < fechaSistema) {
       
        Swal.fire({
            icon: 'error',
            title: 'Fecha',
            text: 'Fecha de agendamiento debe ser mayor a la fecha actual'
          });
        return false;
    }
    return true;
}


function validaMarcaOrderTrabajo() {
    var nombre = document.getElementById('cmbmarca').value;
    if (nombre == "Seleccione opcion") {

        Swal.fire(
            {
                icon: 'error',
                title: 'Marca',
                text: 'Debe seleccionar una de las marcas'
            });
        return false;
    }

    return true;
}

function validaTipoMotor() {
    var nombre = document.getElementById('cmbmotor').value;
    if (nombre == "Seleccione opcion") {

        Swal.fire(
            {
                icon: 'error',
                title: 'Motor',
                text: 'Debe seleccionar el tipo de motor'
            });
        return false;
    }

    return true;
}


function validaAnioAuto() {
    var fechaSistema = new Date();
    var anito2 = fechaSistema.slice(0, 4);
    var anio2 = document.getElementById('txtanio').value;
    var anioNum = parseFloat(anio2);
    if (anioNum < 1970) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Año',
                text: 'El año debe ser mayor o igual a 1970!'
            });
        return false;
    }
    /*/
    if (anio + 1 <= anito ) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Año',
                text: 'El año debe como maximo puede ser el '+ anito+1
            });
        return false;
    }/*/

    return true;

}




function ValidaTamanioMotor() {
    var nombre = document.getElementById('x').value;
    var largo = nombre.trim().length;
    if (largo == 0) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Modelo',
                text: 'Debe indicar el modelo del vehiculo'
            });
        return false;
    }
    if (largo < 3) {

        Swal.fire({
            icon: 'error',
            title: 'Modelo',
            text: 'El modelo tiene un largo menor a 3 caracteres'
        });
        return false;
    }
    return true;
}


/*/
function validaPassword() {

    var pass1 = document.getElementById('txtPass1').value;
    var pass2 = document.getElementById('txtPass2').value;
 
    if (pass1 =! pass2) {

        Swal.fire(
            {
                icon: 'error',
                title: 'Password',
                text: 'Las contraseña no coincide'
            });
        return false;
    }

    return true;
}
/*/