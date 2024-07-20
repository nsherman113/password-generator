
// Elements 
const generateBtn = document.querySelector("#finish");
const display = document.getElementById('password');
const inputBtn = document.querySelector("#criteria");
const clearBtn = document.querySelector("#criteria2");
const cancelBtn1 = document.querySelector("#cancel1")
const cancelBtn2 = document.querySelector("#cancel2")
const cancelBtn3 = document.querySelector("#cancel3")
const nextBtn1 = document.querySelector("#next1")
const nextBtn2 = document.querySelector("#next2")
const errorCancelBtn = document.querySelector("#error1Btn");
const copyBtn = document.querySelector("#copy");
const inputModal = document.querySelector("#myModal")
const inputModal2 = document.querySelector("#myModal2")
const inputModal3 = document.querySelector("myModal3")
const errorModal1 = document.querySelector("#error1");
const passwordModalTxt2 = document.getElementById("passwordtxt2")
const passwordModalTxt3 = document.getElementById("passwordtxt3")
const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];
const span3 = document.getElementsByClassName("close")[2];

// Charater Option Arrays
const allCapLetters = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
]; 
const allLowLetters = [
  'abcdefghijklmnopqrstuvwxyz'
];
const allNumbers = [
  '0123456789'
]
const allSpecialCharacters = [
  '!@#$%^&*()_+={[}]:;<,>.?/'
];

const compiledArrays = [...allCapLetters,...allLowLetters,...allNumbers,...allSpecialCharacters].join('')
console.log(compiledArrays);


// Click Events
inputBtn.onclick = function() {
  inputModal.style.display = "block";
}


clearBtn.onclick = function () {
  display.placeholder = 'Your Secure Password';
  passwordModalTxt2.value = "";
  copyBtn.style.display = "none";
}

cancelBtn1.onclick = function() {
    inputModal.style.display = "none";
    inputModal2.style.display = "none";
    
}
cancelBtn2.onclick = function() {
  inputModal2.style.display = "none";
  passwordModalTxt2.value ='';
}


nextBtn1.onclick = function() {
  inputModal.style.display = "none";
  inputModal2.style.display = "block";
}

// Modal close button span functions 
span.onclick = function() {
  inputModal.style.display = "none";
}
span2.onclick = function() {
  inputModal2.style.display = "none";
}
span3.onclick = function() {
  errorModal1.style.display = "none";
}
nextBtn2.onclick = function () {
  let passwordLength = Number(passwordModalTxt2.value);
  if  (passwordLength < 8 || passwordLength >= 128) {
    // Create function that displays window, then call it here in lieu of console log 
    displayError ()
    console.log("Password does not meet required criteria, please input a valid number!");
  } else if (isNaN(passwordLength)) {
    displayError ()
    console.log("Password does not meet required criteria, please input a valid number!");
  } else {
    console.log(passwordLength);
    inputModal2.style.display = "none"; passwordModalTxt2.value = ""; display.placeholder = `${passwordGenerator(passwordLength)}`;
  }
  
};

// Function to close modal with outside click event
window.onclick = function(e) {
    if (e.target == inputModal) {
      inputModal.style.display = "none";
    } else if (e.target == inputModal2) {
      inputModal2.style.display = "none";
    } else if (e.target == errorModal1) {
      errorModal1.style.display = "none";
      passwordModalTxt2.value = '';
    }
    
}




// ! FUNCTIONS / LOGIC

// Display Error Modal Function 
const displayError = () => {
  errorModal1.style.display = "block"; 
  errorCancelBtn.onclick = function () {
      errorModal1.style.display = "none";
      passwordModalTxt2.value = "";
  }
}

// Password Generator Function 
const passwordGenerator = (length) => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789012345678901234567890123456789!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=";

  const password = [...Array(length)].reduce((accumulator, _element) => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return accumulator + chars[randomIndex];
  }, "");
  return password;
}
console.log(passwordGenerator())




