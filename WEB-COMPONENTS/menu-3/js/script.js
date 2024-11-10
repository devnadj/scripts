const burger = document.querySelectorAll('.burger');
const burgerButton = document.querySelector('.burger-button');
const verticalNav = document.querySelector('.vertical-nav');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const color = document.querySelector('#color');
const menuWith = document.querySelector('#width');
const transition = document.querySelector('#transition');
const burgerChoice = document.querySelector('#burger-choice');
const horizontal = document.querySelector('#horizontal');
const vertical = document.querySelector('#vertical');

// conditions initiales
let open = false;  // le menu est fermé
let width = menuWith.value;    // largeur du menu en pixels 
let position = left; // position du menu
let direction = 'horizontal'; // direction du menu


left.addEventListener('click', () => {
    position = left;
    changeBis();
});

right.addEventListener('click', () => {
    position = right;
    changeBis();
});

horizontal.addEventListener('click', () => {
    direction = 'horizontal';
    changeBis();
});

vertical.addEventListener('click', () => {
    direction = 'vertical';
    changeBis();
});

color.addEventListener('input', () => {
    verticalNav.style.backgroundColor = color.value;
    changeBis();
});

menuWith.addEventListener('change', () => {
    width = menuWith.value;
    verticalNav.style.width = `${menuWith.value}px`;
    changeBis();
});

transition.addEventListener('change', () => {
    verticalNav.style.transition = `${transition.value}ms`;
});


burgerButton.addEventListener('click', () => {
    open = !open;
    changeBis();
});


burgerButton.style.position = 'fixed';
burgerButton.style.top = '370px';

verticalNav.style.position = 'fixed';
verticalNav.style.top = '405px';
verticalNav.style.bottom = '0';
verticalNav.style.backgroundColor = 'bisque';
verticalNav.style.width = `${width}px`;
verticalNav.style.transition = `${transition.value}ms`;

changeBis();





function changeBis() {
    verticalNav.style.bottom = '0';
    if(position === left) {
        burgerButton.style.left = '10px';
        burgerButton.style.right = 'auto';

        verticalNav.style.left = `0`;
        verticalNav.style.right = `auto`;
    } else if(position === right) {
        burgerButton.style.right = '10px';
        burgerButton.style.left = 'auto';

        verticalNav.style.right = `0`;
        verticalNav.style.left = `auto`;
    }

    if(open) {
        if(direction === 'horizontal') {
            verticalNav.style.width = width + 'px';
        }
        if(direction === 'vertical') {
            verticalNav.style.height = '100%';
        }
    } else {
        if(direction === 'horizontal') {
            verticalNav.style.width = '0px';
        } else if(direction === 'vertical') {
            verticalNav.style.height = '0%';
        }
    }
    verticalNav.style.backgroundColor = color.value;
}

/*
function change() {
    if (open)
        offset = 0;
    else
        offset = -width;

    if (direction === 'horizontal') {
        console.log('horizontal');

        // l'affichage du menu se fait horizontalement
        if (position === left) {
            burgerButton.style.left = '10px';
            burgerButton.style.right = 'auto';

            verticalNav.style.left = `${offset}px`;
            verticalNav.style.right = 'auto';
        } else if (position === right) {
            burgerButton.style.right = '10px';
            burgerButton.style.left = 'auto';

            verticalNav.style.right = `${offset}px`;
            verticalNav.style.left = 'auto';
        }
    } else if (direction === 'vertical') {
        // l'affichage du menu se fait verticalement
        if (position === left) {
            burgerButton.style.left = '10px';
            burgerButton.style.right = 'auto';

            verticalNav.style.left = '0';
            verticalNav.style.right = 'auto';
            verticalNav.style.width = `${width}px`;
        } else if (position === right) {
            burgerButton.style.right = '10px';
            burgerButton.style.left = 'auto';

            verticalNav.style.right = '0';
            verticalNav.style.left = 'auto';
            verticalNav.style.width = `${width}px`;
        }

        if (open) {
            verticalNav.style.height = '100%';
        } else {
            verticalNav.style.height = '0%';
        }
    }

    verticalNav.style.backgroundColor = color.value;
}*/

class BurgerMenu {

    constructor() {
        this.open = false;
        this.width = 200;
        this.position = 'left';
        this.direction = 'horizontal';
        this.color = 'bisque';
        this.transition = 300;
    }

}