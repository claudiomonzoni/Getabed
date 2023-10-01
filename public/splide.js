import Splide from "@splidejs/splide";
// css del carrusel del home
import "@splidejs/splide/css/core";

export function slideHome() {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
      type: "loop",
      speed: 1000,
      autoplay: true,
      interval: 6000,
      pagination: false,
      wheel: true,
      perPage: "2",
      perMove: 1,
      gap: "1rem",
      padding: { left: "4rem", right: "0rem" },
      breakpoints: {
        640: {
          perPage: 1,
          padding: { left: "1rem", right: "4rem" },
        },
      },
      classes: {
        arrows: "splide__arrows your-class-arrows",
        arrow: "splide__arrow your-class-arrow",
        prev: "splide__arrow--prev btn-sinicono",
        next: "splide__arrow--next btn-sinicono",
      },
    });
    splide.mount();
  });
}
