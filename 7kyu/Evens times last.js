/**
 * 7 kyu
 * Evens times last
 * https://www.codewars.com/kata/5a1a9e5032b8b98477000004/javascript
 *
 * Calculates the sum of values at even indices in an array and
 * multiplies that sum by the last element in the array.
 *
 * If the array is empty, the function returns 0.
 *
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The result of (sum of even-indexed values) × (last value).
 *
 * @example
 * evenLast([2, 3, 4, 5]) // (2 + 4) * 5 = 30
 * evenLast([]) // 0
 */
function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) count += numbers[i];
  }
  return count * numbers[numbers.length - 1];
}
