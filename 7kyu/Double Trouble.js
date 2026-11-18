/**
 * 7 kyu
 * Double Trouble
 * https://www.codewars.com/kata/57f7796697d62fc93d0001b8/javascript
 *
 * Removes consecutive numbers whose sum equals the target value.
 *
 * Starts with the first element. For each following element, it checks
 * whether its sum with the last retained element equals the target.
 * If the sum does not equal the target, it retains the element.
 *
 * @param {number[]} x - The input array of numbers.
 * @param {number} t - The target sum to avoid.
 * @returns {number[]} A new array with matching consecutive pairs removed.
 *
 * @example
 * trouble([1, 2, 3, 4], 5); // [1, 3, 4]
 *
 * @example
 * trouble([1, 4, 2, 3], 5); // [1, 4, 2]
 *
 * @example
 * trouble([2, 3, 1, 4], 5); // [2, 1, 4]
 */
function trouble(x, t) {
  let result = [x[0]];
  let last = x[0];
  for (let i = 1; i < x.length; i++) {
    if (last + x[i] != t) {
      result.push(x[i]);
      last = x[i];
    }
  }
  return result;
}
