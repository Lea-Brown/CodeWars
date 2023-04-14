/* 7 kyu
Sum of integers in string

https://www.codewars.com/kata/598f76a44f613e0e0b000026/javascript

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

function sumOfIntegersInString(s) {
  let count = 0;
  let x = [];
  let nums = "1234567890";
  s.split("").forEach((e) => {
    if (nums.includes(e)) x.push(e);
    if (!nums.includes(e)) {
      count += Number(x.join(""));
      x = [];
    }
  });
  if (x.length > 0) count += Number(x.join(""));
  return count;
}
