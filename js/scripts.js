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

