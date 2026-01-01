const loginForm = document.getElementById("loginForm"); // select login form

loginForm.addEventListener("submit", function (event) { // add submit event
  event.preventDefault(); // prevent form default submission

  let isValid = true; // set validation flag

  // email validation
  const emailField = document.getElementById("email"); // select email input
  const emailError = document.getElementById("emailError"); // select email error display
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/; // email pattern

  if (emailField.value.trim() === "") { // check if email is empty
    isValid = false; // set flag false
    emailError.style.display = "block"; // show error
    emailError.innerHTML = "Email is required"; // set error message
  } else if (!emailRegex.test(emailField.value.trim())) { // check invalid format
    isValid = false; // set flag false
    emailError.style.display = "block"; // show error
    emailError.innerHTML = "Invalid email format. Please use name@example.com"; // set error message
  } else {
    emailError.style.display = "none"; // hide error if valid
  }

  // password validation
  const passwordField = document.getElementById("password"); // select password input
  const passwordError = document.getElementById("passwordError"); // select password error display
  const passwordRegex = /^.{8,}$/; // password pattern min 8 chars

  if (passwordField.value.trim() === "") { // check if password is empty
    isValid = false; // set flag false
    passwordError.style.display = "block"; // show error
    passwordError.innerHTML = "Password is required"; // set error message
  } else if (!passwordRegex.test(passwordField.value.trim())) { // check length
    isValid = false; // set flag false
    passwordError.style.display = "block"; // show error
    passwordError.innerHTML = "Password must be at least 8 characters long"; // set error message
  } else {
    passwordError.style.display = "none"; // hide error if valid
  }

  // final check
  if (isValid) { // if all valid
    alert("student register successfully"); // show success message
    loginForm.reset(); // reset form fields
  }
});
