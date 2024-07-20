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

/* FUNCION PARA EL SLIDER */

const btnPrev = document.querySelector('.btn_izquierda');
const btnNext = document.querySelector('.btn_derecha');
const slider = document.querySelector('#slider');
const sliderSection = document.querySelectorAll('.slider_section');

btnNext.addEventListener('click', e => IrDerecha())
btnPrev.addEventListener('click', e => IrIzquierda())

let calculo = 0;
widthimagen = 100 / sliderSection.length;

counter = 0;

function IrDerecha(){
    if(counter >= sliderSection.length - 1){
        counter = 0;
        calculo = 0;
        slider.style.transform = `translate(-${calculo}%)`;
        slider.style.transition = 'none';
    }
    else{
        counter++;
        calculo = calculo + widthimagen;
        slider.style.transform = `translate(-${calculo}%)`;
        slider.style.transition = 'all ease .7s';
    }
}
   
function IrIzquierda(){
    counter--;
    if (counter < 0){
        counter = sliderSection.length - 1;
        calculo = widthimagen * (sliderSection.length - 1);
        slider.style.transform = `translate(-${calculo}%)`;
        slider.style.transition = 'none';
    }
    else{
        calculo = calculo - widthimagen;
        slider.style.transform = `translate(-${calculo}%)`;
        slider.style.transition = 'all ease .7s';
    }
}