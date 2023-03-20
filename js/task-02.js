const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

 const elements = ingredients.map((element) => {
  let list = document.createElement("li");
  list.textContent = element;
   list.classList.add("item");
   return list;
});

let listItems = document.querySelector("ul#ingredients")

listItems.append(...elements);

