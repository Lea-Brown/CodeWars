/**
 * 7 kyu
 * Finding length of the sequence
 * https://www.codewars.com/kata/5566b0dd450172dfc4000005/javascript
 *
 * Returns the length of the sequence between the first and second
 * occurrences of a number in an array, including both occurrences.
 * Returns 0 if the number appears fewer than twice or more than twice.
 *
 * @param {number[]} arr - The array of numbers to search.
 * @param {number} n - The number to find.
 * @returns {number} The sequence length, or 0 if the number occurs
 *                   fewer than twice or more than twice.
 *
 * @example
 * lengthOfSequence([1, 2, 3, 1], 1); // 4
 *
 * @example
 * lengthOfSequence([1, 2, 3, 2, 4], 2); // 3
 *
 * @example
 * lengthOfSequence([1, 2, 3, 4], 2); // 0
 */
function lengthOfSequence(arr, n) {
  let nCount = 0;
  let seqCount = 0;
  for (const each of arr) {
    if (each === n) {
      nCount++;
      if (nCount === 3) return 0;
      seqCount++;
    }
    if (nCount === 1 && each !== n) seqCount++;
  }
  if (nCount < 2) return 0;
  return seqCount;
}
