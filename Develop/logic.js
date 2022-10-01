


// Check password length 
function displayError () {
    errorModal1.style.display = "block"; 
    errorCancelBtn.onclick = function () {
        errorModal1.style.display = "none";
        passwordModalTxt2.value = "";
    }
}

// Add length
function addPasswordLength(a) {
  let sum = a + 0;
  return lengthArray.push(sum)
};

// console.log(lengthArray);



// Randomize password
function randomizePassword () {

}





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