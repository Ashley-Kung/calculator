function add(x,y) {
  return parseInt(x) + parseInt(y);
}

function subtract(x,y) {
  return x - y;
}

function multiply(x,y) {
  return x * y;
}

function divide(x,y) {
  if (y === 0) {
    return 'CAN\'T DIVIDE BY ZERO FOOL!'
  }
  return x / y;
}

function operate(operator, x, y) {
  if (operator === '+') return add(x,y);
  if (operator === '-') return subtract(x,y);
  if (operator === '*') return multiply(x,y);
  if (operator === '/') return divide(x,y);
}

//button-click event listeners
let calculator = document.getElementById('calculator');
let display = document.getElementById('display');
let values = [];
let operator = '';
let result = 0;
let numsPressed = 0;
let operatorsPressed = 0;
let currNum = '';
calculator.addEventListener('click', function(event) {
  if (!isNaN(parseInt(event.target.id))) {
    if (currNum === '') {
      values.push(event.target.id);
      display.textContent = event.target.id;
    }
  }
  if (event.target.id === 'clear') {
    display.textContent = '';
    values = [];
    result = 0;
    operator = '';
    numsPressed = 0;
    return;
  }
  if (event.target.id === '*') {
    operator = '*';
    currNum = '';
  }
  if (event.target.id === '/') {
    operator = '/';
    currNum = '';
  }
  if (event.target.id === '+') {
    operator = '+';
    currNum = '';
  }
  if (event.target.id === '-') {
    operator = '-';
    currNum = '';
  }
  if (event.target.id === '=') {
    if (values.length === 2) {
    result = operate(operator, values[0], values[1]);
    console.log(result);
    display.textContent = result;
    values = [result];
  }
}
});