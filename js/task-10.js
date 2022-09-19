function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

btnCreate.addEventListener("click", () => createBoxes(input.value));
btnDestroy.addEventListener("click", deleteBoxes);

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = i * 10 + 30 + "px";
    divEl.style.height = i * 10 + 30 + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.classList.add("colection");
    boxes.append(divEl);
  }
}

function deleteBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }

  input.value = "";
}
