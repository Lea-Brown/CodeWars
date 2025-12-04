/**
 * 7 kyu
 * Find min and max
 * https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/javascript
 *
 * Returns the minimum and maximum values from an array of numbers.
 *
 * @param {number[]} arr - An array of numbers to evaluate.
 * @returns {[number, number]} An array where the first element is the minimum value and the second element is the maximum value.
 *
 * @example
 * getMinMax([3, 7, 2, 9]); // returns [2, 9]
 * getMinMax([-5, 0, 5, 10]); // returns [-5, 10]
 */
function getMinMax(arr) {
  let result = [arr[0], arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < result[0]) result[0] = arr[i];
    if (arr[i] > result[1]) result[1] = arr[i];
  }
  return result;
}
