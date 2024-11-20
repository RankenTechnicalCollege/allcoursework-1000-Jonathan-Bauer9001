"use strict"

const $ = selector => document.querySelector(selector);

let upvotes = 0;
let downvotes = 0;
let totalVotes = upvotes + downvotes;

$('#upvote').addEventListener('click', () =>{
  upvotes++;
  totalVotes++;
  $('#upvotes').innerText = upvotes;
  $('#totalVotes').innerText = totalVotes;
});
$('#downvote').addEventListener('click', () =>{
  downvotes++;
  totalVotes++;
  $('#downvotes').innerText = downvotes;
  $('#totalVotes').innerText = totalVotes;
});

