let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
const button = document.querySelector("button");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background;
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

/* const makeRandColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomColor;
  return color;
}; */

/* function makeRandColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} */

const makeRandColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

function randomizeColors() {
  color1.value = makeRandColor();
  color2.value = makeRandColor();
  body.style.background = setGradient();
  css.textContent = body.style.background;
}

button.addEventListener("click", randomizeColors);
