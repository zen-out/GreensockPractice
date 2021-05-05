/**********************************************
 * Greensock Basic Trigger
 * ==================================
 ***********************************************/
console.log("hello");
// Function that will manipulate the direction of the image, given element and direction
function animateFrom(element, direction) {
  console.log("Animate From", element);
  console.log("Direction: ", direction);
  direction = direction || 1;
  let x = 0;
  let y = direction * 100;
  if (element.classList.contains("slide_from_left")) {
    x = -100;
    y = 0;
  } else if (
    element.classList.contains("slide_from_right")
  ) {
    x = 100;
    y = 0;
  }
  element.style.opacity = "0";
  element.style.transform =
    "translate(" + x + "px, " + y + "px)";
  gsap.fromTo(
    element,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(element) {
  gsap.set(element, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("hello");
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".slide").forEach(function (element) {
    hide(element);
    ScrollTrigger.create({
      trigger: element,
      onEnter: function () {
        animateFrom(element);
      },
      onEnterBack: function () {
        animateFrom(element, -1);
      },
      onLeave: function () {
        hide(element);
      },
    });
  });
});
