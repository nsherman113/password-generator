// Main elements 
const generateBtn = document.querySelector("#finish");
const display = document.getElementById('password');
const inputBtn = document.querySelector("#criteria");
const clearBtn = document.querySelector("#criteria2");
const cancelBtn1 = document.querySelector("#cancel1");
const cancelBtn2 = document.querySelector("#cancel2");
const cancelBtn3 = document.querySelector("#cancel3");
const nextBtn1 = document.querySelector("#next1");
const nextBtn2 = document.querySelector("#next2");
const nextBtn3 = document.querySelector("#next3");
const errorCancelBtn = document.querySelector("#error1Btn");
const error2CancelBtn = document.querySelector("#error2Btn");
const copyBtn = document.querySelector("#copy");
const inputModal = document.querySelector("#myModal");
const selectModal = document.querySelector("#selectModal");
const selectInput = document.querySelector("#selectInput");
const selectChoice1 = document.getElementById("upper");
const selectChoice2 = document.querySelector("#lower");
const selectChoice3 = document.querySelector("#number");
const selectChoice4 = document.querySelector("#specialChar"); // Checkbox for special characters
const inputModal2 = document.querySelector("#myModal2");
const inputModal3 = document.querySelector("#myModal3");
const errorModal1 = document.querySelector("#error1");
const errorModal2 = document.querySelector("#error2");
const passwordModalTxt2 = document.getElementById("passwordtxt2");
const passwordModalTxt3 = document.getElementById("passwordtxt3");

// Span elements 
const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];
const span3 = document.getElementsByClassName("close")[2];
const span4 = document.getElementsByClassName("close")[3];
const span5 = document.getElementsByClassName("close")[4];

// Character Option Arrays
const allCapLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const allLowLetters = 'abcdefghijklmnopqrstuvwxyz';
const allNumbers = '0123456789';
const allSpecialCharacters = '!@#$%^&*()_+={[}]:;<,>.?/';

// Variable to store checkbox state
let includeSpecialChars = false;

// Click Events Start 
inputBtn.onclick = function() {
  inputModal.style.display = "block";
}

// Clear Button 
clearBtn.onclick = function () {
  display.placeholder = 'Your Secure Password';
  passwordModalTxt2.value = "";
  copyBtn.style.display = "none";
}

// Cancel Button Functionality 
cancelBtn1.onclick = function() {
    inputModal.style.display = "none";
    inputModal2.style.display = "none";
}

cancelBtn2.onclick = function() {
  inputModal2.style.display = "none";
  passwordModalTxt2.value = '';
}

cancelBtn3.onclick = function() {
  selectModal.style.display = "none";
  passwordModalTxt2.value = '';
}

// Next Button Functionality 
nextBtn1.onclick = function() {
  inputModal.style.display = "none";
  selectModal.style.display = "block";
}

nextBtn2.onclick = function() {
  const checkboxes = selectInput.querySelectorAll('input[type="checkbox"]');
  if (!selectChoice1.checked || !selectChoice2.checked || !selectChoice3.checked) {
    displayError2();
  } else {
    // Store the state of the special characters checkbox
    includeSpecialChars = selectChoice4.checked;
    checkboxes.forEach(checkbox => checkbox.checked = false);
    selectModal.style.display = "none";
    inputModal2.style.display = "block";
  }
}

nextBtn3.onclick = function () {
  let passwordLength = Number(passwordModalTxt2.value);
  if (passwordLength < 8 || passwordLength >= 128) {
    displayError();
    console.log("Password does not meet required criteria, please input a valid number!");
  } else if (isNaN(passwordLength)) {
    displayError();
    console.log("Password does not meet required criteria, please input a valid number!");
  } else {
    const password = passwordGenerator(passwordLength, includeSpecialChars); // Use the stored checkbox state
    inputModal2.style.display = "none";
    passwordModalTxt2.value = "";
    display.placeholder = password; // Display the generated password
  }
};

// Modal close button span functions 
span.onclick = function() {
  inputModal.style.display = "none";
}
span2.onclick = function() {
  selectModal.style.display = "none";
}
span3.onclick = function() {
  inputModal2.style.display = "none";
}
span4.onclick = function() {
  errorModal1.style.display = "none";
}
span5.onclick = function() {
  errorModal2.style.display = "none";
}

// Function to close modal with outside click event
window.onclick = function(e) {
    if (e.target == inputModal) {
      inputModal.style.display = "none";
    } else if (e.target == selectModal) {
      selectModal.style.display = "none";
    } else if (e.target == inputModal2) {
      inputModal2.style.display = "none";
    } else if (e.target == errorModal1) {
      errorModal1.style.display = "none";
      passwordModalTxt2.value = '';
    } else if (e.target == errorModal2) {
      errorModal2.style.display = "none";
      passwordModalTxt2.value = '';
    }
}

// ! FUNCTIONS / LOGIC

const displayError = () => {
  errorModal1.style.display = "block"; 
  errorCancelBtn.onclick = function () {
      errorModal1.style.display = "none";
      passwordModalTxt2.value = "";
  }
}

const displayError2 = () => {
  errorModal2.style.display = "block"; 
  error2CancelBtn.onclick = function () {
      errorModal2.style.display = "none";
  }
}

// Password Generator Function 
const passwordGenerator = (length, includeSpecialChars) => {
  let charset = allCapLetters + allLowLetters + allNumbers;
  if (includeSpecialChars) {
    charset += allSpecialCharacters; // Add special characters if checkbox is checked
  }
  
  const password = [...Array(length)].reduce((accumulator, _element) => {
    const randomIndex = Math.floor(Math.random() * charset.length);
    return accumulator + charset[randomIndex];
  }, "");
  
  return password;
}