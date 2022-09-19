const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // const {
  //   elements: { email, password },
  // } = event.currentTarget;

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Заповніть усі поля!!!");
  } else {
    const object = { email: email.value, password: password.value };
    console.log(object);
  }
}
