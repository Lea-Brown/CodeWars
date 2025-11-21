/**
 * 7 kyu
 * Inspiring Strings
 * https://www.codewars.com/kata/5939ab6eed348a945f0007b2/javascript
 *
 * Finds and returns the longest word in a space-separated string.
 * If multiple words share the longest length, the last one is returned.
 *
 * @param {string} stringOfWords - A string containing words separated by spaces.
 * @return {string} The longest word found in the input string.
 *
 * @example
 * longestWord("red blue yellow");
 * // "yellow"
 *
 * @example
 * longestWord("big small tall");
 * // "small" (because it appears last among the longest)
 */
function longestWord(stringOfWords) {
  let longest = 0;
  let word;
  stringOfWords.split(" ").forEach((each) => {
    if (each.length >= longest) {
      word = each;
      longest = each.length;
    }
  });
  return word;
}
