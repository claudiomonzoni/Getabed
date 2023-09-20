import './estilos/style.scss'


// logica boton de hamburguesa
//solo celular
var x = window.matchMedia("(max-width: 479px)");
esCell(x); // Call listener function at run time
x.addListener(esCell); // Attach listener function on state changes

function esCell(x) {
  if (x.matches) {
    // If media query matches
    const menuIco = document.querySelector(".menu-toggle");
    const ingresar = document.querySelector("nav .btn-claro");
    const mainNav = document.getElementById("menu");
    console.log(mainNav)
    const abierto = false;

    function abrirMenuFull() {
      this.abierto = !this.abierto;
      console.log(abierto);
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");
      ingresar.classList.toggle("mostrar");

      this.abierto
        ? mainNav.classList.toggle("menuFullAbierto")
        : mainNav.classList.toggle("desanimaMenu");
    }

    menuIco.addEventListener("click", abrirMenuFull);
  } else {
    return;
  }
}

// revelar sub menu de productos
const productos = document.querySelector('#productos');
const submenu = document.querySelector('#sub-menu');
const menu = document.getElementById("menu");

productos.addEventListener("click", function(e){
    e.preventDefault()
    submenu.classList.toggle('mostrar-submenu')
})
menu.addEventListener("click", function(e){
    e.preventDefault()
   console.log("first")
})
