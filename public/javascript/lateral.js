function iniciarMenuLateral() {
    const asideMenu = document.querySelector("#aside-container");
    const boton = document.getElementById('boton')
    const menu = document.querySelector(".menu-lateral");
    const navbar = document.querySelector(".nav-inferior-izq");

    boton.addEventListener("click", menuLateral);

    function menuLateral() {
        if (menu) {
            menu.classList.toggle("menu-move");
        }
        if (navbar) {
            navbar.classList.toggle("nav-move");
        }
        if (asideMenu) {
            asideMenu.classList.toggle("menu-move");
        }
       
    }
};