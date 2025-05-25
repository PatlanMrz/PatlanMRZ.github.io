//Funcion para los nombres
function formatearNombre(input) {
    console.log('La función formatearNombre se está ejecutando.');
    let nombre = input.value;
    let nombreFormateado = '';
    let siguienteMayuscula = true;

    for (let i = 0; i < nombre.length; i++) {
        const char = nombre[i];
        const charCode = char.charCodeAt(0);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 192 && charCode <= 255)) {
            if (siguienteMayuscula) {
                nombreFormateado += char.toUpperCase();
                siguienteMayuscula = false;
            } else {
                nombreFormateado += char.toLowerCase();
            }
        } else if (charCode === 32) {
            nombreFormateado += char;
            siguienteMayuscula = true;
        }
    }
    input.value = nombreFormateado;
}
function soloLetras(event) {
    return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode === 32) || (event.charCode >= 192 && event.charCode <= 255);
}
//Funciones para los apellidos
function formatearApellido(input) {
    let apellido = input.value.replace(/[^a-zA-Z\u00C0-\u00FF]/g, ''); // Eliminar no letras
    if (apellido.length > 0) {
        input.value = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
    } else {
        input.value = '';
    }
}
//Funciones para el telefono celular
function soloNumeros(event) {
    return (event.charCode >= 48 && event.charCode <= 57);
}

function formatearTelefono(input) {
    let numero = input.value.replace(/\D/g, '');
    let formattedNumber = '';

    if (numero.length > 0) {
        formattedNumber += '+';
        if (numero.length > 2) {
            formattedNumber += numero.substring(0, 2) + '-';
            if (numero.length > 4) {
                formattedNumber += numero.substring(2, 4) + '-';
                if (numero.length > 8) {
                    formattedNumber += numero.substring(4, 8) + '-';
                    formattedNumber += numero.substring(8);
                } else {
                    formattedNumber += numero.substring(4);
                }
            } else {
                formattedNumber += numero.substring(2);
            }
        } else {
            formattedNumber += numero;
        }
    }
    input.value = formattedNumber;
}
//Funciones para verificar que coinciden el email y password
function validarCampos() {
    let email = document.getElementById('em').value;
    let repetirEmail = document.getElementById('r_em').value;
    let password = document.getElementById('cont').value;
    let repetirPassword = document.getElementById('r_cont').value;
    let telefono = document.getElementById('pho');
    let errorEmail = document.getElementById('error_email');
    let errorPassword = document.getElementById('error_password');
    let formularioValido = true;

    if (email !== repetirEmail) {
        errorEmail.style.display = 'block';
        formularioValido = false;
    } else {
        errorEmail.style.display = 'none';
    }

    if (password !== repetirPassword) {
        errorPassword.style.display = 'block';
        formularioValido = false;
    } else {
        errorPassword.style.display = 'none';
    }

    if (telefono.value.trim() === "+") {
        telefono.value = "0";
    }

    return formularioValido;
}