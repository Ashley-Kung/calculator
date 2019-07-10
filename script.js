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
let operator = '';
let result = 0;
let firstNum = '';
let secondNum = '';
let previousKeyType = '';
calculator.addEventListener('click', function(event) {
	let displayedNum = display.textContent;
  if (!isNaN(parseInt(event.target.id))) {
	  if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'equals') {
      display.textContent = event.target.id;
	    previousKeyType = 'number';
	  } else {
		  display.textContent = displayedNum + event.target.id;
	  }
  }
  if (event.target.id === 'clear') {
	  previousKeyType = '';
    display.textContent = '0';
    result = 0;
    operator = '';
  	firstNum = '';
	  secondNum = '';
    return;
  }
  if (event.target.id === '.') {
	  if (!displayedNum.includes('.') && previousKeyType !== 'equals') {
	    display.textContent = displayedNum + '.'
	  } else if (previousKeyType === 'operator' || previousKeyType === 'equals') {
		  display.textContent = '0.';
	  }
		previousKeyType = '';
  }
  if (event.target.id === '*') {
	  if (firstNum && operator && previousKeyType !== 'operator' && previousKeyType !== 'equals') {
		  display.textContent = operate(operator, firstNum, display.textContent);
	  }
    operator = '*';
	  previousKeyType = 'operator';
    firstNum = display.textContent;
  }
  if (event.target.id === '/') {
	  if (firstNum && operator && previousKeyType !== 'operator' && previousKeyType !== 'equals') {
		  display.textContent = operate(operator, firstNum, display.textContent);
	  }
    operator = '/';
	  previousKeyType = 'operator';
    firstNum = display.textContent;
  }
  if (event.target.id === '+') {
	  if (firstNum && operator && previousKeyType !== 'operator' && previousKeyType !== 'equals') {
		  display.textContent = operate(operator, firstNum, display.textContent);
	  }
    operator = '+';
	  reviousKeyType = 'operator';
    firstNum = display.textContent;
  }
  if (event.target.id === '-') {
	  if (firstNum && operator && previousKeyType !== 'operator' && previousKeyType !== 'equals') {
		  display.textContent = operate(operator, firstNum, display.textContent);
	  }
    operator = '-';
	  previousKeyType = 'operator';
    firstNum = display.textContent;
  }
  if (event.target.id === '=') {
	  if (previousKeyType === 'equals') {
	  } else {
	  previousKeyType = 'equals';
    result = operate(operator, firstNum, display.textContent);
	  display.textContent = result;
	  firstNum = result;
	  operator = '';
	  }
  }
});
