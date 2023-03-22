function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  spanEl.textContent = getRandomHexColor();
  body.style.backgroundColor = spanEl.textContent;
});

console.log(body.style.backgroundColor);
