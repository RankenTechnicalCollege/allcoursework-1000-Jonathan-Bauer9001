"use strict"

const $ = selector => document.querySelector(selector);

const email = $('#emailInput').value;
const password = $('#passwordInput').value;
const correctEmail = 'admin@example.com';
const correctPassword = 'password';
const submit = $('button');

const login = () => {

  if (email != correctEmail || password !== correctPassword){
    $('#errorMsg').innerText = (`That email and password doesn't seem to be right. Try Again.`)
    console.log('3')
  } else if (email == '' || password == '') {
    $('#errorMsg').innerText = (`You seem to have forgotten your username and password.`)
    console.log('1')
  } else if (email == correctEmail && password === correctPassword){
    $('#successMsg').innerText = (`Welcome back Admin!`);
    console.log('2')
  };
};

submit.addEventListener('click', () => {

  login();
});
