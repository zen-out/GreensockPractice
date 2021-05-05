let fromVariables = {
  backgroundColor: "blue",
  x: 100,
  duration: 2,
  ease: "power2.inOut",
};

let toVariables = {
  backgroundColor: "red",
  x: 200,
  duration: 2,
  ease: "power2.inOut",
};

gsap.fromTo( ".text", fromVariables, toVariables );


let timeline = gsap.timeline({
  repeat: 2,
});
j;
