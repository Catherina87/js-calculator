const exampleAdditionInput = {
  num1: 10.5,
  num2: 2,
  operation: '/',
}

const operations = [
  'add', '+', 
  'subtract', '-', 
  'multiply', '*', 
  'divide', '/'
];


function isOperationIncluded(operation) {
  return operations.includes(operation);
}

function add(inputObject) {
  return inputObject.num1 + inputObject.num2;
}

function subtract(inputObject) {
  return inputObject.num1 - inputObject.num2;
}

function multiply(inputObject) {
  return inputObject.num1 * inputObject.num2;
}

function divide(inputObject) {
  if (inputObject.num2 === 0) {
    console.log("Division by zero undefined.");
    return;
  }

  return inputObject.num1 / inputObject.num2;
}

function performCalculation(inputObject) {
  let operation = inputObject.operation.toLowerCase();

  let result = isOperationIncluded(operation);

  if (result) {
    if (operation === 'add' || operation === '+') {
      return add(inputObject);
    } else if (operation === 'subtract' || operation === '-') {
      return subtract(inputObject);
    } else if (operation === 'multiply' || operation === '*') {
      return multiply(inputObject);
    } else if (operation === 'divide' || operation === '/') {
      return divide(inputObject);
    }
  }
}

console.log(performCalculation(exampleAdditionInput));
