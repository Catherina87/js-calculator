const exampleInput = {
  num1: 8,
  num2: 4,
  operation: 'Divide',
};

const operations = [
  'add', '+', 
  'subtract', '-', 
  'multiply', '*', 
  'divide', '/'
];


const isOperationIncluded = function(operation) {
  return operations.includes(operation);
};

const areNumbersValid = function(num1, num2) {
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    return false;
  } else if (num1 === null || num2 === null) {
    return false;
  } else if (num1 === undefined || num2 === undefined) {
    return false;
  } else {
    return true;
  }
};

const add = function(inputObject) {
  return inputObject.num1 + inputObject.num2;
};

const subtract = function(inputObject) {
  return inputObject.num1 - inputObject.num2;
};

const multiply = function(inputObject) {
  return inputObject.num1 * inputObject.num2;
};

const divide = function(inputObject) {
  if (inputObject.num2 === 0) {
    console.log("Division by zero undefined.");
    return;
  }

  return inputObject.num1 / inputObject.num2;
};

const performCalculation = function(inputObject) {
  let operation = inputObject.operation.toLowerCase();

  let operationValidity = isOperationIncluded(operation);
  let numbersValidity = areNumbersValid(inputObject.num1, inputObject.num2);

  if (operationValidity && numbersValidity) {
    if (operation === 'add' || operation === '+') {
      return add(inputObject);
    } else if (operation === 'subtract' || operation === '-') {
      return subtract(inputObject);
    } else if (operation === 'multiply' || operation === '*') {
      return multiply(inputObject);
    } else if (operation === 'divide' || operation === '/') {
      return divide(inputObject);
    }
  } else {
    console.log(`Either calculator does not support ${inputObject.operation} operation.`);
    console.log(`Or numbers provided (${inputObject.num1} or ${inputObject.num2}) are not valid.`)
  }
};

console.log(performCalculation(exampleInput));
