// If the length of the element's string is 0 then display helper message

document.getElementById("login-button").addEventListener("click", function () {
  //   check the form empty or not
  const email = document.getElementById("email").value;
  const maillength = email.length;
  const pass = document.getElementById("password").value;
  const passlength = pass.length;

  const password = document.getElementById("password").value;
  if (maillength > 0 && passlength > 0) {
    if (email == "mybank@gmail.com" && password == "Hamidthedev") {
      window.location.href = "bankpage.html";
    } else {
      window.alert("Incorrect Credentials");
    }
  } else {
    window.alert("Please Fill The Form");
  }
});

