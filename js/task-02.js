const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const result = ingredients.map((ingredient) => {
  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = ingredient;

  return newEl;
});

// console.log(result);
list.append(...result);

// for (const ingredient of ingredients) {
//   const newEl = document.createElement("li");
//   newEl.classList.add("item");
//   newEl.textContent = ingredient;
//   list.append(newEl);
// }

// for (let i = 0; i < ingredients.length; i += 1) {
//   const newEl = document.createElement("li");
//   newEl.classList.add("item");
//   newEl.textContent = ingredients[i];
//   list.append(newEl);
//   console.log(newEl);
// }
