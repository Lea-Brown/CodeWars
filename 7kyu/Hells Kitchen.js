/**
 * 7 kyu
 * Hells Kitchen
 * https://www.codewars.com/kata/57d1f36705c186d018000813/javascript
 *
 * Applies "Gordon" transformations to each word in a string:
 * - Replaces vowels (e, i, o, u) with "*"
 * - Replaces "a" or "A" with "@"
 * - Converts all other letters to uppercase
 * - Appends "!!!!" to each transformed word
 *
 * @param {string} a - The input string containing one or more words.
 * @returns {string} The transformed string with Gordon-style formatting.
 *
 * @example
 * // Basic usage
 * gordon("hello world");
 * // Returns: "H*LL*!!!! W*RLD!!!!"
 *
 * @example
 * // Handles 'a' and 'A' specially
 * gordon("A cat ran");
 * // Returns: "@!!!! C@T!!!! R@N!!!!"
 *
 * @example
 * // Multiple words and mixed casing
 * gordon("JavaScript is amazing");
 * // Returns: "J@V@SCR*PT!!!! *S!!!! @M@Z*NG!!!!"
 */

function gordon(a) {
  let result = [];
  const vowels = new Set("eiou");

  a.split(" ").forEach((word) => {
    let newWord = [];

    for (const letter of word) {
      if (vowels.has(letter)) {
        newWord.push("*");
      } else if (letter === "a" || letter === "A") {
        newWord.push("@");
      } else {
        newWord.push(letter.toUpperCase());
      }
    }

    result.push(`${newWord.join("")}!!!!`);
  });

  return result.join(" ");
}
