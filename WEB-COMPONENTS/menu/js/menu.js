const left = document.querySelector('#position-left');
const right = document.querySelector('#position-right');
const burger = document.querySelector('#burger');
const verticalMenu = document.querySelector('.vertical-menu');

const config = {
    position: 'left',
    width: '80px',
}



left.checked = true;
let state = false   // false = ferme, true = ouvert;
verticalMenu.style.width = config.width;
verticalMenu.style.textAlign = 'center';
verticalMenu.style.display = 'none';

left.addEventListener('click', () => { 
    config.position = 'left';
    setBurgerLeft();

    verticalMenu.style.position = 'fixed';
    verticalMenu.style.left = '0px';
    verticalMenu.style.right = 'initial';

    console.log('left', verticalMenu.style.left);
    console.log('right', verticalMenu.style.right);
});

right.addEventListener('click', () => {
    config.position = 'right';
    setBurgerRight();

    verticalMenu.style.position = 'fixed';
    verticalMenu.style.right = '0px';
    verticalMenu.style.left = 'initial';

    console.log('left', verticalMenu.style.left);
    console.log('right', verticalMenu.style.right);
    
});

/* on positionne le burger à gauche */
function setBurgerLeft() {
    config.position = 'left';
    burger.classList.remove('burger--right');
    burger.classList.add('burger--left');
}

/* on positionne le burger à droite */
function setBurgerRight() {
    config.position = 'right';
    burger.classList.remove('burger--left');
    burger.classList.add('burger--right');
}

burger.addEventListener('click', () => {
    state = !state;
    if(!state) {
        verticalMenu.style.display = 'none';
    } else {
        verticalMenu.style.display = 'block';
    }
});