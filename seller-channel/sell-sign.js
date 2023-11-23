const phoneElement = document.getElementById("Phone-number");
var flag = false;
const spanPhoneElement = document.getElementsByClassName("form-message 1")[0];
console.log([phoneElement,spanPhoneElement]);

phoneElement.addEventListener("blur", function (){
    if(phoneElement.value === ""){
        
        spanPhoneElement.style.display = "inline";
        flag = false;
    }else
    if(isNaN(phoneElement.value)=== true){
        
        alert("Trường này phải là số")
        flag = false;
    }else{
        flag = true;
    }
    
});

const emailElement = document.getElementById("Email");
const spanEmailElement = document.getElementsByClassName("form-message 2")[0];
console.log([emailElement,spanEmailElement]);

emailElement.addEventListener("blur", function (){
    if(emailElement.value === ""){
        
        spanEmailElement.style.display = "inline";
        flag = false;
    }
    else{
        flag = true;
    }
});
const passwordElement = document.getElementById("Password");
const spanPasswordElement = document.getElementsByClassName("form-message 3")[0];
console.log([passwordElement,spanPasswordElement]);

passwordElement.addEventListener("blur", function (){
    if(passwordElement.value === ""){
        
        spanPasswordElement.style.display = "inline";
        flag = false;
    }
    else{
        flag=true;
    }
});

const re_passwordElement = document.getElementById("Password-again");
const spanRe_PasswordElement = document.getElementsByClassName("form-message 4")[0];
console.log([re_passwordElement,spanRe_PasswordElement]);

re_passwordElement.addEventListener("blur", function (){
    if(re_passwordElement.value === ""){
        
        spanRe_PasswordElement.style.display = "inline";
        flag = false;
    }
    else{
        flag = true;
    }
});

const btnRegister = document.getElementById("btnRegister");
btnRegister.addEventListener("click", function () {
  if (flag === false) {
    btnRegister.href = "";
  } else {
    btnRegister.href = "http://127.0.0.1:5500/Halloween/index.html";
  }
});