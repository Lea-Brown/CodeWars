/**
 * 7 kyu
 * Monotone travel
 * https://www.codewars.com/kata/54466996990c921f90000d61/javascript
 *
 * Determines whether an array of numbers is **monotonically non‑decreasing**.
 *
 * A monotone array is one where every element is greater than or equal to the one before it.
 *
 * @param {number[]} arr - The array of numbers to evaluate.
 * @returns {boolean} `true` if the array is monotone non‑decreasing, otherwise `false`.
 *
 * @example
 * isMonotone([1, 2, 2, 3]); // true
 *
 * @example
 * isMonotone([5, 4, 4, 2]); // false
 *
 * @example
 * isMonotone([]); // true (empty array is trivially monotone)
 */
function isMonotone(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
}
