/**
 * 7 kyu
 * Odd Ones Out!
 * https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/javascript
 *
 * Returns a new array containing only the numbers that appear an even number of times
 * in the input array. Numbers with odd frequencies are removed.
 *
 * @function oddOnesOut
 * @param {number[]} nums - The list of numbers to evaluate.
 * @returns {number[]} An array of numbers whose total occurrences are even.
 *
 * @example
 * oddOnesOut([1, 2, 3, 1, 3, 3, 2]);
 * // → [1, 2, 1, 2]
 */
function oddOnesOut(nums) {
  let obj = {};
  for (const each of nums) {
    obj[each] = (obj[each] || 0) + 1;
  }
  let result = [];
  for (const each of nums) {
    if (obj[each] % 2 === 0) result.push(each);
  }
  return result;
}
