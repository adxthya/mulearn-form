const formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordInput = document.querySelector(
    "div.input:nth-child(3) > input:nth-child(2)"
  ).value;
  const confirmPasswordInput = document.querySelector(
    "div.input:nth-child(4) > input:nth-child(2)"
  ).value;
  const usernameInput = document.querySelector(
    "div.input:nth-child(1) > input:nth-child(2)"
  ).value;
  const emailInput = document.querySelector(
    "div.input:nth-child(2) > input:nth-child(2)"
  ).value;
  const errorContainer = document.querySelector(".error-message");
  const errorMessage = document.querySelector(
    ".error-message > p:nth-child(1)"
  );
  let submitStatus = true;
  if (passwordInput.length < 8) {
    submitStatus = false;
    errorContainer.style.display = "block";
    errorMessage.textContent = "The password should be 8 characters or more.";
  } else if (passwordInput !== confirmPasswordInput) {
    submitStatus = false;
    errorContainer.style.display = "block";
    errorMessage.textContent = "The passwords aren't matching.";
  }
  if (submitStatus) {
    errorContainer.style.display = "block";
    errorMessage.textContent = "Form Submitted Successfully.";
    formElement.reset();
  }
});
