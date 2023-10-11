console.log("first");
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
let tl = gsap.timeline({ repeat: 0 });
tl.delay(0.5);


tl.from(".mini", {
  ease: "Power1.easeOut",
  delay: 0.2,
  y: 10,
  opacity: 0,
});
tl.from(".hero-precios h1", {
  ease: "Power1.easeOut",
  delay: 0.2,
  y: 10,
  opacity: 0,
});
tl.from(".hero-precios h2", {
  ease: "Power1.easeOut",
  y: 10,
  opacity: 0,
});
tl.from(".hero-precios p", {
  ease: "Power1.easeOut",
  y: 10,
  opacity: 0,
});
tl.from(".hero-precios img", {
  ease: "Power1.easeOut",
  y:30,
  opacity: 0,
});


gsap.registerPlugin(ScrollTrigger);

gsap.from("#cartasprecios .bandeja div", {
    scrollTrigger: "#cartasprecios .bandeja div",
    delay: .5,
    stagger: {
        amount: 1,
    },
    x: 10,
    opacity: 0,
  });

gsap.from(".carta-simple", {
    scrollTrigger: ".carta-simple",
    stagger: {
        amount: 1,
    },
    x: 10,
    opacity: 0,
  });


const animo = document.querySelectorAll(".bandeja")

animo.forEach(ele => {
    gsap.from(ele, {
      scrollTrigger: ele,
      delay: 1,
      stagger: 0.3,
      y: 100,
      opacity: 0,
    });

})