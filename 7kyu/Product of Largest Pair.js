/**
 * 7 kyu
 * Product of Largest Pair
 * https://www.codewars.com/kata/5784c89be5553370e000061b/javascript
 *
 * Returns the product of the two largest numbers in an array.
 *
 * @param {number[]} a - An array of non-negative numbers.
 * @returns {number} The product of the two largest numbers.
 *
 * @example
 * maxProduct([1, 2, 3, 4]); // 12
 *
 * @example
 * maxProduct([5, 2, 8, 3]); // 40
 *
 * @example
 * maxProduct([0, 0, 5, 2]); // 10
 */
function maxProduct(a) {
  let one = 0;
  let two = 0;
  for (const num of a) {
    if (num > one) {
      two = one;
      one = num;
    } else if (num > two) {
      two = num;
    }
  }
  return one * two;
}
