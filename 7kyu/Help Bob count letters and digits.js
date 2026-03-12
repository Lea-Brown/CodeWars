/**
 * 7 kyu
 * Help Bob count letters and digits.
 * https://www.codewars.com/kata/5738f5ea9545204cec000155/javascript
 *
 * Counts the number of ASCII letters (A–Z, a–z) and digits (0–9)
 * contained in a string using a lookup map.
 *
 * Each character in the input string is checked against a predefined
 * map of valid alphanumeric characters. If the character exists in
 * the map, it is counted.
 *
 * @param {string} input - The string to evaluate.
 * @returns {number} The number of alphanumeric characters found in the string.
 *
 * @example
 * countLettersAndDigits("abc123");
 * // returns 6
 *
 * @example
 * countLettersAndDigits("Hello, World! 2026");
 * // returns 14
 *
 * @example
 * countLettersAndDigits("!@#$%");
 * // returns 0
 */

function countLettersAndDigits(input) {
  const map = {
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
    F: true,
    G: true,
    H: true,
    I: true,
    J: true,
    K: true,
    L: true,
    M: true,
    N: true,
    O: true,
    P: true,
    Q: true,
    R: true,
    S: true,
    T: true,
    U: true,
    V: true,
    W: true,
    X: true,
    Y: true,
    Z: true,

    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,

    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };
  let count = 0;
  for (const each of input) {
    if (map[each]) count++;
  }
  return count;
}
