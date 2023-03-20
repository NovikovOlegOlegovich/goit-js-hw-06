const listCategories = document.querySelector("#categories");

let numCategories = listCategories.children.length;

console.log(`Number of categories: ${numCategories}`);
console.log("");

let listItem = listCategories.querySelectorAll(".item");

listItem.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
  console.log("");
});
