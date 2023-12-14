let offset = 0;
const sliderLine = document.querySelector('.slider-line');
function dalee() {
    offset += 1280;
    if (offset > 2560) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}

setInterval(dalee, 1500);