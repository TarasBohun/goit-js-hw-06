const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.addEventListener("input", changeFontSizeText);

inputRange.value = Number(inputRange.getAttribute("min"));

function changeFontSizeText(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
