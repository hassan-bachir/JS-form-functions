//SUBMIT RULES

const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const bDateInput = document.querySelector('#b-date');
const passwordInput = document.querySelector('#password');

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (firstNameInput.value.trim() === '') {
        alert('Please enter your first name');
        return;
      }
      if (lastNameInput.value.trim() === '') {
        alert('Please enter your last name');
        return;
      }
      const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegExp.test(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
      }
     const arr =passwordInput.value.split('')
      if (arr.length <8 ) {
        alert('Please enter a valid password');
        return;
      }
      alert('Form submitted successfully');
    });        

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

