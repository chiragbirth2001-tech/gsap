var tl = gsap.timeline();

tl.from(".headers", {
  y: -120,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.3,
});
tl.from(".links a", {
  y: -120,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
});
tl.from("nav .btn button", {
  y: -120,
  duration: 1,
  opacity: 0,
  stagger: 0.4,
});

let cursor = document.querySelector("#cursor");
let main = document.querySelector("main");
let right = document.querySelector(".right");
main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.6,
    ease: "back.out",
  });
});

right.addEventListener("mouseenter", () => {
  cursor.innerHTML = "view More";
  gsap.to(cursor, {
    scale: 4,
  });
});
right.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
function breakText() {
  let h1 = document.querySelector(".h1");
  let text = h1.textContent;
  var cluter = "";
  let splitedText = text.split("");
  var halfValue = splitedText.length / 2;

  splitedText.forEach((elem, id) => {
    if (elem === " ") {
      cluter += `<span>&nbsp;&nbsp;</span>`;
    }
    if (id < halfValue) {
      cluter += `<span class = "first">${elem}</span>`;
    } else {
      cluter += `<span class = "second">${elem}</span>`;
    }
  });

  h1.innerHTML = cluter;
}
breakText();

gsap.from(".first", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  opacity: 0,
  ease: "power3.out",
});

gsap.from(".second", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: -0.15,
  opacity: 0,
  ease: "power3.out",
});


