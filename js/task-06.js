const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", inputBlur);


function inputBlur(event) {
    if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
      inputEl.classList.add("valid");
      inputEl.classList.remove("invalid");
    } else {
      inputEl.classList.add("invalid");
      inputEl.classList.remove("valid");
    }
  }

