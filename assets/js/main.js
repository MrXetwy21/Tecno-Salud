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

