const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length <= inputEl.getAttribute("data-length")) {
    inputEl.classList.add("valid");
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
  } else {
    inputEl.classList.add("invalid");
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
  }
});
