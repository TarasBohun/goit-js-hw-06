const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);
console.log("");

const categories = document.querySelectorAll(".item");

const result = categories.forEach((category) => {
  const titleOfCategory = category.firstElementChild.textContent;
  const totalEl = category.querySelectorAll("li").length;

  console.log(`Category: ${titleOfCategory}`);
  console.log(`Elements: ${totalEl}`);
  console.log("");
});

// -------------------- for ---------------------
// for (let i = 0; i < categories.length; i += 1) {
//   const titleOfCategory = categories[i].firstElementChild.textContent;
//   const totalEl = categories[i].querySelectorAll("li").length;

//   console.log(`Category: ${titleOfCategory}`);
//   console.log(`Elements: ${totalEl}`);
//   console.log("");
// }
