const signupForm = document.getElementById("signupForm"); // select signup form

signupForm.addEventListener("submit", function (event) { // add submit event
  event.preventDefault(); // prevent form from submitting

  let isValid = true; // validation flag

  // name validation
  const nameField = document.getElementById("name"); // select name input
  const nameError = document.getElementById("nameError"); // select name error display
  const nameRegex = /^[a-zA-Z\s]{6,}$/; // pattern: letters and spaces min 6 chars

  if (nameField.value.trim() === "") { // check if name is empty
    isValid = false; // set flag false
    nameError.style.display = "block"; // show error
    nameError.innerHTML = "Name is required"; // set error message
  } else if (!nameRegex.test(nameField.value.trim())) { // check invalid format
    isValid = false; // set flag false
    nameError.style.display = "block"; // show error
    nameError.innerHTML = "Name may only contain letters and spaces."; // set error message
  } else {
    nameError.style.display = "none"; // hide error if valid
  }

  // email validation
  const emailField = document.getElementById("email"); // select email input
  const emailError = document.getElementById("emailError"); // select email error display
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/; // simple email pattern

  if (emailField.value.trim() === "") { // check if email is empty
    isValid = false; // set flag false
    emailError.style.display = "block"; // show error
    emailError.innerHTML = "Email is required"; // set error message
  } else if (!emailRegex.test(emailField.value.trim())) { // check invalid email
    isValid = false; // set flag false
    emailError.style.display = "block"; // show error
    emailError.innerHTML = "Please enter a valid email format"; // set error message
  } else {
    emailError.style.display = "none"; // hide error if valid
  }

  // password validation
  const passwordField = document.getElementById("password"); // select password input
  const passwordError = document.getElementById("passwordError"); // select password error display
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/; // strong password pattern

  if (passwordField.value.trim() === "") { // check if password is empty
    isValid = false; // set flag false
    passwordError.style.display = "block"; // show error
    passwordError.innerHTML = "Password is required"; // set error message
  } else if (!passwordRegex.test(passwordField.value.trim())) { // check invalid password
    isValid = false; // set flag false
    passwordError.style.display = "block"; // show error
    passwordError.innerHTML = "Password must include uppercase, lowercase, number, symbol and minimum 8 characters"; // set error message
  } else {
    passwordError.style.display = "none"; // hide error if valid
  }

  // final check
  if (isValid) { // if all fields valid
    alert("Student registered successfully"); // show success
    signupForm.reset(); // reset form
  }
});
