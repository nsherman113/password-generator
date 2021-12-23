// Assignment code here
// --------------------------------------------
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// Elements 
const generateBtn = document.querySelector("#generate");
const inputBtn = document.querySelector("#criteria");
const cancelBtn1 = document.querySelector("#cancel1")
const nextBtn1 = document.querySelector("#next1")
const inputModal = document.getElementById("myModal")
const passwordModalTxt = document.getElementById("passwordtxt")
const span = document.getElementsByClassName("close")[0];

// Input modal 


inputBtn.onclick = function() {
  inputModal.style.display = "block";
}
cancelBtn1.onclick = function() {
    inputModal.style.display = "none";
    passwordModalTxt.value ='';
}

span.onclick = function() {
    inputModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == inputModal) {
      inputModal.style.display = "none";
    }
}
// inputCriteria();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


