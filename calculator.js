const exampleInput = {
  num1: 8,
  num2: 0.9,
  operation: 'MULtiplY',
};

const operations = [
  'add', '+', 
  'subtract', '-', 
  'multiply', '*', 
  'divide', '/'
];


const isOperationIncluded = (operation) => {
  return operations.includes(operation);
};

const areNumbersValid = (num1, num2) => {
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

const add = (inputObject) => inputObject.num1 + inputObject.num2;

const subtract = (inputObject) => inputObject.num1 - inputObject.num2;

const multiply = (inputObject) => inputObject.num1 * inputObject.num2;

const divide = (inputObject) => {
  if (inputObject.num2 === 0) {
    console.log("Division by zero undefined.");
    return;
  }

  divisionResult = inputObject.num1 / inputObject.num2;
  return Math.round(divisionResult * 100) / 100;
};

const performCalculation = (inputObject) => {
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
