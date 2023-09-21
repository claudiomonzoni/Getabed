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
    const submenu = document.querySelector('#sub-menu');
    console.log(mainNav)
    const abierto = false;

    function abrirMenuFull() {
      this.abierto = !this.abierto;
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");
      ingresar.classList.toggle("mostrar");

      this.abierto
        ? mainNav.classList.toggle("menuFullAbierto")
        : mainNav.classList.toggle("desanimaMenu"); submenu.classList.remove('mostrar-submenu');
    }

    menuIco.addEventListener("click", abrirMenuFull);
  } else {
    return;
  }
}

// revelar sub menu de productos
const productos = document.querySelector('#productos');
const submenu = document.querySelector('#sub-menu');
const cerrar = document.getElementById("cerrar");
const flecha = document.getElementById("flecha-productos");


productos.addEventListener("click", function(e){
    e.preventDefault()
    submenu.classList.toggle('mostrar-submenu')
    flecha.classList.toggle('rotar-flecha')
  })
  cerrar.addEventListener("click", function(e){
    e.preventDefault()
    submenu.classList.remove('mostrar-submenu')
    flecha.classList.toggle('rotar-flecha')

})

