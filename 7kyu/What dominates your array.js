/**
 * 7 kyu
 * What dominates your array?
 * https://www.codewars.com/kata/559e10e2e162b69f750000b4/javascript
 *
 * Returns the dominator (majority element) of an array.
 *
 * A dominator is a value that appears strictly more than half
 * of the total number of elements in the array.
 *
 * If no such value exists, -1 is returned.
 *
 * @param {number[]} arr - The array of numbers to evaluate.
 * @returns {number} The dominator value, or -1 if none exists.
 *
 * @example
 * dominator([3, 4, 3, 2, 3, 3, 3]); // 3
 *
 * @example
 * dominator([1, 2, 3, 4]); // -1
 */

function dominator(arr) {
  let obj = {};
  for (const each of arr) {
    obj[each] = (obj[each] || 0) + 1;
  }
  let max = arr.length / 2;
  let result = -1;
  for (const each in obj) {
    if (obj[each] > max) {
      max = obj[each];
      result = +each;
      continue;
    }
    if (obj[each] === max) {
      result = -1;
    }
  }
  return result;
}

// Boyer–Moore Majority
function dominator(arr) {
  let count = 0;
  let candidate = null;

  for (const value of arr) {
    if (count === 0) {
      candidate = value;
      count = 1;
    } else {
      count += value === candidate ? 1 : -1;
    }
  }

  count = 0;
  for (const value of arr) {
    if (value === candidate) count++;
  }

  return count > arr.length / 2 ? candidate : -1;
}
