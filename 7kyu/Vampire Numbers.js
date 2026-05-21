/**
 * 7 kyu
 * Vampire Numbers
 * https://www.codewars.com/kata/54d418bd099d650fa000032d/train/javascript
 *
 * Determines whether two numbers form a **vampire number pair**.
 * A vampire number is a composite number whose digits can be rearranged
 * to form the product of two "fangs" (a and b), using all digits exactly once.
 *
 * This function checks digit frequency:
 * - Counts digits in `a * b`
 * - Subtracts digits from `a` and `b`
 * - If all digit counts return to zero, the pair is a valid vampire pair
 *
 * @param {number} a - The first fang.
 * @param {number} b - The second fang.
 * @returns {boolean} `true` if `a` and `b` form a vampire number pair, otherwise `false`.
 *
 * @example
 * vampireTest(21, 60); // true  → 21 * 60 = 1260 (digits match)
 *
 * @example
 * vampireTest(30, 51); // true  → 30 * 51 = 1530 (digits match)
 *
 * @example
 * vampireTest(10, 11); // false → 10 * 11 = 110 (digits do not match)
 *
 * @example
 * vampireTest(6, 21); // false → 6 * 21 = 126 (digit counts mismatch)
 */
function vampireTest(a, b) {
  let vampNum = a * b;
  let vampObj = {};
  for (const each of vampNum.toString()) {
    vampObj[each] = (vampObj[each] || 0) + 1;
  }
  for (const each of a.toString()) {
    vampObj[each] = vampObj[each] - 1;
  }
  for (const each of b.toString()) {
    vampObj[each] = vampObj[each] - 1;
  }
  for (const each in vampObj) {
    if (vampObj[each] !== 0) return false;
  }
  return true;
}
