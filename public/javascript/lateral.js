function iniciarMenuLateral() {
    const asideMenu = document.querySelector("#aside-container");
    const boton = document.getElementById('boton')
    const body = document.querySelector("#body");
    const navbar = document.querySelector("#navbar");

    if (boton) {
        boton.addEventListener("click", menuLateral);
    } else {
        console.log('esta todo mal')
    }

    function menuLateral() {
        if (body) {
            body.classList.toggle("body__move");
        }
        if (navbar) {
            navbar.classList.toggle("body__move");
        }
        if (asideMenu) {
            asideMenu.classList.toggle("menu__lateral");
        }
    }
};