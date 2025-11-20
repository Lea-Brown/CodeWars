/**
 * 7 kyu
 * Check three and two
 * https://www.codewars.com/kata/5a9e86705ee396d6be000091/javascript
 *
 * Checks if an array contains exactly two distinct values,
 * with one value appearing twice and the other appearing three times.
 *
 * @param {Array} array - The array of elements to check.
 * @return {boolean} - Returns true if the array has a "three and two" pattern, otherwise false.
 *
 * @example
 * checkThreeAndTwo([2, 2, 3, 3, 3]); // returns true
 * checkThreeAndTwo([4, 4, 4, 5, 5]); // returns true
 * checkThreeAndTwo([1, 1, 1, 1, 2]); // returns false
 * checkThreeAndTwo([1, 2, 3, 4, 5]); // returns false
 */
function checkThreeAndTwo(array) {
  let obj = {};

  for (const each of array) {
    obj[each] = (obj[each] || 0) + 1;
  }

  if (Object.keys(obj).length !== 2) return false;

  return obj[Object.keys(obj)[0]] === 2 || obj[Object.keys(obj)[0]] === 3;
}
