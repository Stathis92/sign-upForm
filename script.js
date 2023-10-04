const submitButton = document.querySelector(".submitBtn");

submitButton.addEventListener("click", createAccount);

let errorCount = 0;

function createAccount() {
  errorCount = 0;
  console.clear();
  checkInputs();
  if (errorCount == 0) {
    submitInfo();
  }
}

function checkInputs() {
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const email = document.getElementById("user_email");
  const tel = document.getElementById("phone_number");
  const usrPswd = document.getElementById("user_password");
  const cnfrmPswd = document.getElementById("confirm_password");

  checkName(firstName, lastName);
  checkEmail(email);
  checkPhone(tel);
  if (checkPswd(usrPswd) == 1) {
    checkMatchingPswd(usrPswd, cnfrmPswd);
  }
}

function checkName(first, last) {
  //Validate first and last Name
  //regex found in https://www.geeksforgeeks.org/javascript-program-to-check-if-a-string-contains-only-alphabetic-characters/
  let regex = /^[a-zA-Z]+$/;
  if (first.value.match(regex)) {
    errorHandling(first, 0);
  } else {
    errorHandling(first, 1);
  }
  if (last.value.match(regex)) {
    errorHandling(last, 0);
  } else {
    errorHandling(last, 1);
  }
}

function checkEmail(mail) {
  //Validate email
  //regex found in https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
  let regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  if (mail.value.match(regex)) {
    errorHandling(mail, 0);
  } else {
    errorHandling(mail, 1);
  }
}

function checkPhone(phone) {
  //Validate phone number
  //regex found in https://www.abstractapi.com/guides/validate-phone-number-javascript
  let regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (phone.value.match(regex)) {
    errorHandling(phone, 0);
  } else {
    errorHandling(phone, 1);
  }
}

function checkPswd(first) {
  //Validate password 7-16 long / first char must be a letter
  //regex found in https://www.w3resource.com/javascript/form/password-validation.php
  let regex = /^[A-Za-z]\w{7,14}$/;
  if (first.value.match(regex)) {
    errorHandling(first, 0);
    return 1;
  } else {
    errorHandling(first, 1);
  }
  return 0;
}

function checkMatchingPswd(first, last) {
  if (first.value == last.value) {
    errorHandling(last, 0);
    return true;
  }
  errorHandling(last, 1);
  return false;
}

function errorHandling(element, flag) {
  if (flag == 1) {
    element.classList.add("error");
    errorCount++;
    showError(element);
  } else {
    element.classList.remove("error");
    if (errorCount > 0)
      errorCount--;
  }
}

function showError(element) {
  switch (element.id) {
    case "first_name":
      console.log("Error: First name must contain only alphabetical character!");
      break;

    case "last_name":
      console.log("Error: Last name must contain only alphabetical character!");
      break;

    case "user_email":
      console.log("Error: Wrong email format!");
      break;

    case "phone_number":
      console.log("Error: Wrong phone number format!");
      break;

    case "user_password":
      console.log("Error: Password must start with alphabetical character and be at least seven(7) characters long!");
      break;

    case "confirm_password":
      console.log("Error: Passwords do not match!");
      break;
  }
}

function submitInfo() {
  //SEND DATA TOS SERVER
  alert("Account created successfully.");
}
