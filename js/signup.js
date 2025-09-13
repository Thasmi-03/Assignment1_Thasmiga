const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // name checked
  const nameField = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const nameRegex = /^[a-zA-Z\s]{6,}$/;

  if (nameField.value.trim() === "") {
    isValid = false;
    nameError.style.display = "block";
    nameError.innerHTML = "Name is required";
  } else if (!nameRegex.test(nameField.value.trim())) {
    isValid = false;
    nameError.style.display = "block";
    nameError.innerHTML = "Name may only contain letters and spaces.";
  } else {
    nameError.style.display = "none";
  }

  // email checked
  const emailField = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  if (emailField.value.trim() === "") {
    isValid = false;
    emailError.style.display = "block";
    emailError.innerHTML = "Email is required";
  } else if (!emailRegex.test(emailField.value.trim())) {
    isValid = false;
    emailError.style.display = "block";
    emailError.innerHTML = "Please enter a valid email format";
  } else {
    emailError.style.display = "none";
  }

  // password checked
  const passwordField = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  if (passwordField.value.trim() === "") {
    isValid = false;
    passwordError.style.display = "block";
    passwordError.innerHTML = "Password is required";
  } else if (!passwordRegex.test(passwordField.value.trim())) {
    isValid = false;
    passwordError.style.display = "block";
    passwordError.innerHTML =
      "Password must include uppercase, lowercase, number, symbol and minimum 8 characters";
  } else {
    passwordError.style.display = "none";
  }

  //  check
  if (isValid) {
    alert("Student registered successfully");
    signupForm.reset();
  }
});
