let boton = document.getElementById("menu-icon");
let enlaces = document.getElementById("nav_options");
let contador = 0;

boton.addEventListener("click", function(){
    if (contador == 0){
        enlaces.className = ('nav_options dos')
        contador=1;
    } else {
        enlaces.classList.remove('dos');
        enlaces.className = ('nav_options uno');
        contador=0;
    }
})