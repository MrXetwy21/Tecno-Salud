
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
