/**
 * 7 kyu
 * Move 10
 * https://www.codewars.com/kata/57cf50a7eca2603de0000090/javascript
 *
 * Shifts each lowercase letter in a string 10 places forward in the alphabet.
 * Wraps around from 'z' back to 'a' (Caesar shift of 10).
 *
 * Only supports lowercase letters a–z. Other characters will result in `undefined`
 * being added to the output unless handled separately.
 *
 * @param {string} s - A string containing lowercase alphabetic characters (a–z).
 * @returns {string} A new string with each character shifted 10 places forward.
 *
 * @example
 * moveTen("abc") // "klm"
 * moveTen("xyz") // "hij"
 */
function moveTen(s) {
  const map = {
    a: "k",
    b: "l",
    c: "m",
    d: "n",
    e: "o",
    f: "p",
    g: "q",
    h: "r",
    i: "s",
    j: "t",
    k: "u",
    l: "v",
    m: "w",
    n: "x",
    o: "y",
    p: "z",
    q: "a",
    r: "b",
    s: "c",
    t: "d",
    u: "e",
    v: "f",
    w: "g",
    x: "h",
    y: "i",
    z: "j",
  };
  let result = [];
  for (const each of s) {
    result.push(map[each]);
  }
  return result.join("");
}
