// Importation de la configuration
import config from './config.js';

// Initialisation du menu avec les paramètres de configuration
const verticalMenu = document.getElementById('vertical-menu');
const burgerIcon = document.getElementById('burger-icon');

let isMenuVisible = false;

// Configuration du menu initiale
function initializeMenu() {
    if (config.position === 'right') {
        verticalMenu.style.right = '0';
        verticalMenu.style.left = 'auto';
    } else {
        verticalMenu.style.left = '0';
        verticalMenu.style.right = 'auto';
    }
    
    setDisplayMode(config.defaultMode);
}

// Gestion du clic sur l'icône burger
burgerIcon.addEventListener('click', () => {
    isMenuVisible = !isMenuVisible;
    toggleMenu(isMenuVisible);
});

// Fonction pour afficher ou cacher le menu
function toggleMenu(show) {
    if (show) {
        verticalMenu.classList.add('show');
    } else {
        verticalMenu.classList.remove('show');
    }
}

// Gestion des boutons de mode
document.getElementById('large-mode').addEventListener('click', () => setDisplayMode('large'));
document.getElementById('intermediate-mode').addEventListener('click', () => setDisplayMode('intermediate'));
document.getElementById('reduced-mode').addEventListener('click', () => setDisplayMode('reduced'));

function setDisplayMode(mode) {
    document.body.classList.remove('large', 'intermediate', 'reduced');
    document.body.classList.add(mode);

    if (mode === 'reduced') {
        burgerIcon.style.display = 'block';
    } else {
        burgerIcon.style.display = 'none';
        verticalMenu.classList.remove('show');
    }
}

// Initialisation du menu au chargement
initializeMenu();
