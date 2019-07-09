function add(x,y) {
  return parseFloat(x) + parseFloat(y);
}

function subtract(x,y) {
  return parseFloat(x) - parseFloat(y);
}

function multiply(x,y) {
  return parseFloat(x) * parseFloat(y);
}

function divide(x,y) {
  if (y === 0) {
    return 'CAN\'T DIVIDE BY ZERO FOOL!'
  }
  return parseFloat(x) / parseFloat(y);
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
let firstNum = '';
let secondNum = '';
let previousKeyType = '';
calculator.addEventListener('click', function(event) {
	let displayedNum = display.textContent;
  if (!isNaN(parseInt(event.target.id))) {
	  if (displayedNum === '0' || previousKeyType === 'operator') {
//      values.push(event.target.id);
      display.textContent = event.target.id;
	  previousKeyType = '';
	  } else {
		  display.textContent = displayedNum + event.target.id;
	  }
  }
  if (event.target.id === 'clear') {
    display.textContent = '0';
    values = [];
    result = 0;
    operator = '';
    numsPressed = 0;
	firstNum = '';
	secondNum = '';
    return;
  }
  if (event.target.id === '.') {
	if (!displayedNum.includes('.')) {
	  display.textContent = displayedNum + '.'
	} else if (previousKeyType === 'operator') {
		display.textContent = '0.';
	}
		  previousKeyType = '';
  }
  if (event.target.id === '*') {
    operator = '*';
	previousKeyType = 'operator';
    firstNum = display.textContent;
  }
  if (event.target.id === '/') {
    operator = '/';
	previousKeyType = 'operator';
    firstNum = display.textContent;
  }
  if (event.target.id === '+') {
    operator = '+';
	previousKeyType = 'operator';
    firstNum = display.textContent;
  }
  if (event.target.id === '-') {
    operator = '-';
	previousKeyType = 'operator';
    firstNum = display.textContent;
  }
  if (event.target.id === '=') {
	secondNum = display.textContent;
    result = operate(operator, firstNum, secondNum);
    console.log(result);
    display.textContent = result;
    values = [result];
}
});