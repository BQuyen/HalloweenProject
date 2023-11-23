const emailElement = document.getElementById("Email");
var flag = false;
const spanEmailElement = document.getElementsByClassName("form-message 1")[0];
console.log([emailElement,spanEmailElement]);

emailElement.addEventListener("blur", function (){
    if(emailElement.value === ""){
        spanEmailElement.style.display = "inline";
        flag = false;
    } else{
        flag = true;
    }
});

const passwordElement = document.getElementById("Password");
const spanPasswordElement = document.getElementsByClassName("form-message 2")[0];
console.log([passwordElement,spanPasswordElement]);

passwordElement.addEventListener("blur", function (){
    if(passwordElement.value === ""){
        
        spanPasswordElement.style.display = "inline";
        flag = false;
    } else{
        flag = true;
    }
});

const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", function () {
  if (flag === false) {
    btnLogin.href = "";
  } else {
    btnLogin.href =
      "http://127.0.0.1:5500/Halloween/index.html";
  }
});
