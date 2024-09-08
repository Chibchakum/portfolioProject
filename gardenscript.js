let items = document.querySelectorAll('.slider .item');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

nextBtn.onclick = () => {
    if (active < lastPosition) {
        active++;
        setSlider();
    }
}

prevBtn.onclick = () => {
    if (active > firstPosition) {
        active--;
        setSlider();
    }
}

const setSlider = () => {
    let oldActive = document.querySelector('.slider .item.active');
    if (oldActive) oldActive.classList.remove('active');
    if (items[active]) {
        items[active].classList.add('active');
    }

    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if (active == lastPosition) nextBtn.classList.add('d-none');
    if (active == firstPosition) prevBtn.classList.add('d-none');
}

const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}

setDiameter();
window.addEventListener('resize', setDiameter);

