import Glide, { Controls, Swipe, Breakpoints   } from "@glidejs/glide/dist/glide.modular.esm";

export function slideHome() {
  new Glide(".glide", {
    type: "carousel",
    animationDuration: 800,
    startAt: 0,
    perView: 2,
    //focusAt: 'center',
    autoplay: 6200,
    gap: 20,
    peek: {
      before: 20,
      after: -170,
    },
    breakpoints: {
      600: {
        perView: 1,
        peek: {
          before: 20,
          after: 70,
        },
      }
    }
 
  }).mount({ Controls, Swipe, Breakpoints  });
}
