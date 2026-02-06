/**
 * 7 kyu
 * Password maker
 * https://www.codewars.com/kata/5637b03c6be7e01d99000046/javascript
 *
 * Creates a simple password by taking the first letter of each word
 * in a phrase and replacing certain letters with numbers.
 *
 * Replacements:
 * - I / i → "1"
 * - O / o → "0"
 * - S / s → "5"
 *
 * @param {string} phrase - A space-separated phrase to convert into a password.
 * @returns {string} The generated password string.
 *
 * @example
 * makePassword("Give me strength") // "Gm5"
 * makePassword("I am strong")      // "1a5"
 * makePassword("Open source is fun") // "0s1f"
 */
function makePassword(phrase) {
  return phrase
    .split(" ")
    .map((word) => {
      if (word[0] === "i" || word[0] === "I") return "1";
      if (word[0] === "o" || word[0] === "O") return "0";
      if (word[0] === "s" || word[0] === "S") return "5";
      return word[0];
    })
    .join("");
}
