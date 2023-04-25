/* 7 kyu
Sum of Odd Cubed Numbers

https://www.codewars.com/kata/580dda86c40fa6c45f00028a/javascript

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  let result = [];
  if (arr.some((item) => isNaN(item))) return undefined;
  arr.forEach((e) => {
    if (e ** 3 % 2 != 0) result.push(e ** 3);
  });
  return result.length < 1 ? 0 : result.reduce((a, b) => a + b);
}
