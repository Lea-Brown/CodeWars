/**
 * 7 kyu
 * Previous multiple of three
 * https://www.codewars.com/kata/61123a6f2446320021db987d/javascript
 *
 * Removes digits from the end of a number until the remaining value
 * is divisible by 3. If no such number exists, returns null.
 *
 * @param {number} n - The input number to process.
 * @returns {number|null} The largest prefix of `n` divisible by 3, or null if none exists.
 *
 * @example
 * prevMultOfThree(1)    // null
 * prevMultOfThree(25)  // null
 * prevMultOfThree(36)  // 36
 * prevMultOfThree(1244)// 12
 */
const prevMultOfThree = (n) => {
  while (n % 3 !== 0) {
    n = +n.toString().slice(0, -1);
  }
  return n || null;
};
