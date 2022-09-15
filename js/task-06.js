const input = document.querySelector("#validation-input");

input.addEventListener("blur", correctAmountOfSymbols);

const greenBorderColor = () => {
  input.classList.add("valid");
};

const redBorderColor = () => {
  input.classList.add("invalid");
};

function correctAmountOfSymbols(event) {
  console.log();
  event.currentTarget.value.length === Number(input.getAttribute("data-length"))
    ? greenBorderColor()
    : redBorderColor();
}
