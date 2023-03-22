const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені ");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
      console.log(user);
      formEl.reset();
  }
});


