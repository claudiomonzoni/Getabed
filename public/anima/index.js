import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
let tl = gsap.timeline({ repeat: 0 });
tl.delay(0.5);

tl.from("nav", {
  y: 10,
  ease: "Power1.easeOut",
  opacity: 0,
  duration: 0.7,
});
tl.from(".hero-home h1", {
  ease: "Power1.easeOut",
  delay: 0.2,
  y: 10,
  opacity: 0,
});
tl.from(".hero-home p", {
  ease: "Power1.easeOut",
  y: 10,
  opacity: 0,
});
tl.to("#vervideo", {
  ease: "Power1.easeOut",
  opacity: 100,
});
tl.from("#laptop-home img", {
  y: 10,
  opacity: 0,
  ease: "Power1.easeOut",
  stagger: {
    amount: 0.3,
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#logossocios li", {
  scrollTrigger: "#logossocios li",
  stagger: {
    amount: 1,
  },
  y: 100,
  opacity: 0,
});
gsap.from("#contexto  .bandeja > .izq, .der", {
  scrollTrigger: "#contexto  .bandeja > .izq, .der ",
  delay: 0.6,
  stagger: 0.3,
  y: 100,
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