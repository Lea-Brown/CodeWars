/**
 * 7 kyu
 * Count consonants
 * https://www.codewars.com/kata/564e7fc20f0b53eb02000106/javascript
 *
 * Counts the number of consonant letters in a given string.
 *
 * A consonant is any alphabetic character that is not a vowel (a, e, i, o, u).
 * The function is case-insensitive.
 *
 * @param {string} str - The string in which to count consonants.
 * @returns {number} The total number of consonant letters in the string.
 *
 * @example
 * consonantCount("Hello World"); // 7
 * consonantCount("AEIOU");       // 0
 * consonantCount("123!@#");      // 0
 */
function consonantCount(str) {
  let count = 0;
  for (const each of str) {
    if (/[b-df-hj-np-tv-z]/i.test(each)) count++;
  }
  return count;
}
