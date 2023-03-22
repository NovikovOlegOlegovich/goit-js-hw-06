let counterValue = 0;

const counter = document.querySelector("#value");

const decrementEl = document.querySelector('[data-action="decrement"]');

const incrementEl = document.querySelector('[data-action="increment"]');

const decremen = () => {
  counter.textContent = --counterValue;
};

const increment = () => {
  counter.textContent = ++counterValue;
};

decrementEl.addEventListener("click", decremen);

incrementEl.addEventListener("click", increment);
