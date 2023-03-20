const inputEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("span#text");

inputEl.addEventListener("input", () => {
    spanEl.style.fontSize = inputEl.value + "px";
})