import { gsap } from "gsap";

const animations = () => {
  // gsap.set
  gsap.set(".box1", {
    duration: 1,
    x: 550,
    delay: 2,
  });

  //   gsap.to
  gsap.to(".box2", {
    duration: 1,
    x: 550,
    delay: 2,
  });

  // gsap.from
  gsap.from(".container", {
    duration: 1,
    opacity: 0,
    y: 200,
    stagger: 1,
  });

  //gsap.fromTo
  gsap.fromTo(
    ".circle",
    {
      y: 100,
      opacity: 0,
    },
    {
      duration: 1,
      y: 50,
      opacity: 1,
      stagger: 1,
      delay: 1.5,
    }
  );

  //gsap.timeline()
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  tl.fromTo(".green", { y: 50 }, { y: 0 });
  tl.fromTo(".purple", { y: 25 }, { y: 25 });
  tl.fromTo(".orange", { y: 0 }, { y: 50 });
};

export default animations;
