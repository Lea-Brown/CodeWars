/**
 * 7 kyu
 * Absent vowel
 * https://www.codewars.com/kata/56414fdc6488ee99db00002c/javascript
 *
 * Returns the index (0–4) of the vowel missing from the given string.
 * The vowel order is: a = 0, e = 1, i = 2, o = 3, u = 4.
 *
 * @param {string} x - The input string to inspect for missing vowels.
 * @returns {number} The index of the absent vowel.
 *
 * @example
 * absentVowel("John Doe");
 * // Missing vowel: "u" → returns 4
 *
 * @example
 * absentVowel("EducaTion");
 * // Missing vowel: "o" is present, "u" is present, "a" is present, "e" is present → missing "i" → returns 2
 */

function absentVowel(x) {
  const set = new Set(x.toLowerCase());
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (!set.has(vowels[i])) return i;
  }
}
