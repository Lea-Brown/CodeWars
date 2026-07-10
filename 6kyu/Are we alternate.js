/**
 * 6 kyu
 * Are we alternate?
 * https://www.codewars.com/kata/59325dc15dbb44b2440000af/javascript
 *
 * Checks whether a word alternates between vowels and consonants.
 *
 * @param {string} word - The lowercase word to check.
 * @returns {boolean} `true` if every adjacent pair alternates between a vowel
 * and a consonant; otherwise, `false`.
 *
 * @example
 * isAlt("amazon");
 * // => true
 *
 * @example
 * isAlt("apple");
 * // => false
 *
 * @example
 * isAlt("banana");
 * // => true
 */
function isAlt(word) {
  const consts = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  let current = consts[word[0]];
  for (let i = 1; i < word.length; i++) {
    let letter = consts[word[i]];
    if (current === letter) return false;
    current = letter;
  }
  return true;
}
