'use strict';

window.addEventListener('DOMContentLoaded', () => {

  // Set default credentials if not already set

  if (!localStorage.getItem("username")) {
    localStorage.setItem("username", "haodi@haodin.com");
    localStorage.setItem("password", "password123");
  }

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.getElementById('loginBtn');
  const errorMsg = document.getElementById('error');

  usernameInput.addEventListener('focus', () => { usernameInput.value = ""; });
  passwordInput.addEventListener('focus', () => { passwordInput.value = ""; });

  // Handle login button click

  loginBtn.addEventListener('click', () => {
    const enteredUser = usernameInput.value;
    const enteredPass = passwordInput.value;
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (enteredUser === storedUser && enteredPass === storedPass) {
      window.location.href = "home.html";
    } else {
      errorMsg.textContent = "*Incorrect username or password";
    }
  });

  const signupBtn = document.getElementById('signupBtn');
  signupBtn.addEventListener('click', () => {
    alert("Sign-up page is not implemented.");
  });
});
