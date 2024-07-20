
function validateRecaptcha() {
    const recaptchaResponse = document.getElementById('g-recaptcha-response').value;
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    if (recaptchaResponse === '') {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Debes completar el reCaptcha para continuar",
          });
        return false;
    }

    sendEmail(name, email);
    return false;
}

function sendEmail(name, email) {
    emailjs.send('service_o62f7iq', 'template_7gcf31q', {
        name: name,
        email: email,
    })
    .then(function(response) {
        
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
            icon: "success",
            title: "Registro exitoso!",
            text: "Te hemos enviado un correo de confirmación. Revisa tu bandeja de entrada o spam.",
          }).then(function() {
            window.location.href = "/index.html"; 
          });
    }, function(error) {
        Swal.fire({
            icon: "error",
            title: "Ha ocurrido un error",
            text: error,
          });
    });
}


/* FUNCION DEL MENU DE LA BARRA DE NAVEGACION EN MOVILES */

document.addEventListener('DOMContentLoaded', function() {
    const handler = document.querySelector('.handler');
    const phoneMenu = document.querySelector('.phone_menu');

    handler.addEventListener('click', function(event) {
        event.stopPropagation(); 
        if (phoneMenu.style.display === 'none' || phoneMenu.style.display === '') {
            phoneMenu.style.display = 'block';
        } else {
            phoneMenu.style.display = 'none';
        }
    });
    document.addEventListener('click', function(event) {
        if (phoneMenu.style.display === 'block') {
            phoneMenu.style.display = 'none';
        }
    });
    phoneMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
