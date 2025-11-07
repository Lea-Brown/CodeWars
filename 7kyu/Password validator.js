/**
 * 7 kyu
 * Password validator
 * https://www.codewars.com/kata/56a921fa8c5167d8e7000053/javascript
 *
 * Checks if a password is valid based on specific criteria:
 * - Must be at least 8 characters long
 * - Must contain at least one lowercase letter
 * - Must contain at least one uppercase letter
 * - Must contain at least one number
 *
 * @param {string} str - The password string to validate
 * @returns {boolean} True if the password meets all conditions, otherwise false
 *
 * @example
 * password("Password1") // true
 * password("password") // false (no uppercase or number)
 * password("PASS123") // false (no lowercase)
 * password("Pa1") // false (too short)
 */
function password(str) {
  if (str.length < 8) return false;

  const lowercase = {
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
  };

  const uppercase = {
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
  };

  const numbers = {
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

  let lower = false;
  let upper = false;
  let num = false;

  for (const each of str) {
    if (lowercase[each]) lower = true;
    if (uppercase[each]) upper = true;
    if (numbers[each]) num = true;
    if (lower && upper && num) return true; // Early return if all criteria met
  }

  return false;
}
