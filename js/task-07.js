const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.addEventListener("change", changeFontSizeText);

inputRange.value = 16;

function changeFontSizeText(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
