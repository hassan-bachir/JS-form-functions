//json file things
const submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const dateOfBirth = document.getElementById("b-date").value;
  const password = document.getElementById("password").value;

  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    dateOfBirth: dateOfBirth,
    password: password,
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "data.json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(userData));
});

