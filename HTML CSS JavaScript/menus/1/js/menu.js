const burger = document.getElementById('burger');
const modal = document.getElementById('nav-modal');
const documentBody = document.body;

console.log(modal);


burger.addEventListener('click', function() {
  console.log('clicked');
    modal.classList.toggle('show');
});

// document.querySelector('body').addEventListener('click', function() {
//     modal.classList.toggle('show');
// });