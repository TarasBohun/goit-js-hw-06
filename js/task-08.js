const form = document.querySelector(".login-form");
// console.log(form);

form.addEventListener("submit", handleSubmit);

const object = {};

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  // const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Заповніть усі поля!!!");
  }

  object.email = email.value;
  object.password = password.value;
  console.log(object);

  event.currentTarget.reset();
}
