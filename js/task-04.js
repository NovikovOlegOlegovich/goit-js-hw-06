let counterValue = 0;

const counter = document.querySelector("#value");

const decrementEl = document.querySelector('[data-action="decrement"]');

const incrementEl = document.querySelector('[data-action="increment"]');

const decremen = () => {
  counter = --counter.textContent;
};

const increment = () => {
  counter = ++counter.textContent;
};

decrementEl.addEventListener("click", decremen);

incrementEl.addEventListener("click", increment);
