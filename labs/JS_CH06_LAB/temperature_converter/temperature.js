"use strict";

const $ = selector => document.querySelector(selector);

$('#formRadio').onclick = () => {
  const fToC = $('#fToC').checked;

  if(fToC == true) { 
    $('#unit1').innerText = 'F';
    $('#unit2').innerText = 'Celsius'

  } else {
    $('#unit1').innerText = 'C' 
    $('#unit2').innerText = 'Fahrenheit'
  }
  
  $('#inputDegrees').value = '';
  $('#outputDegrees').value = '';
  $('#inputDegrees').focus()
}

const processInput = () => {
  const userInput = parseFloat($('#inputDegrees').value);
  let userOutput = 0;
  const fToC = $('#fToC').checked;
 
  if ( isNaN(userInput) ) {
    $('#errorMsg').innerHTML = (`<br>You must enter a valid number for degrees.`)

  } else {
    if ( fToC == true ) {
      userOutput = (userInput - 32) / 1.8;
      $('#outputDegrees').value = userOutput;
    } else {
      userOutput = (userInput * 1.8) + 32;
      $('#outputDegrees').value = userOutput;
    };
  };

  $('#inputDegrees').focus();
  $('#inputDegrees').select();
};

const clearMsg = () => {
  const userInput = parseFloat($('#inputDegrees').value);
  if ( !isNaN(userInput) ) {
    $('#errorMsg').innerText = '';
  };
};

document.addEventListener('DOMContentLoaded', () => {
  $('#convertBtn').addEventListener('click', () => {
    processInput();
    clearMsg();
  });
});