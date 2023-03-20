function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let divEl = document.createElement("div");
    divEl.style.width = 10 * (i + 1) + "px";
    divEl.style.height = 10 * (i + 1) + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    divBoxEl.append(divEl);
  }
}

function destroyBoxes() {
  divBoxEl.remove();
}

const numberInputEl = document.querySelector("input");
const createButtonEl = document.querySelector("[data-create]");
const destroyButtonEl = document.querySelector("[data-destroy]");
const divBoxEl = document.querySelector("#boxes");

createButtonEl.addEventListener("click", () => {
  createBoxes(numberInputEl.value);
});

destroyButtonEl.addEventListener("click", () => {
  destroyBoxes();
});
