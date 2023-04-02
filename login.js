
 var emailField=document.getElementById("email");
 var emailError=document.getElementById("errormsg");

 function validateEmail(){
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="Please enter the valid email";
        return false;
    }
   
        emailError.innerHTML="";
        return true;
    
}


var pwField=document.getElementById("password");
var error=document.getElementById("errorpw");
function validatePW(){
    if(pwField.value.length<5){
        error.innerHTML="Password should be atleast 5 character"
        return false;
    }
    error.innerHTML=""
    return true;
}
function login(){
    if(validateEmail()&&validatePW()==true ){
        alert("succesfullyy logined")

    }
}