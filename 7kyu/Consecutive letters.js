/**
 * 7 kyu
 * Consecutive letters
 * https://www.codewars.com/kata/5ce6728c939bf80029988b57/javascript
 *
 * Checks whether a string consists of unique, consecutive lowercase letters.
 *
 * The function returns `true` only if:
 * - Every character is unique.
 * - After sorting the characters alphabetically, each letter is immediately
 *   followed by the next letter in the alphabet.
 *
 * @param {string} s - A string containing lowercase English letters.
 * @returns {boolean} `true` if the letters are unique and consecutive; otherwise `false`.
 *
 * @example
 * solve("abc");
 * // => true
 *
 * @example
 * solve("dabc");
 * // => true
 *
 * @example
 * solve("abd");
 * // => false
 */
function solve(s) {
  const set = new Set(s);
  if (set.size !== s.length) return false;
  s = [...s].sort();
  const next = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: null,
  };
  let nextLetter = next[s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== nextLetter) return false;
    nextLetter = next[s[i]];
  }
  return true;
}
