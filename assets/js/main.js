document.addEventListener('DOMContentLoaded', function() {
    const handler = document.querySelector('.handler');
    const phoneMenu = document.querySelector('.phone_menu');

    handler.addEventListener('click', function() {
        if (phoneMenu.style.display === 'none' || phoneMenu.style.display === '') {
            phoneMenu.style.display = 'block';
        } else {
            phoneMenu.style.display = 'none';
        }
    });
});