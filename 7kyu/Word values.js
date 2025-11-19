/**
 * 7 kyu
 * Word values
 * https://www.codewars.com/kata/598d91785d4ce3ec4f000018/javascript
 *
 * Calculates a "word value" score for each word in an array.
 * Each letter has a numeric value (a = 1, b = 2, ..., z = 26),
 * and each word's total is multiplied by its position in the array (1-indexed).
 *
 * Time complexity: O(n * m)
 *   n = number of words
 *   m = average length of each word
 * Space complexity: O(n) for the output array.
 *
 * Security notes:
 * - Assumes input is safe lowercase alphabetic text.
 * - Non-alphabet characters are ignored due to the `|| 0`.
 *
 * @param {string[]} a  Array of words consisting of lowercase letters.
 * @returns {number[]}  Array of calculated word values.
 */
function wordValue(a) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  const result = [];
  let times = 1;
  for (const word of a) {
    let count = 0;
    for (const letter of word) {
      count += alphabet[letter] || 0;
    }
    result.push(count * times);
    times++;
  }
  return result;
}
