
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



// Input modal 

// ------------------- CLICK EVENTS START -------------------- 
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
  
  // passwordModalTxt2.value ='';
}





nextBtn2.onclick = function() {
 
   let passLength = 0;
  if  (passwordModalTxt2.value < 8 || passwordModalTxt2.value >= 128) {
    // Create function that displays window, then call it here in lieu of console log 
    displayError ()
    console.log("Password does not meet required criteria, please input a valid number!");
  } else {inputModal2.style.display = "none";  passwordModalTxt2.style.display = "none"; inputModal3.style.display = "block";}

}
 




window.onclick = function(event) {
    if (event.target == inputModal) {
      inputModal.style.display = "none";
    } else if (event.target == inputModal2) {
      inputModal2.style.display = "none";
    }
}


// ------------------- CLICK EVENTS END --------------------

// ------------------ LOGIC --------------------

