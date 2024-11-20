"use strict"

const $ = selector => document.querySelector(selector);

const myNodeList = document.querySelectorAll('li');
for (let i = 0; i < myNodeList.length; i++) {
  const span = document.createElement('span');
  const text = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(text);
  myNodeList[i].appendChild(span);
};

const close = document.querySelectorAll('.close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = 'none';
  };
};

function newElement() {
  const li = document.createElement('li');
  const inputValue = $('#myInput').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.classList.add('list-group-item');
  
  if (inputValue === '') {
    $('#errorMsg').innerText = (`You must enter a task.`)
  } else {
    $('#taskList').appendChild(li);
  }
  $('#myInput').value = '';

  const span = document.createElement('span');
  const text = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(text);
  li.appendChild(span);

}
