

//menú lateral
const boton = document.querySelector("#boton");
const asideMenu = document.querySelector("#menu");
const body = document.querySelector("#body");
const navbar= document.querySelector("#navbar");

boton.addEventListener("click", menuLateral);

function menuLateral() {
    body.classList.toggle("body__move");
    navbar.classList.toggle("body__move");
    asideMenu.classList.toggle("menu__lateral");
        
}