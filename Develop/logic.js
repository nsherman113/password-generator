function generatePassword () {
    generateBtn.onclick = function () {
      inputModal3.style.display = "none";
      passwordModalTxt3.value ='';
      console.log('WHATS GOOOOOD');
    }
}
generatePassword()

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
          placeholder=""
          aria-label="Generated Password"
        ></textarea>
      </div>
      <div class="card-footer">
        <button id="criteria" class="inputBtn">Input Criteria</button>
        
      
      </div>
    </div>
  </div>`
}