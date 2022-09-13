let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
