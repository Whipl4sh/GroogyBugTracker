

//menú lateral
<<<<<<< HEAD
=======
const asideMenu = document.querySelector("#aside-container");
>>>>>>> 91faa5e55b88c38d9fe0a2be6e0f69ec8efdef76
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