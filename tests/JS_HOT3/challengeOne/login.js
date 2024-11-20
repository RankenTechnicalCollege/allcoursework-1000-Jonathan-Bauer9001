"use strict"

const $ = selector => document.querySelector(selector);

const email = $('#emailInput');
const password = $('#passwordInput');
const correctEmail = 'admin@example.com';
const correctPassword = 'password';
const form = $('form');

const login = () => {

  if (email.value == correctEmail && password.value === correctPassword){
    $('#successMsg').innerText = (`Welcome back Admin!`);
    console.log('2')
  } else if (email.value == '' || password.value == '') {
    $('#errorMsg').innerText = (`You seem to have forgotten your username and password.`)
    console.log('1')
  } else  if (email.value != correctEmail || password.value !== correctPassword){
    $('#errorMsg').innerText = (`That email and password doesn't seem to be right. Try Again.`)
    console.log('3')
  } 

};

const clearMsg = () => {
  $('#errorMsg').innerText = '';
  $('#successMsg').innerText = '';
};

form.addEventListener('submit', function(event) {
  event.preventDefault();
  clearMsg();
  login();
});
