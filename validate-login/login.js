const nameElement = document.getElementById("Name");
var flag = false;
const spanNameElement = document.getElementsByClassName("form-message 1")[0];
console.log([nameElement, spanNameElement]);

nameElement.addEventListener("blur", function () {
  if (nameElement.value === "") {
    flag = false;
    spanNameElement.style.display = "inline";
  } else {
    flag = true;
  }
});

const phoneElement = document.getElementById("Phone-number");
const spanPhoneElement = document.getElementsByClassName("form-message 2")[0];
console.log([phoneElement, spanPhoneElement]);

phoneElement.addEventListener("blur", function () {
  if (phoneElement.value === "") {
    flag = false;
    spanPhoneElement.style.display = "inline";
  } else if (isNaN(phoneElement.value) === true) {
    flag = false;
    alert("Trường này phải là số");
  } else {
    flag = true;
  }
});

const emailElement = document.getElementById("Email");
const spanEmailElement = document.getElementsByClassName("form-message 3")[0];
console.log([emailElement, spanEmailElement]);

emailElement.addEventListener("blur", function () {
  if (emailElement.value === "") {
    flag = false;
    spanEmailElement.style.display = "inline";
  } else {
    flag = true;
  }
});

const passwordElement = document.getElementById("Password");
const spanPasswordElement =
  document.getElementsByClassName("form-message 4")[0];
console.log([passwordElement, spanPasswordElement]);

passwordElement.addEventListener("blur", function () {
  if (passwordElement.value === "") {
    flag = false;
    spanPasswordElement.style.display = "inline";
  } else {
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
