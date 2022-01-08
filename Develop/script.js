// Assignment code here
// --------------------------------------------
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// Elements 
const generateBtn = document.querySelector("#generate");
const inputBtn = document.querySelector("#criteria");
const cancelBtn1 = document.querySelector("#cancel1")
const cancelBtn2 = document.querySelector("#cancel2")
const cancelBtn3 = document.querySelector("#cancel3")
const nextBtn1 = document.querySelector("#next1")
const nextBtn2 = document.querySelector("#next2")
const inputModal = document.getElementById("myModal")
const inputModal2 = document.getElementById("myModal2")
const inputModal3 = document.getElementById("myModal3")
const passwordModalTxt2 = document.getElementById("passwordtxt2")
const passwordModalTxt3 = document.getElementById("passwordtxt3")
const span = document.getElementsByClassName("close")[0];

// Input modal 

// Modal Click Events 
inputBtn.onclick = function() {
  inputModal.style.display = "block";
}
cancelBtn1.onclick = function() {
    inputModal.style.display = "none";
    inputModal2.style.display = "none";
    
}
cancelBtn2.onclick = function() {

  inputModal2.style.display = "none";

  passwordModalTxt2.value ='';
}
cancelBtn3.onclick = function () {
  inputModal3.style.display = "none";

  passwordModalTxt3.value ='';
}

span.onclick = function() {
    inputModal.style.display = "none";
}
nextBtn1.onclick = function() {
  inputModal.style.display = "none";
  inputModal2.style.display = "block";
}

nextBtn2.onclick = function() {
  inputModal2.style.display = "none";
  inputModal3.style.display = "block";
} 

window.onclick = function(event) {
    if (event.target == inputModal) {
      inputModal.style.display = "none";
    } else if (event.target == inputModal2) {
      inputModal2.style.display = "none";
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


