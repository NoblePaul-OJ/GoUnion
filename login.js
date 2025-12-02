const connectBtn = document.getElementById("connectBtn");
const regInput = document.getElementById("regNumber");
const errorText = document.getElementById("error");

connectBtn.addEventListener("click", () => {
  const regNumber = regInput.value.trim();

  // simple validation: at least 5 characters
  if (regNumber.length >= 5) {
    // store in sessionStorage
    sessionStorage.setItem("userReg", regNumber);
    // redirect to dashboard
    window.location.href = "home.html";
  } else {
    errorText.style.display = "block";
  }
});

// Optional: hide error when typing
regInput.addEventListener("input", () => {
  errorText.style.display = "none";
});
