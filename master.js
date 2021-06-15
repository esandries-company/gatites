
let closeButton = document.querySelector('.button-close');
let menuButton = document.querySelector('.button-menu');
let navOptions = document.querySelector('.nav_options');
let heroHeadline =document.querySelector('.heroHeadline');
let productCard =document.querySelector('.product_card');
let productCard2 =document.querySelector('.product_card-2');


closeButton.addEventListener('click', togglenavOptions);
closeButton.addEventListener('click', animationHero);

menuButton.addEventListener('click', togglenavOptions);

function togglenavOptions(){
    navOptions.classList.toggle('nav_options--show');
    closeButton.classList.toggle('button-close-show')
    heroHeadline.classList.remove('fadeIn');
    productCard.classList.remove('fadeInUp');
    productCard2.classList.remove('fadeInUp');
}
function animationHero(){
    heroHeadline.classList.toggle('fadeIn');
    productCard.classList.toggle('fadeInUp');
    productCard2.classList.toggle('fadeInUp');
}
