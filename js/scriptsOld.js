function validaFomrIndex()
{
    var resp = validaNombre();
    if (resp == false) 
    {
        return false;
    }  



    var resp = validaApellido();
    if (resp == false) 
    {
        return false;
    }

    var resp = validaMensaje();
    if (resp == false) 
    {
        return false;
    }

    return true;   

}
function validaNombre() {
    var nombre = document.getElementById('txtNombre').value;
    var largo = nombre.trim().length;
    if (largo == 0)
     {
        
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
    if (largo == 0)
     {
        
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
    if (largo == 0)
     {
        
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