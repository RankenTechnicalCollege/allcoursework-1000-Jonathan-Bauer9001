const $ = selector => document.querySelector(selector);

const scores = [];
const names = [];
let average = 0;
let highScore = 0;

const addToArray = () => {


  const name = $('#name').value;
  const score = parseFloat($('#score').value);
  let scoreTotal = 0;

  if ( name == '' || !isNaN(name) ){
    $('#errMsg1').innerText = 'please enter a name';
    $('#name').focus();
  } else if (score > 100 || score < 0 || isNaN(score)) {
    $('#errMsg2').innerText = 'score must be between 0 and 100';
    $('#score').focus();
  } else {
    $('#errMsg1').innerText = '';
    names.push(name);

    $('#errMsg2').innerText = '';
    scores.push(score);
  };

  console.log(names, scores);
  
  for (let i = 0; i < scores.length; i++) {

    scoreTotal += scores[i];
    average = scoreTotal / (scores.length);
  };
  return average;
  
};

const newHighScore = () => {
  for (let i = 0; i < scores.length; i++) {

    if (scores[i] > highScore){
      highScore = scores[i];
    };
    
  };
  return highScore;
};

const displayResults = () => {

  $('#resultsTitle').innerText = (`Results`);
  $('#averageScore').innerText = (`Average score = ${average}`);
  $('#highScore').innerText = (` High score = ${highScore}`);

};

const displayScores = () => {

  $('#scoreTitle').innerText = (`Scores`);
  $('#scoreDisplay').innerText = '';
  for (let i = 0; i < names.length; i++) {
    $('#scoreDisplay').innerHTML += (`${names[i]}, ${scores[i]} <br>`);
  };
  
}

const clearField = () => {
$('#name').value = '';
$('#score').value = '';
$('#name').focus();


} 

document.addEventListener('DOMContentLoaded', () => {

  $('#addToArray').addEventListener('click', () => {
    addToArray();
    newHighScore();
    clearField();
  });

  $('#displayResults').addEventListener('click', displayResults);
  $('#displayScores').addEventListener('click', displayScores);
});

