
// Elements 
const generateBtn = document.querySelector("#finish");
const inputBtn = document.querySelector("#criteria");
const cancelBtn1 = document.querySelector("#cancel1")
const cancelBtn2 = document.querySelector("#cancel2")
const cancelBtn3 = document.querySelector("#cancel3")
const nextBtn1 = document.querySelector("#next1")
const nextBtn2 = document.querySelector("#next2")
const errorCancelBtn = document.querySelector("#error1Btn");
const inputModal = document.getElementById("myModal")
const inputModal2 = document.getElementById("myModal2")
const inputModal3 = document.getElementById("myModal3")
const errorModal1 = document.getElementById("error1");
const passwordModalTxt2 = document.getElementById("passwordtxt2")
const passwordModalTxt3 = document.getElementById("passwordtxt3")
const span = document.getElementsByClassName("close")[0];

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

// For Loop to loop through each Array (conditional needed)
for (let i = 0; i < allCapLetters.length && allLowLetters.length && allNumbers.length && allSpecialCharacters.length; i++) {
  console.log(allCapLetters[i],allLowLetters[i], allNumbers[i], allSpecialCharacters[i]);
}

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
  passwordModalTxt2.value ='';
  passwordModalTxt3.value ='';
  
}

span.onclick = function() {
    inputModal.style.display = "none";
}
nextBtn1.onclick = function() {
  inputModal.style.display = "none";
  inputModal2.style.display = "block";
}


nextBtn2.onclick = function () {
  if  (passwordModalTxt2.value < 8 || passwordModalTxt2.value >= 128) {
    // Create function that displays window, then call it here in lieu of console log 
    displayError ()
    console.log("Password does not meet required criteria, please input a valid number!");
  } else if (isNaN(passwordModalTxt2.value)) {
    displayError ()
    console.log("Password does not meet required criteria, please input a valid number!");
  } else {
    inputModal2.style.display = "none"; passModalInput(); 
  }
  
};

let passModalInput = () => {
  let passLength = passwordModalTxt2.value;
passwordModalTxt2.style.display = "none"; inputModal3.style.display = "block";
};


// Function to close modal with outside click event
window.onclick = function(e) {
    if (e.target == inputModal) {
      inputModal.style.display = "none";
    } else if (e.target == inputModal2) {
      inputModal2.style.display = "none";
    }
}






// ! FUNCTIONS / LOGIC

// Check password criteria 
function displayError () {
  errorModal1.style.display = "block"; 
  errorCancelBtn.onclick = function () {
      errorModal1.style.display = "none";
      passwordModalTxt2.value = "";
  }
}

// Add length
// function addPasswordLength(a) {
// let sum = a + 0;
// return lengthArray.push(sum)
// };

// Generate password 
function generatePassword () {
  generateBtn.onclick = function () {
    inputModal3.style.display = "none";
    passwordModalTxt3.value ='';
    console.log('WHATS GOOOOOD');
  }
}


// Display password
function displayPassword () {


`<div class="wrapper">
  <header>
    <h1>Password Generator</h1>
  </header>
  <div class="card">
    <div class="card-header">
      <h2>Generate a Password</h2>
    </div>
    <div class="card-body">
      <textarea
        readonly
        id="password"
        placeholder="" // <----- insert template literal here to replace with generated password 
        aria-label="Generated Password"
      ></textarea>
    </div>
    <div class="card-footer">
      <button id="criteria" class="inputBtn">Input Criteria</button>
      
    
    </div>
  </div>
</div>`
} 

