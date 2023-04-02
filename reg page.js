var nameField=document.getElementById("nam");
var nameError=document.getElementById("namec");

function validateName(){
    if(nameField.value.length<4){
        nameError.innerHTML="Name must be at least 4 characters long."
        return false;
    }
    nameError.innerHTML=""
    return true;
}


var mailField=document.getElementById("mail");
var mailError=document.getElementById("email");

function validateEmail(){
    if(!mailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML="Please enter the valid email.";
        return false;
    }
   
        mailError.innerHTML="";
        return true;
    
}

var numField=document.getElementById("nu");
var numError=document.getElementById("num");

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }


function validateNumber(){
    if(numField.value.length<10){
        numError.innerHTML="Please enter the valid mobile number.";
        return false;
    }
    numError.innerHTML="";
    return true;
    
}

var pwField=document.getElementById("pp");
var error=document.getElementById("pw");
function validatePW(){
    if(pwField.value.length<5){
        error.innerHTML="Password should be atleast 5 character"
        return false;
    }
    error.innerHTML=""
    return true;
}

function signIp(){
    if(validateName()&&validateEmail()&&validateNumber()&&validatePW()==true){
        

        alert("Your Account Registered Succefully.")
        pwField.value="";
        numField.value="";
        mailField.value="";
        nameField.value="";

    }
    
}