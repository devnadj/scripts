const themeValue = localStorage.getItem('darkTheme')==='true';

if(themeValue)
    document.body.classList.add('theme-dark');
else {
    localStorage.setItem('darkTheme', 'false');
    document.body.classList.remove('theme-dark');
}

document.querySelector("#theme-switch").addEventListener('click', ()=>{
    document.body.classList.toggle('theme-dark');

    if(document.body.classList.contains('theme-dark'))
        localStorage.setItem('darkTheme', 'true');
    else
        localStorage.setItem('darkTheme', 'false');
});

const experienceSegment = document.querySelector('.experience');
const formationSegment = document.querySelector('.formation');
const diversSegment = document.querySelector('.divers');

document.querySelector('#experience-btn').addEventListener('click', (event)=> {
    event.preventDefault();

    experienceSegment.classList.remove('segment--hide');

    formationSegment.classList.add('segment--hide');
    diversSegment.classList.add('segment--hide');
});

document.querySelector('#formation-btn').addEventListener('click', (event)=> {
    event.preventDefault();

    formationSegment.classList.remove('segment--hide');

    experienceSegment.classList.add('segment--hide');
    diversSegment.classList.add('segment--hide');
});

document.querySelector('#divers-btn').addEventListener('click', (event)=> {
    event.preventDefault();

    diversSegment.classList.remove('segment--hide');

    experienceSegment.classList.add('segment--hide');
    formationSegment.classList.add('segment--hide');
});