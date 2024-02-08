const emailForm = document.getElementById("loginForm");
const formContainer = document.getElementById("formContainer");
const successMessage = document.getElementById("successMessage");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("emailError");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isValidEmail(emailInput.value)) {
    // Show the email error message
    errorMessage.style.display = "block";
    emailInput.style.backgroundColor = "#ffe8e6";
    emailInput.style.border = "1px solid red";

    return;
  }

  // Hide the email error message if the email is valid
  errorMessage.style.display = "none";

  if (emailInput.value == "") {
    alert("Please type in an email");
  } else {
    // Hide the form
    formContainer.style.display = "none";

    // Show the success message
    successMessage.style.display = "block";

    const enteredEmail = emailInput.value;
    const emailPlaceholder = document.getElementById("enteredEmail");

    emailPlaceholder.innerHTML = `<strong>${enteredEmail}</strong>`;
  }
});
emailInput.addEventListener("input", () => {
  // Hide the email error message
  errorMessage.style.display = "none";
  // Reset the background color and border of the input field
  emailInput.style.backgroundColor = "";
  emailInput.style.border = "";
});

const dismissButton = document.getElementById("dismissButton");
dismissButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

function isValidEmail(email) {
  // Use a simple regex for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
