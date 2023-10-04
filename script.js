const submitButton = document.querySelector(".submitBtn");

submitButton.addEventListener("click", createAccount);

function createAccount() {
  checkInputs();
  submitInfo();
}

function checkInputs() {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const email = document.getElementById("user_email").value;
  const tel = document.getElementById("phone_number").value;
  const usrPswd = document.getElementById("user_password").value;
  const cnfrmPswd = document.getElementById("confirm_password").value;

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
  if(first.match(regex)){
    console.log("Valid");
  }
  else{
    console.log("Invalid");
  }
  if(last.match(regex)){
    console.log("Valid");
  }
  else{
    console.log("Invalid");
  }
}

function checkEmail(mail) {
  //Validate email
  //regex found in https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
  let regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  
  if(mail.match(regex)){
    console.log("Valid");
  }
  else{
    console.log("Invalid");
  }
}

function checkPhone(phone) {
  //Validate phone number
  //regex found in https://www.abstractapi.com/guides/validate-phone-number-javascript
  let regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if(phone.match(regex)){
    console.log("Valid");
  }
  else{
    console.log("Invalid");
  }
}

function checkPswd(first) {
  //Validate password 7-16 long / first char must be a letter
  //regex found in https://www.w3resource.com/javascript/form/password-validation.php
  let regex = /^[A-Za-z]\w{7,14}$/;
  if(first.match(regex)){
    console.log("Valid");
    return 1;
  }
  else{
    console.log("Invalid");
  }
  return 0;
}

function checkMatchingPswd(first, last) {
  if (first == last) return true;
  return false;
}

function submitInfo() {
  //SEND DATA TOS SERVER
}
