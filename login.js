document.getElementById("signin-btn").addEventListener("click", (event) => {
  event.preventDefault();

  const userName = document.getElementById("userName-input");
  const userPassword = document.getElementById("password-input");

  const userValue = userName.value.trim();
  const passwordValue = userPassword.value.trim();

  if (userValue !== "admin") {
    alert("Invalid userName! please try again");
    return;
  }

  // check password
  if (passwordValue !== "admin123") {
    alert("Invalid password! please try again");
    return;
  }

  window.location.href = "home.html";
});
