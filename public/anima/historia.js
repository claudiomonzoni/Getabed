console.log("first");
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
let tl = gsap.timeline({ repeat: 0 });
tl.delay(0.5);


tl.from(".hero-historia h1", {
  ease: "Power1.easeOut",
  delay: 0.2,
  y: 10,
  opacity: 0,
});
tl.from(".hero-historia p", {
  ease: "Power1.easeOut",
  y: 10,
  opacity: 0,
});
tl.from("#imagen-historia-hero", {
  ease: "Power1.easeOut",
  y:30,
  opacity: 0,
});


gsap.registerPlugin(ScrollTrigger);

const getcartas = document.querySelectorAll(".getcarta div")

getcartas.forEach(ele => {
    gsap.from(ele, {
      scrollTrigger: ele,
      delay: 0.4,
      stagger: {
          amount: 1,
      },
      x: 10,
      opacity: 0,
    });


})



const animo = document.querySelectorAll(".bandeja")

animo.forEach(ele => {
    gsap.from(ele, {
      scrollTrigger: ele,
      delay: 0.4,
      stagger: 0.3,
      y: 100,
      opacity: 0,
    });

})