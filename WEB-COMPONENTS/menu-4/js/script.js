const left = document.querySelector('#left');
const right = document.querySelector('#right');
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const vertical = document.querySelector('.vertical-nav');
const width = document.querySelector('#width');
const horizontal_dir = document.querySelector('#horizontal');
const vertical_dir = document.querySelector('#vertical');
const color = document.querySelector('#color');
const type = document.querySelector('#type');

let version = 'v' + type.value;

if(horizontal_dir.checked)
    direction = 'horizontal';
else
    direction = 'vertical';

(function init(){
    vertical.style.width = `${width.value}px`;
    if(direction === 'vertical') {
        vertical.style.height = '100%';
    }
    vertical.style.height = `${window.innerHeight}px`;
})();

left.addEventListener('click', () => {
    nav.classList.add('nav--left');
    nav.classList.remove('nav--right');

    vertical.classList.add('left');
    vertical.classList.remove('right');
});

right.addEventListener('click', () => {
    nav.classList.add('nav--right');
    nav.classList.remove('nav--left');

    vertical.classList.add('right');
    vertical.classList.remove('left');
});

burger.addEventListener('click', () => {
    vertical.classList.toggle('vertical-nav--active');
    burger.classList.toggle(version);
});

width.addEventListener('input', () => {
    vertical.style.width = `${width.value}px`;
});

color.addEventListener('input', () => {
    vertical.style.backgroundColor = color.value;
});

type.addEventListener('input', () => {
    console.log(type.value);
    burger.classList.remove(version);
    vertical.classList.remove('vertical-nav--active');
    version = 'v' + type.value;
});

horizontal_dir.addEventListener('click', () => direction = 'horizontal');

vertical_dir.addEventListener('click', () => direction = 'vertical');

class Menu {
    #open;      // true or false
    #width;
    #color;
    #direction; // horizontal or vertical
    #position;  // left or right



    constructor(){
        this.#open = false;
    }

    open(){
        this.#open = true;
    }
    
    close(){
        this.#open = false;
    }
}

