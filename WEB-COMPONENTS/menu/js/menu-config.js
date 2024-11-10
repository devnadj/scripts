import defaultconfig from '../data/data-menu.js';

// on charge la config par défaut
const config = {
    "width": defaultconfig.width,
    "position": defaultconfig.position,
    "time-animation": defaultconfig.time,
    "text-color": defaultconfig['text-color'],
    "background-color": defaultconfig['background-color']
};

const form = document.querySelector('.menu-config-form');
const menuWidthInput = form.querySelector('#menu-width');
const menuPositionSelect = form.querySelector('#menu-position');
const menuAnimationTimeInput = form.querySelector('#menu-animation-time');
const textColorInput = form.querySelector('#text-color');
const backgroundColorInput = form.querySelector('#background-color');

menuWidthInput.addEventListener('input', () => {
    // Update the variable when the input value changes
    config.width = menuWidthInput.value;
    updateMenu();
});

menuPositionSelect.addEventListener('change', () => {
    // Update the variable when the select value changes
    config.position = menuPositionSelect.value;
    console.log(config.position);
    updateMenu();
});

menuAnimationTimeInput.addEventListener('input', () => {
    // Update the variable when the input value changes
    config['time-animation'] = menuAnimationTimeInput.value;
    updateMenu();
});

backgroundColorInput.addEventListener('input', () => {
    // Update the variable when the input value changes
    config['background-color'] = backgroundColorInput.value;
    updateMenu();
});

textColorInput.addEventListener('input', () => {
    // Update the variable when the input value changes
    config['text-color'] = textColorInput.value;
    updateMenu();
});

// on récupère le menu
// const horizontalMenu = document.querySelector('.horizontal-menu');
const verticalMenu = document.querySelector('.vertical-menu');


// on s'occupe du burger menu
const menu = document.querySelector('.burger');
menu.addEventListener('click', () => {
    console.log('click');
    
    //verticalMenu.classList.toggle('hide');
    if(config.position === 'left') {
        verticalMenu.classList.remove('right');
        verticalMenu.classList.add('left');
    } else if(config.position === 'right') {
        verticalMenu.classList.add('right');
        verticalMenu.classList.remove('left');
    }
});


// fonction pour appliquer le menu par défaut
function defaulMenu() { // on modifie le menu en fonction de la config
    
    // valeurs indépendantes de la config
    verticalMenu.style.width = `${config.width}px`;

    if(config.position === 'left') {
        verticalMenu.style.left = "0px";
        verticalMenu.style.right = "";
    }
    else if(config.position === 'right') {
        verticalMenu.style.right = "0px";
        verticalMenu.style.left = "";
    }
    
    verticalMenu.style.width = `${config.width}px`,
    verticalMenu.style.backgroundColor = config['background-color'];
}

// on modifie le menu en fonction de la config
function updateMenu() {
    console.log('updateMenu');
    
    verticalMenu.style.width = `${config.width}px`;
    verticalMenu.style.backgroundColor = config['background-color'];
    verticalMenu.style.color = config['text-color'];
    
    if(config.position === 'left') {
        verticalMenu.classList.add('left');
        verticalMenu.classList.remove('right');


        // verticalMenu.classList.remove('right');
        // verticalMenu.classList.add('left');

        verticalMenu.style.right = `-${config['width']}px`;
        verticalMenu.style.zIndex = "1";
        verticalMenu.style.transition = `left ${1000}ms ease`;

    } else if(config.position === 'right') {
        verticalMenu.classList.remove('left');
        verticalMenu.classList.add('right');


        verticalMenu.style.left = `-${config['width']}px`;
        verticalMenu.style.zIndex = "1";
        verticalMenu.style.transition = `right ${1000}ms ease`;
    }
}

defaulMenu();