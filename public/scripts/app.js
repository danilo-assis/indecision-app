'use strict';

var square = function square(x) {
  return x * x;
};

console.log(square(8));

var squareArrow = function squareArrow(x) {
  return x * x;
};
console.log(squareArrow(10));

var squareArrow2 = function squareArrow2(x) {
  return x * x;
};

console.log(squareArrow2(4));

var getFirstName = function getFirstName(FullName) {
  return FullName.split(' ')[0];
};

console.log(getFirstName('Danilo Assis'));

var getFirstName2 = function getFirstName2(FullName) {
  return FullName.split(' ')[0];
};

console.log(getFirstName2('Darlan Assis'));
