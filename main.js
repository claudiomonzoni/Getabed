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

// tabs del home

function openCity(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  contentab = document.getElementsByClassName("contetab");
  for (i = 0; i < contentab.length; i++) {
    contentab[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("tabactivo", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}
