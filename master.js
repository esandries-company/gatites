
let closeButton = document.querySelector('.button-close');
let menuButton = document.querySelector('.button-menu');
let navOptions = document.querySelector('.nav_options');
let heroHeadline =document.querySelector('.heroHeadline');
let productCard =document.querySelector('.product_card');
let productCard2 =document.querySelector('.product_card-2');
let productImageBuy =document.querySelector('.section--procut__Image');
let productDescription =document.querySelector('.parrafo-description');

var select = document.getElementById('product-selected');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
    if(selectedOption.text == "Super Pack" ){
        console.log("arriba españa");
        productImageBuy.classList.add('super-pack');
        productImageBuy.classList.remove('starter-pack');
        productDescription.innerHTML = "Llevate 3 gatitos por el precio de 2. Con los 3 gatitos podras estar siempre con alguien. ";
    } else{
        console.log("abjao espña");
        productImageBuy.classList.add('starter-pack');
        productImageBuy.classList.remove('super-pack');
        productDescription.innerHTML = "Miles de productos en el mercado pero nada como una caja con un gatito";
    }
  });
  

closeButton.addEventListener('click', togglenavOptions);
closeButton.addEventListener('click', animationHero);

menuButton.addEventListener('click', togglenavOptions);

function togglenavOptions(){
    navOptions.classList.toggle('nav_options--show');
    closeButton.classList.toggle('button-close-show');
    heroHeadline.classList.remove('fadeIn');
    productCard.classList.remove('fadeInUp');
    productCard2.classList.remove('fadeInUp');
}
function animationHero(){
    heroHeadline.classList.toggle('fadeIn');
    productCard.classList.toggle('fadeInUp');
    productCard2.classList.toggle('fadeInUp');
}
