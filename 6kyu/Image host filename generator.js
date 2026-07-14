/**
 * 6 kyu
 * Image host filename generator
 * https://www.codewars.com/kata/586a933fc66d187b6e00031a/javascript
 *
 * Generates a unique random 6-character uppercase name.
 *
 * The function creates a name consisting of six random letters (`A-Z`) and
 * checks that it does not already exist as a key in `photoManager`.
 *
 * @returns {string} A unique 6-character uppercase name.
 *
 * @example
 * // Possible output
 * const name = generateName();
 * // => "QWERTY"
 *
 * @example
 * // Use as a unique key
 * const id = generateName();
 * photoManager[id] = { filename: "image.jpg" };
 *
 * @example
 * // Generate multiple unique names
 * const names = Array.from({ length: 3 }, () => generateName());
 * // => ["ABXQTR", "MNKJLP", "ZYHFDE"]
 */
function generateName() {
  const randomLetters = Array.from({ length: 6 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  ).join("");
  let result = randomLetters;
  while (photoManager[result]) {
    result = randomLetters;
  }
  return result;
}
