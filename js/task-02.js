const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const oldList = document.querySelector("#ingredients");

const result = ingredients.forEach((ingredient) => {
  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = ingredient;

  oldList.append(newEl);
});

// for (const ingredient of ingredients) {
//   const newEl = document.createElement("li");
//   newEl.classList.add("item");
//   newEl.textContent = ingredient;
//   oldList.append(newEl);
// }

// for (let i = 0; i < ingredients.length; i += 1) {
//   const newEl = document.createElement("li");
//   newEl.classList.add("item");
//   newEl.textContent = ingredients[i];
//   oldList.append(newEl);
// }
