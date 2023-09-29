/* 7 kyu
Numbers in strings

https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/javascript

In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
*/

function solve(s) {
  let arr = [];
  let result = 0;
  [...s].forEach(e => {
    if ('1234567890'.includes(e)) {
      arr.push(e);
    } else {
      if (+arr.join('') > result) result = +arr.join('');
      arr = [];
    }
    if (+arr.join('') > result) result = +arr.join('');
  });
  return result;
}
