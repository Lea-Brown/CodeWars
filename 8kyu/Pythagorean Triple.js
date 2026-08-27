/**
 * 8 kyu
 * Pythagorean Triple
 * https://www.codewars.com/kata/5951d30ce99cf2467e000013/javascript
 *
 * Checks whether three integers form a Pythagorean triple.
 * The values are sorted so the largest number is treated as the hypotenuse.
 *
 * @param {number[]} integers An array containing three integers.
 * @returns {boolean} True if the integers form a Pythagorean triple, otherwise false.
 *
 * @example
 * isPythagoreanTriple([3, 4, 5]); // true
 *
 * @example
 * isPythagoreanTriple([5, 12, 13]); // true
 *
 * @example
 * isPythagoreanTriple([2, 3, 4]); // false
 */
function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
  return integers[0] ** 2 + integers[1] ** 2 === integers[2] ** 2;
}
