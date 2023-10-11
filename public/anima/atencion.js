console.log("first");
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
let tl = gsap.timeline({ repeat: 0 });
tl.delay(0.5);


tl.from(".hero-atencion h1", {
  ease: "Power1.easeOut",
  delay: 0.2,
  y: 10,
  opacity: 0,
});
tl.from(".hero-atencion h2", {
  ease: "Power1.easeOut",
  y: 10,
  opacity: 0,
});
tl.from(".banner-hero", {
  ease: "Power1.easeOut",
  opacity: 0,
});


gsap.registerPlugin(ScrollTrigger);

const getcartas = document.querySelectorAll(".getcarta div")

getcartas.forEach(ele => {
    gsap.from(ele, {
      scrollTrigger: ele,
      delay: 1,
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
      delay: 1,
      stagger: 0.3,
      y: 100,
      opacity: 0,
    });

})