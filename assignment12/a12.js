function add() {
  outputInt =generateNumber(0, 9);
  let verify = "Is " + outputInt + " the next digit in your number?" + "\n\nClick Cancel if not." + "\nClick OK if it is.";
  if(confirm (verify) == true){
      output.textContent = output.textContent + outputInt;
  }
}

function generateNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function clear() {
  outputInt = "";
  output.textContent = outputInt;
}

function submit() {
  alert("Wait you actually did it!?\n\nSubmit " + output.textContent + " as your number?");
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);

const randomButton = document.querySelector('.add-button').addEventListener('click', add);
const clearButton = document.querySelector('.clear-button').addEventListener('click', clear);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);