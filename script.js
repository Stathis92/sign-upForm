const submitButton = document.querySelector(".submitBtn");

submitButton.addEventListener("click", createAccount);

function createAccount() {
  checkInputs();
  submitInfo();
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
    console.log(checkMatchingPswd(usrPswd, cnfrmPswd)); //TEMP
  }
  //TODO ERROR HANDLING FUNCTION
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
    showError(element);
  } else {
    element.classList.remove("error");
  }
}

function showError(element) {
  switch (element.id) {
    case "first_name":
      console.log("ERROR IN FIRST NAME");
      break;

    case "last_name":
      console.log("ERROR IN LAST NAME");
      break;

    case "user_email":
      console.log("ERROR IN EMAIL");
      break;

    case "phone_number":
      console.log("ERROR IN PHONE");
      break;

    case "user_password":
      console.log("ERROR IN PASSWORD");
      break;

    case "confirm_password":
      console.log("ERROR IN CONFIRM PASSWORD");
      break;
  }
}

function submitInfo() {
  //SEND DATA TOS SERVER
}
