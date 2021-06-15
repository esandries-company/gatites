
let closeButton = document.querySelector('.button-close');
let menuButton = document.querySelector('.button-menu');
let navOptions = document.querySelector('.nav_options');

closeButton.addEventListener('click', togglenavOptions);

menuButton.addEventListener('click', togglenavOptions);

function togglenavOptions(){
    navOptions.classList.toggle('nav_options--show');
    closeButton.classList.toggle('button-close-show')
}

