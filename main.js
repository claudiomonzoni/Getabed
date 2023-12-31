import "./estilos/style.scss";
import { slideHome } from "./public/splide";

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
    const submenu = document.querySelector("#sub-menu");
    const abierto = false;

    function abrirMenuFull() {
      this.abierto = !this.abierto;
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");
      ingresar.classList.toggle("mostrar");

      this.abierto
        ? mainNav.classList.toggle("menuFullAbierto")
        : mainNav.classList.toggle("desanimaMenu");
      submenu.classList.remove("mostrar-submenu");
    }

    menuIco.addEventListener("click", abrirMenuFull);
  } else {
    return;
  }
}

// revelar sub menu de productos
const productos = document.querySelector("#productos");
const submenu = document.querySelector("#sub-menu");
const cerrar = document.getElementById("cerrar");
const flecha = document.getElementById("flecha-productos");

productos.addEventListener("click", function (e) {
  e.preventDefault();
  submenu.classList.toggle("mostrar-submenu");
  flecha.classList.toggle("rotar-flecha");
});
cerrar.addEventListener("click", function (e) {
  e.preventDefault();
  submenu.classList.remove("mostrar-submenu");
  flecha.classList.toggle("rotar-flecha");
});


// Abrir el formulario en el banner de contacto

const btnform = document.getElementById("formulario");
const formulario = document.getElementById("form");
const cerrarForm = document.getElementById("cerrarForm");

btnform.addEventListener("click", function (e) {
  e.preventDefault();
  formulario.style.display = "block";
});
cerrarForm.addEventListener("click", function (e) {
  e.preventDefault();
  formulario.style.display = "none";
});

// Abrir el formulario en el banner de contacto
// hacer scroll conla rueda del raton en el riel de cartas
// const scrollContainer = document.querySelector("#riel");

// const scrollRueda = (e) => {
//   e.preventDefault(false);
//   scrollContainer.scrollLeft += e.deltaY;
// };

// scrollContainer.addEventListener("wheel", (e) => {
//   scrollRueda(e);
// });

// scrollContainer.onmousemove = (e) => {
//   const porcentaje = e.clientX / (window.innerWidth) *2;
//   scrollContainer.animate(
//     {
//       transform: `translateX(${porcentaje * scrollContainer.offsetWidth * -1}px)`
//     },
//     {
//       fill: "forwards",
//       duration: 6000,
//     }
//   );
// };

if (
  window.location.pathname.length == 1 ||
  window.location.pathname.length == 0 ||
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/index"
) {
  //solo js del home

  // abrir y cerrar video
  const abrirvideo = document.getElementById("vervideo");
  const cerrarvideo = document.getElementById("cerrarvideo");
  const video = document.getElementById("video");
  const videoHome = document.getElementById("videoHome");

  abrirvideo.addEventListener("click", (e) => {
    e.preventDefault()
    video.style.display = "flex";
    videoHome.play()
  });
  cerrarvideo.addEventListener("click", (e) => {
    e.preventDefault()
    video.style.display = "none";
    videoHome.pause()
  });
  
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      video.style.display = "none";
      videoHome.pause()
      submenu.classList.remove("mostrar-submenu");
      flecha.classList.toggle("rotar-flecha");
    }
}); 
  // tabs del home
  const historia = document.getElementById("historia");
  const atencion = document.getElementById("atencion");
  const enfoque = document.getElementById("enfoque");

  historia.addEventListener("click", function (e) {
    e.preventDefault();
    abrirTab(e, "tabhistoria");
  });
  atencion.addEventListener("click", function (e) {
    e.preventDefault();
    abrirTab(e, "tabatencion");
  });
  enfoque.addEventListener("click", function (e) {
    e.preventDefault();
    abrirTab(e, "tabenfoque");
  });

  function abrirTab(e, tab) {
    // Obtengo todos los elementos de clase contetab
    const contentab = document.getElementsByClassName("contetab");
    for (let i = 0; i < contentab.length; i++) {
      contentab[i].style.display = "none";
    }

    // Obtengo todos los elementos de clase tab
    const tablinks = document.getElementsByClassName("tab");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("tabactivo", "");
    }

    document.getElementById(tab).style.display = "block";
    e.currentTarget.querySelector(".tab").className += " tabactivo";
  }

  slideHome();
}
