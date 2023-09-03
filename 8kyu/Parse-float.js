/* 8 kyu
Parse float

https://www.codewars.com/kata/57a386117cb1f31890000039/javascript

Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

function parseF(s) {
  if (typeof s === 'number' || typeof s === 'string') {
    return Math.abs(s) == 0 ? 0 : Math.abs(s) || null;
  }
  return null;
}

// A better solution

function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}
