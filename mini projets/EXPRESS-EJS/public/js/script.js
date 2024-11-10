// const burger = document.querySelector('.burger');

// burger.addEventListener('click', () => {
//     const header__mobile = document.querySelector('.header__mobile');
//     header__mobile.classList.toggle('header__mobile--active');
//     if(header__mobile.classList.contains('header__mobile--active')){
//         // burger.style.transform = 'rotate(90deg)';
//         burger.attributes['src'].value = 'img/close.svg';
//     }
//     else {

//         burger.attributes['src'].value = 'img/burger.svg';
//         // burger.style.transform = 'rotate(0deg)';
//     }

// });

const main = document.querySelector('main');
const openBtn = document.querySelector('#openBtn');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', () => {
    console.log('clicked');
    
    modal.classList.toggle('modal--active');
    // openBtn.classList.toggle('burger-icon--active');
});

main.addEventListener('click', () => {
    modal.classList.remove('modal--active');
});


console.log('script.js loaded');
