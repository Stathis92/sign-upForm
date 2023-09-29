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
    //TODO- CHECK NAMES IF THEY HAVE SPECIAL CHARACTERS AND NUMBERS
  console.log(first, last); //TEMP
}

function checkEmail(mail) {
    //TODO- CHECK MAIL FORMAT. MAKE SURE IT HAS @ and .
  console.log(mail); //TEMP
}

function checkPhone(phone) {
    //TODO- idk maybe at least 9 characters???
  console.log(phone); //TEMP
}

function checkPswd(first) {
    //TODO- CHECK FOR AT LEAST 6 CHARACTERS, MAYBE ADD MANDATORY NUMBER+SPECIAL CHARACTER
  console.log(first); //TEMP
  return 1;
}

function checkMatchingPswd(first, last) {
    if (first == last)
        return true;
    return false;
}

function submitInfo() {
    //SEND DATA TOS SERVER
}
