/**
 * 6 kyu
 * Equal Sides Of An Array
 * https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript
 *
 * Finds an index where the sum of all elements to the left
 * equals the sum of all elements to the right.
 *
 * @param {number[]} arr - The array of numbers to search.
 * @returns {number} The first index where the left and right sums are equal,
 * or -1 if no such index exists.
 *
 * @example
 * findEvenIndex([1, 2, 3, 4, 3, 2, 1]); // 3
 *
 * @example
 * findEvenIndex([1, 100, 50, -51, 1, 1]); // 1
 *
 * @example
 * findEvenIndex([1, 2, 3, 4, 5]); // -1
 */
function findEvenIndex(arr) {
  let obj = {};
  for (let i = arr.length - 1, count = 0; i >= 0; i--) {
    count += arr[i];
    obj[i] = count;
  }
  for (let i = 0, count = 0; i < arr.length; i++) {
    count += arr[i];
    if (obj[i] === count) return i;
  }
  return -1;
}
