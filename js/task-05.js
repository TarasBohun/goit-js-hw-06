const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", inputText);

function inputText(event) {
  nameOutput.textContent = event.currentTarget.value;

  if (event.currentTarget.value.length === 0) {
    nameOutput.textContent = "Anonymous";
  }
}
