const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, currentNum) => total + currentNum, 0);
};

const multiply = function(array) {
  return array.reduce((product, currentNum) => product * currentNum, 1);
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
