/**
 * 6 kyu
 * Sentence Calculator
 * https://www.codewars.com/kata/5970fce80ed776b94000008b/javascript
 *
 * Adds up a numeric value for each character in a string.
 *
 * Each character maps to a value like this:
 * - Lowercase letters (a-z) map to 1-26.
 * - Uppercase letters (A-Z) map to double the lowercase value (2-52).
 * - Digits 1-9 map to their own value.
 * - Any other character (including 0, spaces, and punctuation) maps to 0.
 *
 * @param {string} s - The string to convert.
 * @returns {number} The sum of all character values.
 *
 * @example
 * // Lowercase letters only
 * lettersToNumbers('abc');
 * // returns 6 (a=1, b=2, c=3)
 *
 * @example
 * // Mixed case and digits
 * lettersToNumbers('Ab5');
 * // returns 9 (A=2, b=2, 5=5)
 *
 * @example
 * // Characters with no mapped value are ignored
 * lettersToNumbers('a 0!');
 * // returns 1 (only 'a' counts; space, 0, and ! all map to 0)
 */
function lettersToNumbers(s) {
  const values = {
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

    A: 2,
    B: 4,
    C: 6,
    D: 8,
    E: 10,
    F: 12,
    G: 14,
    H: 16,
    I: 18,
    J: 20,
    K: 22,
    L: 24,
    M: 26,
    N: 28,
    O: 30,
    P: 32,
    Q: 34,
    R: 36,
    S: 38,
    T: 40,
    U: 42,
    V: 44,
    W: 46,
    X: 48,
    Y: 50,
    Z: 52,

    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let count = 0;
  for (const each of s) {
    count += values[each] || 0;
  }
  return count;
}
